import { useState } from "react";
import { Home, Settings } from "lucide-react"; // Lucide icons
import { Link } from "react-router-dom"; // React Router DOM

function Sidebar({ categories, filterProducts }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    filterProducts(category);
  };

  return (
    <div className="w-64 bg-gradient-to-b from-indigo-900 to-blue-700 text-white px-6 py-4 fixed top-0 left-0 bottom-0 shadow-xl flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Categories</h2>

        {/* Search Bar */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search Categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-1.5 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <ul className="space-y-2">
          <li
            onClick={() => handleCategoryClick("all")}
            className={`cursor-pointer text-lg py-1.5 px-4 rounded-lg font-medium hover:bg-blue-500 hover:text-white duration-300 ${
              activeCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-blue-200"
            }`}
          >
            All Products
          </li>
          {filteredCategories.map((item) => (
            <li
              key={item.id}
              onClick={() => handleCategoryClick(item.title)}
              className={`cursor-pointer text-lg py-1.5 px-4 rounded-lg font-medium hover:bg-blue-500 hover:text-white duration-300 ${
                activeCategory === item.title
                  ? "bg-blue-600 text-white"
                  : "bg-blue-200"
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-around items-center pt-2 mt-1 border-t border-blue-400">
        <Link
          to="/"
          className="flex flex-col items-center gap-1  font-medium text-blue-200 hover:text-white duration-300"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <Link
          to="/settings"
          className="flex flex-col items-center gap-1  font-medium text-blue-200 hover:text-white duration-300"
        >
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </Link>
      </div>
       {/* Collapsible Footer */}
       <div className="mt-1 border-t border-blue-400 pt-3 text-center">
        <p className="text-sm font-light">
          © {new Date().getFullYear()} Business Class Solutions
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
