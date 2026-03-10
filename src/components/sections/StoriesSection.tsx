import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const stories = [
  {
    img: story1,
    name: "Amara, Age 9",
    location: "Sierra Leone",
    quote: "Now I can read stories to my little brother. School changed everything for us.",
  },
  {
    img: story2,
    name: "The Mwanza Village",
    location: "Tanzania",
    quote: "Clean water meant our children stopped getting sick. It meant life.",
  },
  {
    img: story3,
    name: "Kofi & His Classmates",
    location: "Ghana",
    quote: "We dream of becoming doctors and teachers. This school gave us permission to dream.",
  },
];

const StoriesSection = () => (
  <section id="stories" className="section-padding bg-muted/30">
    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-body mb-4">Real Lives, Real Change</p>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
        Beneficiary Stories
      </h2>
      <div className="divider-ornament mt-6" />
    </AnimatedSection>

    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      {stories.map((s, i) => (
        <AnimatedSection key={s.name} delay={i * 0.15}>
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card glass-glow overflow-hidden h-full"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={s.img}
                alt={s.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            <div className="p-8">
              <h4 className="font-heading text-lg font-bold text-foreground">{s.name}</h4>
              <p className="text-sm text-primary font-body mb-4">{s.location}</p>
              <p className="text-muted-foreground font-body italic leading-relaxed">"{s.quote}"</p>
            </div>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default StoriesSection;
