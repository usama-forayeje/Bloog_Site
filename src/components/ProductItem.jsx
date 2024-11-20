import { Link } from "react-router-dom";

function ProductItem({ item }) {
  const imgLink = `/images/${item?.image}`;

  return (
    <div className="relative col-span-1 overflow-hidden transition duration-500 ease-in-out transform border border-gray-200 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl group">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden group">
        <img
          src={imgLink}
          alt={item?.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
        />
<span className="absolute px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 rounded opacity-0 top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:opacity-100">
          {item?.label}
        </span>
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100"></div>
      </div>

      {/* Content Section */}
      <div className="p-4 bg-white">
        <h4 className="text-lg font-semibold text-gray-800 transition duration-200 ease-in-out hover:text-blue-500">
          {item?.title}
        </h4>
        <p className="mt-2 text-sm text-gray-600 capitalize">
          {item?.category}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-blue-600">
            ${item?.price}
          </span>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-yellow-400 group-hover:animate-bounce"
            >
              <path d="M12 .587l3.668 7.568L24 9.751l-6 5.849 1.417 8.5L12 18.584l-7.417 4.515L6 15.6 0 9.751l8.332-1.596L12 .587z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-700">
              {item?.ratting}
            </span>
          </div>
        </div>
        <Link
          to={`/category/${item.title}`} 
          className="relative block py-2 mt-4 font-medium text-center text-white transition duration-300 transform rounded shadow-md bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 hover:shadow-lg"
        >
          <span className="absolute inset-0 border-2 border-transparent rounded group-hover:border-blue-500"></span>
          <span className="relative z-10">Read More</span>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
