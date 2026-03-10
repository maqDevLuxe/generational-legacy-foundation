import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Children smiling with hope"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-background" />
    </div>

    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-sm md:text-base uppercase tracking-[0.3em] text-ivory-dark font-body mb-6"
      >
        Generational Impact Since 2008
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-ivory leading-tight mb-8"
      >
        Every Life Touched
        <br />
        <span className="text-terracotta-light">Is a Legacy Born</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-lg md:text-xl text-ivory-dark/80 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        We channel 100% of every donation directly to the communities who need it most.
        No overhead. No compromise. Pure impact.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#donate"
          className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold font-body tracking-wide hover:shadow-xl hover:shadow-primary/30 transition-all duration-500 magnetic-hover"
        >
          Make an Impact
        </a>
        <a
          href="#mission"
          className="px-10 py-4 border-2 border-ivory/30 text-ivory rounded-full text-lg font-medium font-body hover:bg-ivory/10 transition-all duration-500"
        >
          Our Story
        </a>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-6 h-10 border-2 border-ivory/40 rounded-full flex justify-center pt-2"
      >
        <div className="w-1.5 h-3 bg-ivory/60 rounded-full" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
