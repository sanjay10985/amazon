import React from "react";
import { Search, Menu } from "lucide-react";
import { searchVariants } from "../constants";
import { motion } from "framer-motion";

const SearchHeader = ({ searchQuery, setSearchQuery }) => (
  <motion.div
    variants={searchVariants}
    className="flex items-center gap-4 bg-white rounded-full shadow-sm"
  >
    <motion.div
      className="bg-amber-500 p-2 rounded-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Search className="w-6 h-6 text-white" />
    </motion.div>
    <div className="flex p-2 items-center justify-between w-full">
      <motion.input
        initial={{ width: "90%" }}
        whileFocus={{ width: "100%" }}
        transition={{ duration: 0.2 }}
        type="text"
        placeholder="Search any item..."
        className="flex-1 outline-none text-gray-600"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.2 }}>
        <Menu className="w-5 h-5 text-gray-400 text-lg mr-4" />
      </motion.div>
    </div>
  </motion.div>
);

export default SearchHeader;
