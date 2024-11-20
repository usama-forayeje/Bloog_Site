import ProductItem from "./ProductItem";
import { useLoaderData } from "react-router-dom";

function FilterCategory() {
  const products = useLoaderData()
  
  if (!products || products.length === 0) {
    return (
      <div className="mt-10 text-lg text-center text-gray-500">
        No products available
      </div>
    );
  }

  return (
    <section>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center h-10 mb-5">
          <h3 className="text-2xl font-extrabold tracking-wide text-indigo-800">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-pulse">
              Explore Our Amazing Products!
            </span>
          </h3>
        </div>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {products.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FilterCategory;