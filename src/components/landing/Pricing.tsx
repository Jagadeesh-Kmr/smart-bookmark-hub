import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Up to 100 bookmarks",
      "Google OAuth login",
      "Real-time sync",
      "Private storage",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$5",
    period: "/month",
    description: "For power users who need more",
    features: [
      "Unlimited bookmarks",
      "Priority support",
      "Custom collections",
      "Browser extension",
      "Export & backup",
      "Early access to new features",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-brand text-primary-foreground glow"
                  : "bg-card border border-border shadow-card"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold px-4 py-1 rounded-full">
                  Popular
                </span>
              )}
              <h3 className={`font-semibold text-lg mb-1 ${plan.highlighted ? "" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-5 ${plan.highlighted ? "opacity-80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "opacity-70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className={`h-4 w-4 flex-shrink-0 ${plan.highlighted ? "" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`block text-center text-sm font-medium py-3 rounded-xl transition-colors ${
                  plan.highlighted
                    ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
