import ProductItem from "./ProductItem";
import { useLoaderData } from "react-router-dom";

function ProductsList() {
  const products = useLoaderData()
  
  if (!products || products.length === 0) {
    return (
      <div className="text-center text-lg mt-10 text-gray-500">
        No products available
      </div>
    );
  }

  return (
    <section>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="h-10 mb-5 flex justify-center items-center">
          <h3 className="font-extrabold text-indigo-800 text-2xl tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-pulse">
              Explore Our Amazing Products!
            </span>
          </h3>
        </div>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsList;