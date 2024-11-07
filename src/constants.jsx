export const FEATUREDPRODUCTS = [
  {
    id: 1,
    name: "Premium Speaker",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Digital Camera",
    price: 799.99,
    image:
      "https://plus.unsplash.com/premium_photo-1670274609267-202ec99f8620?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const RECENTORDERS = [
  {
    id: 1,
    name: "Metal Watch Band",
  },
  {
    id: 2,
    name: "Phone Case Pro",
  },
];

export const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export const searchVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
