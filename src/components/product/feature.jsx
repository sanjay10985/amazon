import { containerVariants, FEATUREDPRODUCTS } from "../../constants";
import SectionHeader from "../section-header";
import ProductCard from "./card";
import { motion } from "framer-motion";

const FeaturedProducts = () => (
  <motion.div
    variants={containerVariants}
    className="bg-white rounded-[100px] px-12 py-8"
  >
    <SectionHeader title="Top picks" color="bg-amber-500" />
    <motion.div className="space-y-4" variants={containerVariants}>
      {FEATUREDPRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  </motion.div>
);

export default FeaturedProducts;
