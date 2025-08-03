type SidebarSectionProps = {
  title: string;
  items: { label: string; icon: React.ReactNode }[];
};

export const SidebarSection = ({ title, items }: SidebarSectionProps) => (
  <div className="mb-3">
    {title && (
      <p className="text-xs font-semibold text-gray-500 px-2 mb-1">{title}</p>
    )}
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-4 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-all"
        >
          <span className="text-gray-600">{item.icon}</span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  </div>
);