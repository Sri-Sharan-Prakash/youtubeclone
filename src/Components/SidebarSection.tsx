import { Link } from "react-router-dom";

type Item = {
  label: string;
  icon: React.ReactNode;
  path: string;
};

type SidebarSectionProps = {
  title: string;
  items: Item[];
  activePath: string;
};

export const SidebarSection = ({ title, items, activePath }: SidebarSectionProps) => (
  <div className="mb-3">
    {title && (
      <p className="text-black font-semibold px-2 mb-1">{title}</p>
    )}
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            to={item.path}
            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition
              ${activePath === item.path ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);