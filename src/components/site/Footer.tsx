import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 20% 20%, color-mix(in oklab, var(--ice) 8%, transparent), transparent 70%), radial-gradient(50% 40% at 85% 80%, color-mix(in oklab, var(--iris) 7%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="glass-panel glass-edge rounded-2xl p-8 lg:p-12">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <p className="font-display text-2xl">
                Saif<span className="text-[var(--gold)]"> Studio</span>
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                A design and development studio building conversion-focused websites for businesses across
                the United States, Canada and beyond.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</p>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  { to: "/portfolio", label: "Portfolio" },
                  { to: "/services", label: "Services" },
                  { to: "/pricing", label: "Pricing" },
                  { to: "/about", label: "About" },
                  { to: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-muted-foreground transition-colors hover:text-[var(--champagne)]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get in touch</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:hello@saifstudio.com"
                    className="text-muted-foreground transition-colors hover:text-[var(--champagne)]"
                  >
                    hello@saifstudio.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-muted-foreground transition-colors hover:text-[var(--champagne)]"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="text-muted-foreground">Pune, India · Serving worldwide</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Saif Studio. All rights reserved.</p>
            <p>Designed &amp; built in-house.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
