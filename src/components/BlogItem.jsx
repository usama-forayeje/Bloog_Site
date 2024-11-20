import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function BlogItem() {
  const products = useLoaderData();
  const { title } = useParams();
  const navigate = useNavigate();

  const currentIndex = products.findIndex((item) => item.title === title);
  const product = products[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(`/blog/${products[currentIndex - 1].title}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      navigate(`/blog/${products[currentIndex + 1].title}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl px-4 py-6 mx-auto bg-white rounded-lg shadow-xl sm:px-6 md:px-8 lg:px-12"
    >
      {/* Image Section */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-6 overflow-hidden rounded-lg shadow-lg group"
      >
        <motion.img
          src={`/images/${product.image}`}
          alt={product.title}
          className="object-cover w-full h-48 transition-transform duration-700 sm:h-64 md:h-80 group-hover:scale-110"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute px-4 py-2 text-sm font-bold text-white rounded-lg top-4 left-4 bg-gradient-to-r from-purple-500 to-blue-600 animate-pulse"
        >
          {product.label}
        </motion.span>
      </motion.div>

      {/* Details Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="mb-4 text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
          {product.title}
        </h1>
        <p className="text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
          {product.description}
        </p>
        <div className="flex flex-col items-start justify-between mt-6 space-y-4 sm:space-y-0 sm:flex-row sm:items-center">
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xl font-bold text-blue-600 sm:text-2xl lg:text-3xl"
          >
            ${product.price}
          </motion.span>
          <div className="flex items-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-yellow-400 animate-pulse sm:w-8 sm:h-8"
            >
              <path d="M12 .587l3.668 7.568L24 9.751l-6 5.849 1.417 8.5L12 18.584l-7.417 4.515L6 15.6 0 9.751l8.332-1.596L12 .587z" />
            </motion.svg>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="ml-2 text-base font-medium text-gray-800 sm:text-lg"
            >
              {product.rating || "N/A"}
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex flex-col justify-between mt-8 space-y-4 sm:flex-row sm:space-y-0">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`w-full px-6 py-3 font-semibold text-white rounded-lg shadow-md sm:w-auto transition ${
            currentIndex === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          <ArrowLeft className="inline w-5 h-5 mr-2" />
          Prev
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          disabled={currentIndex === products.length - 1}
          className={`w-full px-6 py-3 font-semibold text-white rounded-lg shadow-md sm:w-auto transition ${
            currentIndex === products.length - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Next
          <ArrowRight className="inline w-5 h-5 ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default BlogItem;
