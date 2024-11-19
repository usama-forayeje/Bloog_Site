import { useState, useEffect } from "react";
import {
  Home,
  Settings,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  PlusCircle,
  Sun,
  Moon,
} from "lucide-react"; // Lucide icons
import { Link } from "react-router-dom"; // React Router DOM
import { useSpring, animated } from "@react-spring/web"; // Animation library

function Sidebar({ categories, filterProducts }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSettings, setShowSettings] = useState(false); // Settings Dropdown
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar Toggle State
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark Mode State

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animation for Settings Dropdown
  const settingsAnimation = useSpring({
    height: showSettings ? "120px" : "0px",
    opacity: showSettings ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    filterProducts(category);
  };

  // Handle Dark/Light Mode Toggle
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex">
      {/* Sidebar Section */}
      <div
        className={`w-64 bg-gradient-to-r z-20 from-indigo-800 to-purple-700 text-white px-6 py-4 fixed top-0 left-0 bottom-0 shadow-xl flex flex-col justify-between transition-all duration-500 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-64 md:block`}
      >
        {/* Top Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center transform transition duration-300 hover:text-yellow-300">
            Categories
          </h2>

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
        <div>
          {/* Dark/Light Mode Toggle */}
          <div className="mt-6 flex items-center gap-3 cursor-pointer text-blue-200 hover:text-white">
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 font-medium text-blue-200 hover:text-white mt-4 duration-300 mb-4"
          >
            
            <Home className="w-5 h-5" />
            Home
          </Link>

          {/* Settings Dropdown */}
          <button

            onClick={() => setShowSettings((prev) => !prev)}
            className="flex items-center justify-between w-full font-medium text-blue-200 mb-4 transform transition duration-300 hover:text-yellow-300"
          >
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Settings
            </div>
            {showSettings ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          
          <animated.ul
            style={settingsAnimation}
            className="overflow-auto scrollbar-hide pl-3 space-y-2 "
          >
            <li className="flex items-center gap-3 cursor-pointer py-2 px-3 rounded-lg font-medium bg-purple-500 hover:bg-purple-600 transition-all duration-300">
              <PlusCircle className="w-4 h-4" />
              New Product
            </li>
            <li className="flex items-center gap-3 cursor-pointer py-2 px-3 rounded-lg font-medium bg-purple-500 hover:bg-purple-600 transition-all duration-300">
              <PlusCircle className="w-5 h-5" />
              New Category
            </li>
            <li className="flex items-center gap-3 cursor-pointer py-2 px-3 rounded-lg font-medium bg-purple-500 hover:bg-purple-600 transition-all duration-300">
              <PlusCircle className="w-5 h-5" />
              New Level
            </li>
          </animated.ul>
        </div>

        {/* Footer */}
        <div className="mt-4 border-t border-blue-400 pt-3 text-center">
          <p className="text-sm font-light">
            © {new Date().getFullYear()} Business Class Solutions
          </p>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-700 p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-600"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}

export default Sidebar;
