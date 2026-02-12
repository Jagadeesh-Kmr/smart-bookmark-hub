import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand opacity-[0.04]" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            Start organizing smarter
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            Join thousands of users who save time with SmartMark. Free to start, no credit card required.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground font-medium px-10 py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
          >
            Get Started for Free
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
