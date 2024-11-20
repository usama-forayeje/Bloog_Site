import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

function BlogItem() {
  const products = useLoaderData();
  const { title } = useParams(); // Using `title` as per your route
  console.log(products);
  
  const navigate = useNavigate();
 
  
  

  // Find current product by title
  const currentIndex = products.findIndex((item) => item.title === title);
  const product = products[currentIndex];
  
  

  // Navigate to previous product
  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(`/category/${products[currentIndex - 1].title}`);
    }
  };

  // Navigate to next product
  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      navigate(`/category/${products[currentIndex + 1].title}`);
    }
  };

  return (
    <div className="max-w-5xl px-4 py-8 mx-auto bg-white rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="relative mb-6">
        <img
          src={`/images/${product.image}`}
          alt={product.title}
          className="object-cover w-full h-64 transition-transform duration-500 rounded-lg shadow-lg hover:scale-105"
        />
        <span className="absolute px-3 py-1 text-sm font-bold text-white rounded-lg top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-500">
          {product.label}
        </span>
      </div>
      
      {/* Details Section */}
      <div>
        <h1 className="mb-4 text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-lg leading-relaxed text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-yellow-400"
            >
              <path d="M12 .587l3.668 7.568L24 9.751l-6 5.849 1.417 8.5L12 18.584l-7.417 4.515L6 15.6 0 9.751l8.332-1.596L12 .587z" />
            </svg>
            <span className="ml-2 text-lg font-medium text-gray-800">{product.rating}</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-6 py-2 font-semibold text-white rounded-lg shadow-md transition ${
            currentIndex === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          <ArrowLeft className="inline w-5 h-5 mr-2" />
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === products.length - 1}
          className={`px-6 py-2 font-semibold text-white rounded-lg shadow-md transition ${
            currentIndex === products.length - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Next
          <ArrowRight className="inline w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}

export default BlogItem;
