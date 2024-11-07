import { containerVariants, RECENTORDERS } from "../../constants";
import SectionHeader from "../section-header";
import OrderItem from "./item";
import { motion } from "framer-motion";

const RecentOrders = () => (
  <motion.div
    variants={containerVariants}
    className="bg-white rounded-[100px] px-12 py-8"
  >
    <SectionHeader title="Last Orders" color="bg-orange-400" />
    <motion.div className="space-y-2" variants={containerVariants}>
      {RECENTORDERS.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </motion.div>
  </motion.div>
);

export default RecentOrders;
