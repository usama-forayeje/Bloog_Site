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

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch product and category data
        const productRes = await api.get("/products"); 
        setProducts(productRes.data); 
        setFilteredProducts(productRes.data); 

        const categoryRes = await api.get("http://localhost:3000/categories"); 
        setCategories(categoryRes.data); 
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((item) => item.category === category)
      );
    }
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar categories={categories} filterProducts={filterProducts} />
      
      {/* Main Content */}
      <div className="flex-1 p-8  mt-4 md:mt-0">
        {/* Header */}
        <Header />
        
        {/* Product List */}
        <ProductsList products={filteredProducts} />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;