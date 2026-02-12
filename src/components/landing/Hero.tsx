import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductPreviewCard from "./ProductPreviewCard";

const Hero = () => {
  return (
    <section className="relative bg-hero overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-brand opacity-[0.07] blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-hero-card border border-hero rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-hero-muted">Your bookmarks, reimagined</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero tracking-tight leading-[1.1] mb-6"
          >
            Organize your web,{" "}
            <span className="text-gradient">effortlessly</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-hero-muted max-w-xl mx-auto mb-10"
          >
            Save, organize, and access your bookmarks from anywhere. 
            Real-time sync, private storage, and a beautiful interface.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-primary-foreground font-medium px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Start for Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 border border-hero text-hero-muted font-medium px-8 py-3.5 rounded-xl hover:bg-hero-card transition-colors text-sm"
            >
              See Features
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <ProductPreviewCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
