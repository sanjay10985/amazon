import { useState } from "react";
import RecentOrders from "./order/recent";
import FeaturedProducts from "./product/feature";
import SearchHeader from "./search";
import { motion } from "framer-motion";
import { containerVariants } from "../constants";

const LeftBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full  space-y-6 z-10 px-4"
    >
      <SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FeaturedProducts />
      <RecentOrders />
    </motion.div>
  );
};

export default LeftBar;
