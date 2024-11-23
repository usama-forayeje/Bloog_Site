
import { motion } from "framer-motion"; 
import ProductItem from "./ProductItem";
import { useLoaderData } from "react-router-dom";

function ProductsList() {
  const products = useLoaderData()

  if (!products || products.length === 0) {
    return (
      <motion.div
        className="mt-10 text-lg text-center text-gray-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Pop-up Animations for the message */}
        <motion.p
          className="text-4xl font-extrabold text-indigo-700"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Oops! <span className="text-red-500">No products available</span>
        </motion.p>

        {/* Adding some animation to make it next-level */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="text-lg text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            No products to display. Try refreshing or explore different categories!
          </motion.p>

          {/* Adding an icon for fun */}
          <motion.div
            className="flex justify-center mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            <motion.div
              className="w-16 h-16 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, loop: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* You could also add background gradient or a background image */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100 to-pink-200 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
      </motion.div>
    );
  }

  return (
    <section>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center h-10 mb-5">
          <h3 className="text-2xl font-extrabold tracking-wide text-indigo-800">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-pulse">
            
              Explore yOur Amazing Products!
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

export default ProductsList;
