import { getImage } from "../utils/getImage";

function ProductItem({ item }) {
  const imgLink = getImage(`../assets/images/${item.image}`);

  return (
    <div className="relative col-span-1 shadow-lg border border-gray-200 rounded-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-500 ease-in-out group">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={imgLink}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Hot Deal
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4 bg-white">
        <h4 className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-200 ease-in-out">
          {item.title}
        </h4>
        <p className="text-sm text-gray-600 mt-2 capitalize">{item.category}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-600">${item.price}</span>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-yellow-400"
            >
              <path d="M12 .587l3.668 7.568L24 9.751l-6 5.849 1.417 8.5L12 18.584l-7.417 4.515L6 15.6 0 9.751l8.332-1.596L12 .587z" />
            </svg>
            <span className="text-sm font-medium text-gray-700 ml-1">{item.ratting}</span>
          </div>
        </div>
        <a
          href="#"
          className="block mt-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 rounded shadow-md transform hover:scale-105 transition duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default ProductItem;
