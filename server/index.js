import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "20kb" }));

/*
 * No database: enquiries are kept in memory and logged to the console.
 * They are lost when the server restarts. To capture leads permanently,
 * forward them from `handleLead()` to email (e.g. Nodemailer), a CRM
 * webhook, or a Google Sheet.
 */
const enquiries = [];

const SEAT_OPTIONS = ["1", "2-5", "6-15", "16-30", "31-60", "60+"];
const NEXT_STEPS = ["offer", "tour"];

function validate(body = {}) {
  const errors = {};
  const name = String(body.name || "").trim();
  const mobile = String(body.mobile || "").replace(/\D/g, "");
  const seats = String(body.seats || "");
  const nextStep = String(body.nextStep || "");

  if (name.length < 2 || name.length > 80) errors.name = "Please enter your full name.";
  if (!/^[6-9]\d{9}$/.test(mobile)) errors.mobile = "Enter a valid 10-digit mobile number.";
  if (!SEAT_OPTIONS.includes(seats)) errors.seats = "Please select the number of seats.";
  if (!NEXT_STEPS.includes(nextStep)) errors.nextStep = "Choose a preferred next step.";
  if (body.consent !== true) errors.consent = "Please agree to be contacted.";

  return { errors, data: { name, mobile, seats, nextStep } };
}

function handleLead(lead) {
  enquiries.push(lead);
  console.log("[enquiry]", JSON.stringify(lead));
  // TODO: send to email / CRM here.
}

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.post("/api/enquiry", (req, res) => {
  // Simple honeypot: bots fill hidden fields.
  if (req.body?.company) return res.json({ ok: true });

  const { errors, data } = validate(req.body);
  if (Object.keys(errors).length) {
    return res.status(400).json({ ok: false, errors });
  }

  const lead = {
    id: Date.now().toString(36),
    ...data,
    source: "festive-privilege-landing",
    createdAt: new Date().toISOString(),
  };
  handleLead(lead);
  res.status(201).json({ ok: true, id: lead.id });
});

// Serve the built React app in production.
const clientDist = path.join(__dirname, "..", "client", "dist");
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get("*", (_req, res) => res.sendFile(path.join(clientDist, "index.html")));
}

app.listen(PORT, () => console.log(`Cultiv8 server running on http://localhost:${PORT}`));
