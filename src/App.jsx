import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // প্রোডাক্ট ও ক্যাটেগরি ডেটা লোড
  useEffect(() => {
    async function fetchData() {
      try {
        const productRes = await fetch("http://localhost:3000/products");
        const categoryRes = await fetch("http://localhost:3000/categories");
        const productData = await productRes.json();
        const categoryData = await categoryRes.json();
        setProducts(productData);
        setFilteredProducts(productData);
        setCategories(categoryData);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  // ফিল্টার ফাংশন
  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((item) => item.category === category));
    }
  };

  

 

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex">
      <Sidebar categories={categories} filterProducts={filterProducts} />
      <div className="flex-1 p-8 ml-64">
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
        <ProductsList
          products={filteredProducts}
        />
       <Footer/>
      </div>
    </div>
  );
}

export default App;
