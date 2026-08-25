import { useState } from "react";
import { ArrowRight, Mail, MessageCircle, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";

const budgets = ["Starter — $250", "Business — $450", "Premium — Custom", "Not sure yet"];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const business = String(data.get("business") ?? "");
    const budget = String(data.get("budget") ?? "");
    const message = String(data.get("message") ?? "");

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\nBudget: ${budget}\n\n${message}`,
    );
    window.location.href = `mailto:hello@saifstudio.com?subject=${encodeURIComponent(
      `New project enquiry — ${business || name}`,
    )}&body=${body}`;
    setSent(true);
    toast.success("Opening your email client to send the enquiry.");
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-grain">
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-20 lg:px-10 lg:pt-52 lg:pb-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Contact</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.2rem)] leading-[0.98] font-semibold">
              Let's start with <span className="text-gold-gradient">a conversation.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Tell us about the business and the goal. You'll get a clear plan, a timeline and a fixed
              price — usually within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Your name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Business name" name="business" />
                <div>
                  <label htmlFor="budget" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue={budgets[3]}
                    className="mt-3 w-full rounded-lg border border-white/[0.08] bg-[#121212] px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--gold)]"
                  >
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="What does your business do, and what should the website achieve?"
                  className="mt-3 w-full resize-none rounded-lg border border-white/[0.08] bg-[#121212] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-[var(--gold)]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[color-mix(in_oklab,var(--gold)_10%,transparent)] px-8 py-4 text-sm font-medium text-[var(--champagne)] backdrop-blur-md transition-all duration-300 hover:border-[var(--gold)] hover:bg-[color-mix(in_oklab,var(--gold)_18%,transparent)] hover:text-[var(--gold-hover)]"
              >
                Send Enquiry <ArrowRight size={16} />
              </button>
              {sent && (
                <p className="text-sm text-muted-foreground">
                  If your email client didn't open, write to{" "}
                  <a href="mailto:hello@saifstudio.com" className="text-[var(--gold)]">
                    hello@saifstudio.com
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121212] p-10">
              <h2 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Direct lines</h2>
              <ul className="mt-8 space-y-7 text-sm">
                <li className="flex gap-4">
                  <Mail size={18} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                  <a href="mailto:hello@saifstudio.com" className="lux-link">
                    hello@saifstudio.com
                  </a>
                </li>
                <li className="flex gap-4">
                  <MessageCircle size={18} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="lux-link"
                  >
                    Message on WhatsApp
                  </a>
                </li>
                <li className="flex gap-4 text-muted-foreground">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                  Pune, India — working with clients in the US, Canada and worldwide.
                </li>
              </ul>
              <div className="gold-rule my-9" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Prefer to talk it through? Book a free 20-minute consultation and we'll map the fastest
                path to more enquiries for your business.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full rounded-lg border border-white/[0.08] bg-[#121212] px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--gold)]"
      />
    </div>
  );
}
