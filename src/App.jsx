import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useNavigation, Outlet } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-100 md:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 mt-4 md:mt-0">
        <Header />

        {/* Show Loading Animation or Outlet */}
        {isLoading ? (
          <div className="p-6 space-y-6">
            {/* Image Placeholder */}
            <div className="w-full h-48 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>

            {/* Text Placeholder */}
            <div className="space-y-2">
              <div className="w-3/4 h-4 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
              <div className="w-1/2 h-4 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
