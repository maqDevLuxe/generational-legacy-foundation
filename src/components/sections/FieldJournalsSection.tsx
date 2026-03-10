import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const journals = [
  {
    date: "Feb 14, 2026",
    location: "Malawi",
    title: "The Well That Changed Everything",
    excerpt: "When the first drops of clean water flowed, the entire village gathered in tears of joy...",
  },
  {
    date: "Jan 28, 2026",
    location: "Nepal",
    title: "A Classroom Under the Himalayas",
    excerpt: "Thirty-two children now walk to school instead of working the fields. Their eyes shine...",
  },
  {
    date: "Dec 5, 2025",
    location: "Guatemala",
    title: "Mothers Rising",
    excerpt: "The maternal health clinic has reduced infant mortality by 60% in just eighteen months...",
  },
];

const FieldJournalsSection = () => (
  <section className="section-padding bg-muted/30">
    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-body mb-4">From The Ground</p>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
        Field Journals
      </h2>
      <div className="divider-ornament mt-6" />
    </AnimatedSection>

    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
      {journals.map((j, i) => (
        <AnimatedSection key={j.title} delay={i * 0.15}>
          <motion.article
            whileHover={{ y: -6 }}
            className="glass-card glass-glow p-8 h-full flex flex-col cursor-pointer"
          >
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-body mb-4">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {j.date}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {j.location}</span>
            </div>
            <h4 className="font-heading text-xl font-bold text-foreground mb-3">{j.title}</h4>
            <p className="text-muted-foreground font-body leading-relaxed flex-1">{j.excerpt}</p>
            <span className="mt-4 text-primary font-body text-sm font-semibold tracking-wide hover:underline">
              Read Full Journal →
            </span>
          </motion.article>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default FieldJournalsSection;
