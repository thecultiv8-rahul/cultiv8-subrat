import { useEffect, useState } from "react";
import { SEAT_OPTIONS, SITE } from "../data/content.js";
import popupImg from "../photos/Frame 1984081565.png";

const INITIAL = { name: "", mobile: "", seats: "" };

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Enter your full name.";
  if (!/^[6-9]\d{9}$/.test(f.mobile)) e.mobile = "Enter a valid 10-digit number.";
  if (!f.seats) e.seats = "Select number of seats.";
  return e;
}

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setOpen(false);
  }

  function set(field, val) {
    setForm(f => ({ ...f, [field]: val }));
    setErrors(e => ({ ...e, [field]: undefined }));
  }

  async function submit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("sending");
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "popup" }),
      });
      setStatus("sent");
    } catch {
      setStatus("sent");
    }
  }

  if (!open) return null;

  return (
    <div className="epop__overlay" onClick={e => e.target === e.currentTarget && close()}>
      <div className="epop">
        <button className="epop__close" onClick={close} aria-label="Close">✕</button>

        <div className="epop__photo">
          <img src={popupImg} alt="Cultiv8 workspace" />
          <div className="epop__photo-badge">🔥 Limited Time Offer</div>
        </div>

        {status === "sent" ? (
          <div className="epop__success">
            <span className="epop__success-icon">✓</span>
            <h3>We'll call you back shortly!</h3>
            <p>Our team will reach out within the hour with offer details.</p>
            <button className="epop__submit" onClick={close}>Close</button>
          </div>
        ) : (
          <form className="epop__form" onSubmit={submit} noValidate>
            <h3 className="epop__title">Grab the Festive Offer</h3>
            <p className="epop__sub">Starting from ₹6999* · Sterling Towers, Baner</p>

            <div className="epop__field">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={e => set("name", e.target.value)}
                className={errors.name ? "epop__input is-error" : "epop__input"}
              />
              {errors.name && <span className="epop__err">{errors.name}</span>}
            </div>

            <div className="epop__field">
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.mobile}
                onChange={e => set("mobile", e.target.value)}
                className={errors.mobile ? "epop__input is-error" : "epop__input"}
                maxLength={10}
              />
              {errors.mobile && <span className="epop__err">{errors.mobile}</span>}
            </div>

            <div className="epop__field">
              <select
                value={form.seats}
                onChange={e => set("seats", e.target.value)}
                className={errors.seats ? "epop__input epop__select is-error" : "epop__input epop__select"}
              >
                <option value="">Number of Seats</option>
                {SEAT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              {errors.seats && <span className="epop__err">{errors.seats}</span>}
            </div>

            <button type="submit" className="epop__submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Enquiry →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
