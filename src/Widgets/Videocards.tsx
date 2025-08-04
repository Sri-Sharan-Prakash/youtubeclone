type VideoCardProps = {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  date: string;
};

const VideoCard = ({ thumbnail, title, channel, views, date }: VideoCardProps) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
    <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
    <div className="p-3">
      <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
      <p className="text-xs text-gray-600 mt-1">{channel}</p>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{views}</span>
        <span>{date}</span>
      </div>
    </div>
  </div>
);

export default VideoCard;