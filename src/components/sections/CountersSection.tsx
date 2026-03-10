import { useEffect, useRef, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const counters = [
  { value: 10, suffix: "M+", label: "Lives Changed" },
  { value: 1200, suffix: "+", label: "Schools Built" },
  { value: 5000, suffix: "+", label: "Water Wells" },
  { value: 65, suffix: "", label: "Countries Served" },
];

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const Counter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
        {count.toLocaleString()}{suffix}
      </span>
      <p className="text-muted-foreground font-body text-lg mt-2 tracking-wide">{label}</p>
    </div>
  );
};

const CountersSection = () => (
  <section className="section-padding bg-background">
    <AnimatedSection>
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {counters.map((c) => (
          <Counter key={c.label} {...c} />
        ))}
      </div>
    </AnimatedSection>
  </section>
);

export default CountersSection;
