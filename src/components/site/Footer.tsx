import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, color-mix(in oklab, var(--ice) 30%, transparent) 20%, color-mix(in oklab, var(--champagne) 35%, transparent) 50%, color-mix(in oklab, var(--iris) 30%, transparent) 80%, transparent 100%)",
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-xl">
              Saif<span className="text-[var(--gold)]"> Studio</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A design and development studio building conversion-focused websites for businesses across
              the United States, Canada and beyond.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</p>
            <ul className="mt-4 space-y-2.5 text-sm">
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
            <ul className="mt-4 space-y-2.5 text-sm">
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
              <li className="text-muted-foreground">Pune, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Saif Studio. All rights reserved.</p>
          <p>Designed &amp; built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
