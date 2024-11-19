import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { api } from "./api/api";
import CreatProduct from "./components/CreatProduct";
import Header from "./components/Header";

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
        <Header/>
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
