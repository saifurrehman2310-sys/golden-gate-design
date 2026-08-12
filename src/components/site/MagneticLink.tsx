import { Link } from "@tanstack/react-router";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  gold: "bg-[var(--gold)] text-[#0a0a0a] hover:bg-[var(--gold-hover)]",
  ghost: "border border-white/15 text-foreground hover:border-[var(--gold)] hover:text-[var(--gold)]",
};

function useMagnet() {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };
  return { ref, onMove, onLeave };
}

export function MagneticLink({
  to,
  children,
  variant = "gold",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const { ref, onMove, onLeave } = useMagnet();
  return (
    <Link
      to={to}
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform .45s var(--ease-lux), background-color .3s, color .3s, border-color .3s" }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </Link>
  );
}

export function MagneticAnchor({
  href,
  children,
  variant = "gold",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const { ref, onMove, onLeave } = useMagnet();
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform .45s var(--ease-lux), background-color .3s, color .3s, border-color .3s" }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  );
}
