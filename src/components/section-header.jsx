import { itemVariants } from "../constants";
import { motion } from "framer-motion";

const SectionHeader = ({ title, color }) => (
  <motion.h2
    variants={itemVariants}
    className="text-lg font-semibold mb-3 flex items-center gap-2"
  >
    <motion.div
      className={`size-4 ${color} rounded-sm`}
      animate={{ rotate: 360 }}
      //   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
    {title}
  </motion.h2>
);

export default SectionHeader;
