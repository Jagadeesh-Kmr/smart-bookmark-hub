import { motion } from "framer-motion";
import ProductPreviewCard from "./ProductPreviewCard";

const ProductPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Product Preview</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A dashboard built for clarity
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Clean, minimal, and focused — so you can find what matters fast.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-3 shadow-card">
            <ProductPreviewCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreview;
