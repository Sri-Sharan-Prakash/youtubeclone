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

const VideoCard = ({
  thumbnail,
  title,
  channel,
  channelAvatar,
  views,
  date,
  duration,
  description, // <-- Add this line
}: VideoCardProps) => (
  <div className="bg-white rounded-xl shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 overflow-hidden group w-full" style={{ minWidth: 0 }}>
    <div className="relative">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover" // Increased height for image
      />
      {duration && (
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      )}
    </div>
    <div className="p-4">
      <div className="flex gap-3 items-center mb-2">
        {channelAvatar && (
          <img
            src={channelAvatar}
            alt={channel}
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
        )}
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-xs text-gray-600">{channel}</p>
        </div>
      </div>
      {description && (
        <p className="text-xs text-gray-500 mb-2 line-clamp-3">{description}</p>
      )}
      <div className="flex gap-2 text-xs">
        <span className="bg-gray-100 px-2 py-1 rounded text-gray-700">{views}</span>
        <span className="bg-gray-100 px-2 py-1 rounded text-gray-700">{date}</span>
      </div>
    </div>
  </div>
);

export default VideoCard;