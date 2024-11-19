import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { api } from "./api/api";
import CreatProduct from "./components/CreatProduct";

function App() {
  const [products, setProducts] = useState([]); // State to hold product data
  const [categories, setCategories] = useState([]); // State to hold category data
  const [filteredProducts, setFilteredProducts] = useState([]); // State to hold filtered products

  // Load product and category data using the useEffect hook
  useEffect(() => {
    async function fetchData() {
      try {
        // **Fetch product data**
        const productRes = await api.get("/products"); 
        setProducts(productRes.data); 
        setFilteredProducts(productRes.data); 

        // **Fetch category data**
        const categoryRes = await api.get("http://localhost:3000/categories"); 
        setCategories(categoryRes.data); 
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  // Function to filter products based on selected category
  const filterProducts = (category) => {
    if (category === "all") {
      // Show all products
      setFilteredProducts(products);
    } else {
      // Filter products by selected category
      setFilteredProducts(
        products.filter((item) => item.category === category)
      );
    }
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar categories={categories} filterProducts={filterProducts} />
      <div className="flex-1 p-8 ml-64">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-800">
            Empowering Businesses with Smart Solutions
          </h1>
          <p className="text-xl mt-4">
            Tailored tools and services to enhance your business growth.
          </p>
          <div className="mt-6">
            <a
              href="#services"
              className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-md shadow-md transform hover:scale-105 hover:bg-indigo-700 transition duration-300"
            >
              Explore Services
            </a>
          </div>
        </header>
        {/* Product List */}
        {/* <ProductsList products={filteredProducts} /> */}
        <CreatProduct/>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
