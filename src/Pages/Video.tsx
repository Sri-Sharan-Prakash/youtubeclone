import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function formatViews(views: string) {
  const num = Number(views);
  if (num >= 1_000_000_000)
    return `${(num / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}B`;
  if (num >= 1_000_000)
    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  return num.toString();
}

function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
}

const Video = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showFullDesc, setShowFullDesc] = useState(false);

  useEffect(() => {
    if (!id) return;
    const apiKey = 'AIzaSyCF0IUhYNS2K9_ZnnXpz6pVRXMTFuqUhhY';
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${apiKey}`
      )
      .then((res) => {
        setVideoDetails(res.data.items[0]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading)
    return <div className="text-center py-10">Loading...</div>;
  if (!videoDetails)
    return <div className="text-center py-10">Video not found.</div>;

  const { snippet, statistics, contentDetails } = videoDetails;

  // Show half the description (first 400 chars or first 8 lines)
  const desc = snippet.description;
  const maxChars = 400;
  const isLong = desc.length > maxChars;
  const shortDesc = isLong ? desc.slice(0, maxChars) + '...' : desc;

  return (
    <div className="mx-auto p-4">
      <div className="mb-4">
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={snippet.title}
            allow='autoplay; encrypted-media'
            className="w-full h-96 rounded-xl"
          />
        </div>
      </div>
      <h1 className="text-xl font-bold mb-2 line-clamp-2">
        {snippet.title}
      </h1>
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
        <span>{snippet.channelTitle}</span>
        <span className="mx-1">•</span>
        <span>{formatViews(statistics.viewCount)} views</span>
        <span className="mx-1">•</span>
        <span>{timeAgo(snippet.publishedAt)}</span>
      </div>
      <div className="flex gap-4 text-sm text-gray-500 mb-4 items-center">
        <span>👍 {formatViews(statistics.likeCount)}</span>
        <span>👎 N/A</span>
        <button
          className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          <svg width="16" height="16" fill="currentColor" className="inline-block">
            <path d="M13 10.5a2.5 2.5 0 0 0-2.45 2H6.5a2.5 2.5 0 1 0 0 1h4.05a2.5 2.5 0 1 0 2.45-3zm-7 2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            <path d="M10.5 8.5a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5z"/>
            <path d="M5.5 8.5a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5z"/>
          </svg>
          Share
        </button>
        <span>
          ⏱{' '}
          {contentDetails.duration.replace('PT', '').toLowerCase()}
        </span>
      </div>
      <div className="bg-gray-100 rounded p-3 text-gray-800 whitespace-pre-line relative">
        {showFullDesc ? desc : shortDesc}
        {isLong && (
          <button
            className="absolute right-3 bottom-3 bg-white rounded-full px-2 py-1 shadow text-xs flex items-center"
            onClick={() => setShowFullDesc((v) => !v)}
          >
            {showFullDesc ? '▲ Show less' : '▼ Show more'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Video;