import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    // Failsafe: content already in (or above) the viewport must never stay hidden, for example
    // after a jump-scroll, a restored scroll position, or while an image is still loading.
    const reveal = () => {
      const r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight) {
        setVisible(true);
        io.disconnect();
      }
    };
    const raf = requestAnimationFrame(reveal);
    const timer = window.setTimeout(reveal, 1200);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Comp>
  );
}
