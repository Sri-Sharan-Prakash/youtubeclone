import { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../Widgets/Videocards";
import { BiLoaderAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [channelMap, setChannelMap] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "AIzaSyCF0IUhYNS2K9_ZnnXpz6pVRXMTFuqUhhY";
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${apiKey}`
      )
      .then(async (res) => {
        const items = res.data.items;
        setVideos(items);

        // Get unique channel IDs
        const channelIds = [
          ...new Set(items.map((video: any) => video.snippet.channelId)),
        ];

        // Fetch channel details for all channel IDs
        const channelRes = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(",")}&key=${apiKey}`
        );

        // Build channel map: channelId -> channel object
        const map: Record<string, any> = {};
        channelRes.data.items.forEach((channel: any) => {
          map[channel.id] = channel;
        });
        setChannelMap(map);

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <BiLoaderAlt className="animate-spin text-7xl text-red-500" />
      </div>
    );
  }

  const displayVideos = videos;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-gray-50 min-h-screen transition-all duration-300">
      {displayVideos.length === 0 ? (
        <div className="col-span-full text-center text-gray-400 text-lg">
          No videos available.
        </div>
      ) : (
        displayVideos.map((video: any) => (
          <div onClick={() => navigate(`/video/${video.id}`)} key={video.id} className="cursor-pointer">
          <VideoCard
            key={video.id}
            thumbnail={
              video.snippet.thumbnails.high?.url ||
              video.snippet.thumbnails.default.url
            }
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            channelAvatar={
              channelMap[video.snippet.channelId]?.snippet?.thumbnails?.default
                ?.url
            }
            views={`${Number(video.statistics.viewCount).toLocaleString()} views`}
            date={new Date(video.snippet.publishedAt).toLocaleDateString()}
            duration={video.contentDetails?.duration?.replace("PT", "").toLowerCase()}
            />
            </div>
        ))
      )}
    </div>
  );
};

export default Feed;