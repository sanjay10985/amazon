import { Menu } from "lucide-react";
import { itemVariants } from "../../constants";
import { motion } from "framer-motion";

const OrderItem = ({ order }) => (
  <motion.div
    variants={itemVariants}
    className="flex items-center justify-between cursor-pointer bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    whileHover={{ x: 10 }}
  >
    <div className="flex items-center gap-3">
      <motion.img
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.3 }}
        src="https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={order.name}
        className="size-6 rounded-full object-cover"
      />
      <span className="text-gray-700 text-sm">{order.name}</span>
    </div>
    <motion.button
      className="text-gray-400 hover:text-gray-600"
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.2 }}
    >
      <Menu className="w-4 h-4" />
    </motion.button>
  </motion.div>
);

export default OrderItem;
