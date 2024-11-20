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
  Loader2,
} from "lucide-react"; // Lucide icons
import { Link, NavLink, useLoaderData, useNavigation } from "react-router-dom"; // React Router DOM
import { useSpring, animated } from "@react-spring/web";

function Sidebar() {
  // State to hold product data
  const categories = useLoaderData();

  // const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSettings, setShowSettings] = useState(false); // Settings Dropdown
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar Toggle State
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark Mode State

  // Filtered categories based on search term
  const filteredCategories = categories.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigation = useNavigation(); // To track navigation state

  const isPending = navigation.state === "loading"; // Check if navigation is in progress


  // Animation for Settings Dropdown
  const settingsAnimation = useSpring({
    height: showSettings ? "120px" : "0px",
    opacity: showSettings ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  // const handleCategoryClick = (category) => {
  //   // ফিল্টারিং বা ক্লিক ইভেন্টে একশন দিন
  //   console.log(`Clicked category: ${category}`);
  // };

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
        className={`w-64 bg-gradient-to-r   z-20 from-indigo-800 to-purple-700 text-white px-6 py-4 fixed top-0 left-0 bottom-0 shadow-xl flex flex-col justify-between transition-all duration-500 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-64 md:block`}
      >
        {/* Top Section */}
        <div>
          <h2 className="mb-6 text-3xl font-bold text-center transition duration-300 transform hover:text-yellow-300">
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
      {/* All Products */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative cursor-pointer text-lg py-1.5 px-4 rounded-lg font-medium duration-300 block w-full h-full ${
              isActive
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-blue-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
            }`
          }
        >
          {isPending && navigation.location.pathname === "/" ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 text-white animate-spin" />
              <span>Loading...</span>
            </div>
          ) : (
            "All Products"
          )}
        </NavLink>
      </li>

      {/* Dynamic Categories */}
      {filteredCategories.map((item) => (
        <li key={item.id}>
          <NavLink
            to={`/category/${item.title}`}
            className={({ isActive }) =>
              `relative cursor-pointer text-lg py-1.5 px-4 rounded-lg font-medium duration-300 block w-full h-full ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-blue-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
              }`
            }
          >
            {isPending && navigation.location.pathname === `/category/${item.title}` ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 text-white animate-spin" />
                <span>Loading...</span>
              </div>
            ) : (
              item.title
            )}
          </NavLink>
        </li>
      ))}
    </ul>
        </div>

        {/* Bottom Section */}
        <div>
          {/* Dark/Light Mode Toggle */}
          <div className="flex items-center gap-3 mt-6 text-blue-200 cursor-pointer hover:text-white">
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
            className="flex items-center gap-2 mt-4 mb-4 font-medium text-blue-200 duration-300 hover:text-white"
          >
            <Home className="w-5 h-5" />
            Home
          </Link>

          {/* Settings Dropdown */}
          <button
            onClick={() => setShowSettings((prev) => !prev)}
            className="flex items-center justify-between w-full mb-4 font-medium text-blue-200 transition duration-300 transform hover:text-yellow-300"
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
            className="pl-3 space-y-2 overflow-auto scrollbar-hide "
          >
            <Link
              to="/create"
              className="flex items-center gap-3 px-3 py-2 font-medium transition-all duration-300 bg-purple-500 rounded-lg cursor-pointer hover:bg-purple-600"
            >
              <PlusCircle className="w-4 h-4" />
              New Product
            </Link>
            <li className="flex items-center gap-3 px-3 py-2 font-medium transition-all duration-300 bg-purple-500 rounded-lg cursor-pointer hover:bg-purple-600">
              <PlusCircle className="w-5 h-5" />
              New Category
            </li>
            <li className="flex items-center gap-3 px-3 py-2 font-medium transition-all duration-300 bg-purple-500 rounded-lg cursor-pointer hover:bg-purple-600">
              <PlusCircle className="w-5 h-5" />
              New Level
            </li>
          </animated.ul>
        </div>

        {/* Footer */}
        <div className="pt-3 mt-4 text-center border-t border-blue-400">
          <p className="text-sm font-light">
            © {new Date().getFullYear()} Business Class Solutions
          </p>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <button
        className="fixed z-50 p-3 transition-all duration-300 transform bg-blue-700 rounded-full shadow-xl md:hidden top-4 left-4 hover:scale-110 hover:bg-blue-600"
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
