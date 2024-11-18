import { useState } from "react";

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
    <div className="w-64 bg-gradient-to-b from-indigo-900 to-blue-700 text-white px-6 py-4 fixed top-0 left-0 bottom-0 shadow-xl overflow-y-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Categories</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <ul>
        <li
          onClick={() => handleCategoryClick("all")}
          className={`cursor-pointer text-lg py-2 px-4 rounded-lg mb-2 font-medium hover:bg-blue-500 hover:text-white duration-300 ${
            activeCategory === "all" ? "bg-blue-600 text-white" : "bg-blue-200"
          }`}
        >
          All Products
        </li>
        {filteredCategories.map((item) => (
          <li
            key={item.id}
            onClick={() => handleCategoryClick(item.title)}
            className={`cursor-pointer text-lg py-2 px-4 rounded-lg mb-2 font-medium hover:bg-blue-500 hover:text-white duration-300 ${
              activeCategory === item.title
                ? "bg-blue-600 text-white"
                : "bg-blue-200"
            }`}
          >
            {item.title}
          </li>
        ))}
      </ul>

      {/* Collapsible Footer */}
      <div className="mt-6 border-t border-blue-400 pt-4 text-center">
        <p className="text-sm font-light">
          © {new Date().getFullYear()} Business Class Solutions
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
