import { BiMenu } from "react-icons/bi";
import {
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
  AiOutlineBell,
} from "react-icons/ai";
import { BsMicFill, BsYoutube } from "react-icons/bs";

type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-white shadow fixed top-0 w-full z-50">
      {/* Left */}
      <div className="flex items-center gap-4">
        <BiMenu size={28} className="cursor-pointer" onClick={toggleSidebar} />
        <div className="flex gap-2 items-center">
        <BsYoutube size={25} color="red"/>
        <span className="text-lg font-semibold text-gray-800 hidden sm:inline">
          YouTube <sup className="font-medium text-black">IN</sup>
        </span>
        </div>
      </div>

      {/* Center */}
      <div className="hidden sm:flex items-center w-full max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 px-4 py-1 rounded-l-full w-full focus:outline-none text-sm"
        />
        <button className="bg-gray-100 px-4 py-1 rounded-r-full border border-gray-300 border-l-0 hover:bg-gray-200">
          <AiOutlineSearch size={20} />
        </button>
        <button className="ml-2 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
          <BsMicFill size={18} />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <AiOutlineVideoCameraAdd size={22} className="cursor-pointer" />
        <AiOutlineBell size={22} className="cursor-pointer" />
        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
          S
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
