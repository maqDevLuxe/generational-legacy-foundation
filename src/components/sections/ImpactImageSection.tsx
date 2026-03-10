import { motion } from "framer-motion";
import impactImg from "@/assets/impact-wide.jpg";

const ImpactImageSection = () => (
  <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
    <motion.img
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      src={impactImg}
      alt="Inspiring landscape representing hope"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-ivory text-center px-6 drop-shadow-lg max-w-4xl leading-tight"
      >
        "The greatest use of a life is to spend it for something that will outlast it."
      </motion.p>
    </div>
  </section>
);

export default ImpactImageSection;
