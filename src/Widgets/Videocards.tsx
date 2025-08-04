import { BiPlay } from "react-icons/bi";

type VideoCardProps = {
  thumbnail: string;
  title: string;
  channel: string;
  channelAvatar?: string;
  views: string;
  date: string;
  duration?: string;
  description?: string; // <-- Add this line
};

function formatViews(views: string) {
  const num = Number(views.replace(/[^0-9]/g, ""));
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B`;
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return num.toString();
}

function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}

const VideoCard = ({
  thumbnail,
  title,
  channel,
  channelAvatar,
  views,
  date,
  duration,
}: VideoCardProps) => (
  <div className="bg-white rounded-xl shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 overflow-hidden group w-full" style={{ minWidth: 0 }}>
    <div className="relative">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover"
      />
      {duration && (
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      )}
      {/* Play icon on hover */}
      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <BiPlay size={40} className="text-white text-3xl bg-black bg-opacity-60 rounded-full p-2" />
      </span>
    </div>
    <div className="px-4 pt-3 py-2 h-full">
      <div className="flex gap-3 mb-2">
        {channelAvatar && (
          <img
            src={channelAvatar}
            alt={channel}
            className="w-8 h-8 rounded-full object-cover border border-gray-200"
          />
        )}
        <div className="flex-1">
          <h3 className="text-gray-900 text-xs font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-600">{channel}</p>
        </div>
      </div>
      <div className="flex gap-2 text-xs">
        <span className="bg-gray-100 px-2 py-1 rounded text-gray-700">
          {formatViews(views)} Views <span className="mx-1">•</span> {timeAgo(date)}
        </span>
      </div>
    </div>
  </div>
);

export default VideoCard;