import { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../Widgets/Videocards";

declare const process: {
  env: {
    YOUTUBE_API_KEY: string;
    [key: string]: string | undefined;
  };
};

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = process.env.YOUTUBE_API_KEY;
    console.log("API Key:", apiKey);
    axios
      .get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=28&key=${apiKey}`)
      .then((res) => {
        setVideos(res.data.items);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {videos.map((video: any) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export default Feed;