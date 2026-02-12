import { motion } from "framer-motion";
import { LogIn, BookmarkPlus, MonitorSmartphone } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    step: "01",
    title: "Sign in with Google",
    description: "One-click authentication with your Google account. Instant setup, no passwords.",
  },
  {
    icon: BookmarkPlus,
    step: "02",
    title: "Save your bookmarks",
    description: "Add any URL with a single click. Organize your web in seconds.",
  },
  {
    icon: MonitorSmartphone,
    step: "03",
    title: "Access anywhere",
    description: "Your bookmarks sync in real-time. Open any device and pick up where you left off.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three steps to organized bookmarks
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            No complex setup. Get started in under a minute.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="relative w-16 h-16 mx-auto mb-5">
                <div className="absolute inset-0 bg-gradient-brand rounded-2xl opacity-10" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Step {s.step}</span>
              <h3 className="font-semibold text-foreground text-lg mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
