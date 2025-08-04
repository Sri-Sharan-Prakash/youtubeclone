import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MdHome, MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        {/* Vertical widget bar when sidebar is closed */}
        {!isSidebarOpen && (
          <div className="fixed top-[56px] left-0 h-[calc(100vh-56px)] w-16 bg-white shadow-lg rounded-xl py-6 flex flex-col items-center gap-8 z-50">
            <button className="flex flex-col items-center text-gray-700 hover:text-red-600">
              <MdHome size={28} />
              <span className="text-xs mt-1">Home</span>
            </button>
            <button className="flex flex-col items-center text-gray-700 hover:text-red-600">
              <SiYoutubeshorts size={28} />
              <span className="text-xs mt-1">Shorts</span>
            </button>
            <button className="flex flex-col items-center text-gray-700 hover:text-red-600">
              <MdSubscriptions size={28} />
              <span className="text-xs mt-1">Subs</span>
            </button>
            <button className="flex flex-col items-center text-gray-700 hover:text-red-600">
              <FaUserCircle size={28} />
              <span className="text-xs mt-1">You</span>
            </button>
          </div>
        )}
        {/* Main content */}
        <main
          className={`flex-1 mt-[56px] p-4 transition-all duration-300 ${
            isSidebarOpen ? "sm:ml-60" : "ml-16"
          }`}
        >
          <Outlet context={{ isSidebarOpen }} />
        </main>
      </div>
    </div>
  );
}

export default App;
