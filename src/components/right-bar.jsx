import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Bell,
  Search,
  ShoppingBag,
  Heart,
  RotateCcw,
} from "lucide-react";

const SidebarNav = () => {
  const [selectedItem, setSelectedItem] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "profile", icon: User, label: "Profile" },
    { id: "notifications", icon: Bell, label: "Notifications" },
    { id: "search", icon: Search, label: "Search" },
    { id: "orders", icon: ShoppingBag, label: "Orders" },
    { id: "favorites", icon: Heart, label: "Favorites" },
    { id: "history", icon: RotateCcw, label: "History" },
  ];

  const containerVariants = {
    hidden: {
      x: -60,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex mx-auto z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-16 rounded-r-xl py-4 flex flex-col items-center"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          className="size-16 bg-orange-400 mx-auto rounded-full mb-8 flex items-center justify-center cursor-pointer"
        >
          <span className="text-white font-bold text-5xl ">a</span>
          {/* <img src="/logo.png" alt="" /> */}
        </motion.div>

        {/* Navigation Items */}
        <div className="bg-white px-6 py-6 rounded-3xl flex justify-between flex-col">
          <nav className="flex-1 flex flex-col items-center space-y-6">
            {navItems.map(({ id, icon: Icon, label }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
                className="relative"
                onClick={() => setSelectedItem(id)}
              >
                <motion.div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer
                  ${selectedItem === id ? "text-orange-500" : "text-gray-400"}`}
                >
                  <Icon
                    size={30}
                    className="hover:text-orange-400 transition-colors p-1"
                  />
                  {selectedItem === id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -right-1 w-1 h-5 bg-orange-500 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </nav>

          {/* Profile */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full mt-44 bg-gray-200 cursor-pointer overflow-hidden"
          >
            <img
              src="/api/placeholder/32/32"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SidebarNav;
