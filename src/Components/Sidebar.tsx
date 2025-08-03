import {
  MdHome,
  MdSubscriptions,
  MdVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineSettings,
  MdOutlineFlag,
  MdOutlineFeedback,
  MdExplore,
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
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { RiVideoLine } from "react-icons/ri";
import { SidebarSection } from "./SidebarSection";

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: SidebarProps) => {
  const mainMenu = [
    { label: "Home", icon: <MdHome size={22} /> },
    { label: "Shorts", icon: <SiYoutubeshorts size={22} /> },
    { label: "Subscriptions", icon: <MdSubscriptions size={22} /> },
  ];

  const libraryMenu = [
    { label: "Library", icon: <MdVideoLibrary size={22} /> },
    { label: "History", icon: <FaHistory size={22} /> },
    { label: "Your Videos", icon: <RiVideoLine size={22} /> },
    { label: "Watch Later", icon: <MdOutlineWatchLater size={22} /> },
  ];

  const exploreMenu = [
    { label: "Shopping", icon: <MdLocalMall size={22} /> },
    { label: "Music", icon: <MdMusicNote size={22} /> },
    { label: "Films", icon: <MdLocalMovies size={22} /> },
    { label: "Live", icon: <MdLiveTv size={22} /> },
    { label: "Gaming", icon: <MdSportsEsports size={22} /> },
    { label: "News", icon: <MdNewspaper size={22} /> },
    { label: "Sport", icon: <MdSportsSoccer size={22} /> },
    { label: "Courses", icon: <MdSchool size={22} /> },
    { label: "Fashion & Beauty", icon: <MdStyle size={22} /> },
    { label: "Podcasts", icon: <MdPodcasts size={22} /> },
  ];

  const settingsMenu = [
    { label: "Settings", icon: <MdOutlineSettings size={22} /> },
    { label: "Report", icon: <MdOutlineFlag size={22} /> },
    { label: "Feedback", icon: <MdOutlineFeedback size={22} /> },
  ];

  return (
    <aside
      className={`fixed top-[56px] left-0 h-[calc(100vh-56px)] bg-white border-r overflow-y-auto px-4 py-3 shadow-sm transition-all duration-300 z-40
        ${isOpen ? "w-60" : "w-0 overflow-hidden"}`}
    >
      {isOpen && (
        <>
          <SidebarSection title="" items={mainMenu} />
          <hr className="my-3" />
          <SidebarSection title="Library" items={libraryMenu} />
          <hr className="my-3" />
          <SidebarSection title="Explore" items={exploreMenu} />
          <hr className="my-3" />
          <SidebarSection title="More" items={settingsMenu} />
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
