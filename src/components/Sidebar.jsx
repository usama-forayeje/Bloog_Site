import { useState } from "react";
import { Home, Settings, ChevronDown, ChevronUp, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

function Sidebar({ categories, filterProducts }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const settingsAnimation = useSpring({
    height: showSettings ? "140px" : "0px",
    opacity: showSettings ? 1 : 0,
    config: { tension: 220, friction: 20 },
  });

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    filterProducts(category);
  };

  return (
    <div className="w-72 bg-gradient-to-r from-indigo-800 to-purple-700 text-white px-6 py-4 fixed top-0 left-0 bottom-0 shadow-2xl flex flex-col justify-between transition-all duration-300">
      {/* Top Section */}
      <div>
        <h2 className="text-4xl font-extrabold mb-6 text-center">Categories</h2>

        {/* Search Bar */}
        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-md"
          />
        </div>

        <ul className="space-y-3">
          <li
            onClick={() => handleCategoryClick("all")}
            className={`cursor-pointer text-lg py-2 px-4 rounded-lg flex items-center gap-3 font-medium shadow-md transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-purple-600 text-white"
                : "bg-purple-300 hover:bg-purple-400"
            }`}
          >
            <span>All Products</span>
          </li>
          {filteredCategories.map((item) => (
            <li
              key={item.id}
              onClick={() => handleCategoryClick(item.title)}
              className={`cursor-pointer text-lg py-2 px-4 rounded-lg flex items-center gap-3 font-medium shadow-md transition-all duration-300 ${
                activeCategory === item.title
                  ? "bg-purple-600 text-white"
                  : "bg-purple-300 hover:bg-purple-400"
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <div>
        <Link
          to="/"
          className="flex items-center gap-3 font-medium text-purple-200 hover:text-white duration-300 mb-5"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>

        {/* Settings Dropdown */}
        <button
          onClick={() => setShowSettings((prev) => !prev)}
          className="flex items-center justify-between w-full font-medium text-purple-200 hover:text-white duration-300 mb-3"
        >
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 transform transition-transform duration-300" />
            <span>Settings</span>
          </div>
          {showSettings ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>

        <animated.ul
          style={settingsAnimation}
          className="overflow-hidden pl-4 space-y-3"
        >
          <li className="flex items-center gap-3 cursor-pointer py-2 px-3 rounded-lg font-medium bg-purple-500 hover:bg-purple-600 transition-all duration-300">
            <PlusCircle className="w-5 h-5" />
            Create New Product
          </li>
          <li className="flex items-center gap-3 cursor-pointer py-2 px-3 rounded-lg font-medium bg-purple-500 hover:bg-purple-600 transition-all duration-300">
            <PlusCircle className="w-5 h-5" />
            Create New Category
          </li>
          <li className="flex items-center gap-3 cursor-pointer py-2 px-3 rounded-lg font-medium bg-purple-500 hover:bg-purple-600 transition-all duration-300">
            <PlusCircle className="w-5 h-5" />
            Create New Laval
          </li>
        </animated.ul>
      </div>

      {/* Footer */}
      <div className="mt-4 border-t border-purple-400 pt-4 text-center">
        <p className="text-sm font-light">
          © {new Date().getFullYear()} Business Class Solutions
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
