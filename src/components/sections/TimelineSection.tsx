import AnimatedSection from "@/components/AnimatedSection";

const events = [
  { year: "2008", title: "Foundation Established", desc: "Founded with a vision of 100% transparent giving." },
  { year: "2012", title: "First 100 Schools", desc: "Milestone of 100 schools built across sub-Saharan Africa." },
  { year: "2016", title: "Clean Water Initiative", desc: "Launched the global clean water program in 20 countries." },
  { year: "2020", title: "Pandemic Response", desc: "Deployed $15M in emergency healthcare supplies worldwide." },
  { year: "2024", title: "10M Lives Touched", desc: "Reached the milestone of 10 million lives directly impacted." },
];

const TimelineSection = () => (
  <section className="section-padding bg-background">
    <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-body mb-4">Our Journey</p>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
        Project Timelines
      </h2>
      <div className="divider-ornament mt-6" />
    </AnimatedSection>

    <div className="max-w-3xl mx-auto relative">
      <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border" />
      {events.map((e, i) => (
        <AnimatedSection key={e.year} delay={i * 0.12} className={`relative flex ${i % 2 === 0 ? "justify-start" : "justify-end"} mb-12`}>
          <div className={`w-5/12 ${i % 2 !== 0 ? "text-right" : ""}`}>
            <span className="text-sm font-body font-bold text-primary tracking-wide">{e.year}</span>
            <h4 className="font-heading text-lg font-bold text-foreground mt-1">{e.title}</h4>
            <p className="text-sm text-muted-foreground font-body mt-1 leading-relaxed">{e.desc}</p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background top-1" />
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default TimelineSection;
