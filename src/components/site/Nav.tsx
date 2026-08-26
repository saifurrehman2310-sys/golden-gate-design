import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "nav-capsule flex w-full max-w-4xl items-center justify-between rounded-full px-6 py-3.5 transition-all duration-500",
          scrolled && "nav-capsule-scrolled",
        )}
      >
        <Link to="/" className="font-display text-base tracking-tight" onClick={() => setOpen(false)}>
          Saif<span className="text-[var(--gold)]"> Studio</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "lux-link text-sm text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full border border-[var(--gold)]/50 bg-[color-mix(in_oklab,var(--gold)_14%,transparent)] px-5 py-1.5 text-sm text-[var(--champagne)] backdrop-blur-md transition-all duration-300 hover:border-[var(--gold)] hover:bg-[color-mix(in_oklab,var(--gold)_22%,transparent)]"
          >
            Let's Talk
          </Link>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="nav-capsule absolute top-[calc(100%+0.5rem)] w-[calc(100%-2rem)] max-w-4xl rounded-2xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {[...links, { to: "/contact", label: "Contact" }].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-muted-foreground hover:text-[var(--gold)]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
