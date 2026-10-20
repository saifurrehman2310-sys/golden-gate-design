import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FloatingBlobs, defaultBlobScatter } from "@/components/site/FloatingBlobs";
import { contact, mailtoUrl } from "@/data/contact";

const steps = [
  { title: "Send a request", body: "Tell us who you are and, if you like, what you need help with." },
  {
    title: "We coordinate",
    body: "Saif Studio reviews it and confirms whether local support is available for your request.",
  },
  {
    title: "You're introduced",
    body: "If it's a fit, we arrange the connection. Nothing is promised until availability is confirmed.",
  },
];

const inputClass =
  "mt-3 w-full rounded-lg border border-white/[0.1] bg-[color-mix(in_oklab,#ffffff_4%,transparent)] px-4 py-3.5 text-sm outline-none backdrop-blur-sm transition-colors placeholder:text-muted-foreground/60 focus:border-[var(--gold)]";
const labelClass = "text-xs uppercase tracking-[0.2em] text-muted-foreground";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = { name?: string; email?: string };
type Status = "idle" | "opened" | "failed";

export default function CanadianSupport() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const help = String(data.get("help") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email address.";
    else if (!emailPattern.test(email)) next.email = "That email address doesn't look right.";
    setErrors(next);
    if (next.name || next.email) {
      setStatus("idle");
      return;
    }

    // Uses the same mechanism as the main contact form: a pre-filled email addressed to Saif Studio.
    // The request only reaches us when the visitor sends that email from their own email app.
    try {
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nBusiness: ${business || "—"}\n\nHelp needed:\n${help || "—"}`,
      );
      window.location.href = `${mailtoUrl}?subject=${encodeURIComponent(
        `Canadian local support request — ${business || name}`,
      )}&body=${body}`;
      setStatus("opened");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <>
      <section className="relative overflow-x-clip">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 45% at 50% 10%, color-mix(in oklab, var(--ice) 9%, transparent), transparent 72%)",
          }}
          aria-hidden
        />
        <FloatingBlobs positions={defaultBlobScatter} />
        <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-16 lg:px-10 lg:pt-52 lg:pb-24">
          <Reveal>
            <Link
              to="/"
              className="lux-link inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={14} /> Back to Saif Studio
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-10 text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Canadian Local Support</p>
          </Reveal>
          <Reveal delay={160}>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,6.5vw,4.8rem)] leading-[1] font-semibold">
              A local connection, <span className="text-gold-gradient">on request.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Clients across Canada can ask Saif Studio to introduce them to local support. It's optional and
              arranged through us: send a request and we'll coordinate the connection.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ol className="space-y-8">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="pt-1 font-display text-sm text-[var(--gold)]">0{i + 1}</span>
                  <div>
                    <h2 className="text-lg font-semibold">{s.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 border-t border-white/[0.08] pt-6 text-xs leading-relaxed text-muted-foreground">
              Local support is a request-based introduction, not a service included with every package.
              Availability and the nature of the support are confirmed case by case.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              noValidate
              className="glass-frame glass-edge space-y-6 rounded-3xl p-7 sm:p-9"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClass}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-2 text-xs text-[var(--champagne)]">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-2 text-xs text-[var(--champagne)]">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="business" className={labelClass}>
                  Business name <span className="normal-case tracking-normal">(optional)</span>
                </label>
                <input id="business" name="business" autoComplete="organization" className={inputClass} />
              </div>
              <div>
                <label htmlFor="help" className={labelClass}>
                  What help do you need? <span className="normal-case tracking-normal">(optional)</span>
                </label>
                <textarea id="help" name="help" rows={4} className={`${inputClass} resize-none`} />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[color-mix(in_oklab,var(--gold)_10%,transparent)] px-8 py-4 text-sm font-medium text-[var(--champagne)] backdrop-blur-md transition-all duration-300 hover:border-[var(--gold)] hover:bg-[color-mix(in_oklab,var(--gold)_18%,transparent)] hover:text-[var(--gold-hover)]"
              >
                Connect with Canadian Local Support <ArrowRight size={16} />
              </button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                We use your name, email address and any details you add only to respond to this request and
                coordinate the introduction. Submitting opens a pre-filled email in your email app; nothing is
                sent until you send it. See our{" "}
                <Link to="/privacy" className="lux-link text-[var(--champagne)]">
                  Privacy Policy
                </Link>
                .
              </p>
              <div aria-live="polite">
                {status === "opened" && (
                  <p className="text-sm text-muted-foreground">
                    Your email app should now open with your request ready to send. We receive it only once you
                    send that email. If nothing opened, write to{" "}
                    <a href={mailtoUrl} className="text-[var(--gold)]">
                      {contact.email}
                    </a>
                    .
                  </p>
                )}
                {status === "failed" && (
                  <p role="alert" className="text-sm text-[var(--champagne)]">
                    We couldn't open your email app. Please write to{" "}
                    <a href={mailtoUrl} className="underline">
                      {contact.email}
                    </a>{" "}
                    with the same details.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
