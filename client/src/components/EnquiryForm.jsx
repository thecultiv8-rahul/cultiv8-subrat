import { useEffect, useRef, useState } from "react";
import { SEAT_OPTIONS, SITE } from "../data/content.js";
import { WhatsAppIcon } from "./Icons.jsx";

const INITIAL = { name: "", mobile: "", seats: "", nextStep: "offer", consent: false, company: "" };

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[6-9]\d{9}$/.test(f.mobile)) e.mobile = "Enter a valid 10-digit mobile number.";
  if (!f.seats) e.seats = "Please select the number of seats.";
  if (!f.consent) e.consent = "Please agree to be contacted.";
  return e;
}

const STEPS = [
  { num: "01", title: "Share your requirement", text: "Name, mobile number and how many seats you need." },
  { num: "02", title: "We call you back", text: "A Cultiv8 team member contacts you within the hour." },
  { num: "03", title: "Offer details or a tour", text: "Receive eligibility & pricing, or visit Sterling Towers." },
];

export default function EnquiryForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const nameRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[href='#enquire']");
      if (!a) return;
      const step = a.dataset.step;
      if (step === "tour" || step === "offer") setForm((f) => ({ ...f, nextStep: step }));
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 600);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const set = (key) => (e) => {
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (key === "mobile") value = value.replace(/\D/g, "").slice(0, 10);
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error("Request failed");
      }
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="enq2" id="enquire">
      <div className="container enq2__inner">

        {/* LEFT */}
        <div className="enq2__left">
          <span className="enq2__pill">Get in touch</span>
          <h2 className="enq2__title">Unlock the Cultiv8 Festive Privilege.</h2>
          <p className="enq2__sub">Tell us what your team needs — we'll share availability, offer terms, or set up a tour of Sterling Towers.</p>

          <ol className="enq2__steps">
            {STEPS.map((s) => (
              <li key={s.num} className="enq2__step">
                <span className="enq2__step-num">{s.num}</span>
                <div>
                  <strong className="enq2__step-title">{s.title}</strong>
                  <p className="enq2__step-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="enq2__contacts">
            <a href={SITE.phoneHref} className="enq2__contact">
              <span className="enq2__contact-icon">
                <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                  <path d="M3 3.5C3 12.6 7.4 17 16.5 17l1-3-3.5-1.5-1 2C11 13.5 6.5 9 5.5 7l2-1L6 2.5 3 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <small>Call us</small>
                <strong>{SITE.phone}</strong>
              </div>
            </a>
            <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="enq2__contact">
              <span className="enq2__contact-icon enq2__contact-icon--wa">
                <WhatsAppIcon size={18} />
              </span>
              <div>
                <small>WhatsApp</small>
                <strong>Chat with us</strong>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="enq2__form-wrap">
          {status === "done" ? (
            <div className="enq2__success" role="status">
              <span className="enq2__success-tick">
                <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                  <path d="M5 12l5 5L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h3>Thank you, {form.name.split(" ")[0]}!</h3>
              <p>
                {form.nextStep === "tour"
                  ? "We've received your tour request. A Cultiv8 team member will call you shortly to fix a time."
                  : "We've received your request. A Cultiv8 team member will call you shortly with the offer details."}
              </p>
              <button className="enq2__btn enq2__btn--outline" onClick={() => { setForm(INITIAL); setStatus("idle"); }}>
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form className="enq2__form" onSubmit={submit} noValidate>
              <h3 className="enq2__form-title">Request exclusive offer details</h3>
              <p className="enq2__form-sub">Takes under a minute. No payment or commitment required.</p>

              <input type="text" name="company" value={form.company} onChange={set("company")} className="hp" tabIndex={-1} autoComplete="off" aria-hidden />

              <label className="enq2__field">
                <span>Full name</span>
                <input ref={nameRef} type="text" value={form.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errors.name} placeholder="Your full name" />
                {errors.name && <em className="enq2__err">{errors.name}</em>}
              </label>

              <label className="enq2__field">
                <span>Mobile number</span>
                <div className="enq2__field-group">
                  <span className="enq2__prefix">+91</span>
                  <input type="tel" inputMode="numeric" placeholder="10-digit mobile" value={form.mobile} onChange={set("mobile")} autoComplete="tel-national" aria-invalid={!!errors.mobile} />
                </div>
                {errors.mobile && <em className="enq2__err">{errors.mobile}</em>}
              </label>

              <label className="enq2__field">
                <span>Number of seats</span>
                <select value={form.seats} onChange={set("seats")} aria-invalid={!!errors.seats}>
                  <option value="">Select seats needed</option>
                  {SEAT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
                {errors.seats && <em className="enq2__err">{errors.seats}</em>}
              </label>

              <fieldset className="enq2__field">
                <legend>What would you like?</legend>
                <div className="enq2__choice">
                  {[
                    { v: "offer", t: "Offer details", s: "Pricing, eligibility & terms" },
                    { v: "tour", t: "Workspace tour", s: "Visit Sterling Towers, Baner" },
                  ].map((c) => (
                    <label key={c.v} className={`enq2__opt${form.nextStep === c.v ? " is-active" : ""}`}>
                      <input type="radio" name="nextStep" value={c.v} checked={form.nextStep === c.v} onChange={set("nextStep")} />
                      <strong>{c.t}</strong>
                      <small>{c.s}</small>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="enq2__consent">
                <input type="checkbox" checked={form.consent} onChange={set("consent")} />
                <span>I agree to be contacted by Cultiv8 by phone, SMS or WhatsApp. My details will be used only for this enquiry. <a href="#privacy">Privacy policy</a></span>
              </label>
              {errors.consent && <em className="enq2__err">{errors.consent}</em>}

              <button type="submit" className="enq2__btn enq2__btn--primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : form.nextStep === "tour" ? "Request a workspace tour →" : "Request offer details →"}
              </button>

              {status === "error" && (
                <p className="enq2__form-error" role="alert">Something went wrong. Please try again or call {SITE.phone}.</p>
              )}
              <p className="enq2__fine">We'll never share your details with third parties.</p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
