const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);
const LEAD_TO_EMAIL = process.env.LEAD_EMAIL || "thecultiv8@gmail.com";

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

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  // Honeypot
  if (req.body && req.body.company) return res.status(200).json({ ok: true });

  const { errors, data } = validate(req.body || {});
  if (Object.keys(errors).length) {
    return res.status(400).json({ ok: false, errors });
  }

  const lead = {
    id: Date.now().toString(36),
    ...data,
    source: "festive-privilege-landing",
    createdAt: new Date().toISOString(),
  };

  console.log("[enquiry]", JSON.stringify(lead));

  try {
    await resend.emails.send({
      from: "Cultiv8 Leads <onboarding@resend.dev>",
      to: LEAD_TO_EMAIL,
      subject: `New Enquiry from ${lead.name}`,
      html: `
        <h2>New Cultiv8 Lead</h2>
        <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif">
          <tr><td><strong>Name</strong></td><td>${lead.name}</td></tr>
          <tr><td><strong>Mobile</strong></td><td>${lead.mobile}</td></tr>
          <tr><td><strong>Seats</strong></td><td>${lead.seats}</td></tr>
          <tr><td><strong>Next Step</strong></td><td>${lead.nextStep}</td></tr>
          <tr><td><strong>Source</strong></td><td>${lead.source}</td></tr>
          <tr><td><strong>Time</strong></td><td>${lead.createdAt}</td></tr>
          <tr><td><strong>ID</strong></td><td>${lead.id}</td></tr>
        </table>
      `,
    });
    console.log("[resend] email sent for lead", lead.id);
  } catch (err) {
    console.error("[resend] failed:", err.message);
  }

  return res.status(201).json({ ok: true, id: lead.id });
};
