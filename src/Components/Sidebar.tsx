import {
  MdHome,
  MdSubscriptions,
  MdOutlineWatchLater,
  MdOutlineSettings,
  MdOutlineFlag,
  MdOutlineFeedback,
  MdLiveTv,
  MdMusicNote,
  MdSportsSoccer,
  MdSchool,
  MdStyle,
  MdNewspaper,
  MdPodcasts,
  MdLocalMall,
  MdLocalMovies,
  MdSportsEsports,
  MdPlaylistPlay,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { SidebarSection } from "./SidebarSection";
import { FiThumbsUp } from "react-icons/fi";
import { useLocation } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();

  const mainMenu = [
    { label: "Home", icon: <MdHome size={22} />, path: "/" },
    { label: "Shorts", icon: <SiYoutubeshorts size={22} />, path: "/shorts" },
    { label: "Subscriptions", icon: <MdSubscriptions size={22} />, path: "/subscriptions" },
  ];

  const libraryMenu = [
    { label: "History", icon: <FaHistory size={22} />, path: "/history" },
    { label: "Playlists", icon: <MdPlaylistPlay size={22} />, path: "/playlists" },
    { label: "Watch Later", icon: <MdOutlineWatchLater size={22} />, path: "/watch-later" },
    { label: "Liked Videos", icon: <FiThumbsUp size={22} />, path: "/liked" },
  ];

  const exploreMenu = [
    { label: "Shopping", icon: <MdLocalMall size={22} />, path: "#" },
    { label: "Music", icon: <MdMusicNote size={22} />, path: "#" },
    { label: "Films", icon: <MdLocalMovies size={22} />, path: "#" },
    { label: "Live", icon: <MdLiveTv size={22} />, path: "#" },
    { label: "Gaming", icon: <MdSportsEsports size={22} />, path: "#" },
    { label: "News", icon: <MdNewspaper size={22} />, path: "#" },
    { label: "Sport", icon: <MdSportsSoccer size={22} />, path: "#" },
    { label: "Courses", icon: <MdSchool size={22} />, path: "#" },
    { label: "Fashion & Beauty", icon: <MdStyle size={22} />, path: "#" },
    { label: "Podcasts", icon: <MdPodcasts size={22} />, path: "#" },
  ];

  const settingsMenu = [
    { label: "Settings", icon: <MdOutlineSettings size={22} />, path: "#" },
    { label: "Report", icon: <MdOutlineFlag size={22} />, path: "#" },
    { label: "Feedback", icon: <MdOutlineFeedback size={22} />, path: "#" },
  ];

  return (
    <aside
      className={`fixed top-[56px] left-0 h-[calc(100vh-56px)] bg-white px-4 py-3 shadow-sm transition-all duration-300 z-40
        ${isOpen ? "w-60 sidebar-scroll overflow-y-hidden hover:overflow-y-auto" : "w-0 overflow-hidden"}`}
    >
      {isOpen && (
        <>
          <SidebarSection title="" items={mainMenu} activePath={location.pathname} />
          <hr className="my-3" />
          <SidebarSection title="You" items={libraryMenu} activePath={location.pathname} />
          <hr className="my-3" />
          <SidebarSection title="Explore" items={exploreMenu} activePath={location.pathname} />
          <hr className="my-3" />
          <SidebarSection title="More" items={settingsMenu} activePath={location.pathname} />
          <hr className="my-3" />
          <div className="text-xs text-gray-500 px-2 pt-2">
            <p>© 2025 YouTube Clone</p>
            <p className="mt-1">Built with ❤️ using React</p>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
