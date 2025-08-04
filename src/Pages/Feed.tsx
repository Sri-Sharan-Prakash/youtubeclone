import { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../Widgets/Videocards";

declare const process: {
  env: {
    YOUTUBE_API_KEY: string;
    [key: string]: string | undefined;
  };
};

const Feed = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "AIzaSyCF0IUhYNS2K9_ZnnXpz6pVRXMTFuqUhhY";
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${apiKey}`
      )
      .then((res) => {
        setVideos(res.data.items);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  // Show only 2 videos if sidebar is open, else show all
  const displayVideos = isSidebarOpen ? videos.slice(0, 2) : videos;

  return (
    <div
      className={`grid ${
        isSidebarOpen
          ? "grid-cols-1 sm:grid-cols-2"
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      } gap-8 p-6 bg-gray-50 min-h-screen`}
    >
      {displayVideos.map((video: any) => (
        <VideoCard
          key={video.id}
          thumbnail={video.snippet.thumbnails.high?.url || video.snippet.thumbnails.default.url}
          title={video.snippet.title}
          channel={video.snippet.channelTitle}
          channelAvatar={video.snippet.thumbnails.default?.url}
          views={`${Number(video.statistics.viewCount).toLocaleString()} views`}
          date={new Date(video.snippet.publishedAt).toLocaleDateString()}
          duration={video.contentDetails?.duration?.replace("PT", "").toLowerCase()}
        />
      ))}
    </div>
  );
};

export default Feed;