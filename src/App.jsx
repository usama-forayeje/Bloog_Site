import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar  />
      
      {/* Main Content */}
      <div className="flex-1 p-8  mt-4 md:mt-0">
        {/* Header */}
        <Header />
        
        {/* Product List */}
        <Outlet/>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;