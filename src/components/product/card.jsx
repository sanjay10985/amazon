import { ChevronRight } from "lucide-react";

const ProductCard = ({ product }) => (
  <div className="relative group rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-102">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
      <h3 className="text-white font-medium">{product.name}</h3>
      <p className="text-white opacity-90">${product.price}</p>
    </div>
    <div className="absolute top-4 right-4 bg-orange-400 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <ChevronRight className="w-4 h-4 text-white" />
    </div>
  </div>
);

export default ProductCard;
