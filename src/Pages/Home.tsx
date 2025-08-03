import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

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
        <main
          className={`flex-1 mt-[56px] p-4 transition-all duration-300 ${
            isSidebarOpen ? "sm:ml-60" : "ml-0"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
