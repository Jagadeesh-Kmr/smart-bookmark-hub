import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  RefreshCw,
  Lock,
  Globe,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Google OAuth Login",
    description: "Sign in securely with your Google account. No passwords to remember.",
  },
  {
    icon: Lock,
    title: "Private Bookmark Storage",
    description: "Your bookmarks are private by default. Only you can see them.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Changes sync instantly across all your devices and browser tabs.",
  },
  {
    icon: Zap,
    title: "Fast & Lightweight",
    description: "Built for speed. No bloat, just a clean and snappy experience.",
  },
  {
    icon: Shield,
    title: "Secure with RLS",
    description: "Row-level security ensures your data is protected at the database level.",
  },
  {
    icon: Rocket,
    title: "Deployed on Vercel",
    description: "Global edge network for lightning-fast loading times everywhere.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to manage bookmarks
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A focused set of features designed for speed, privacy, and simplicity.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-colors duration-300">
                <f.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
