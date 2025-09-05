import { Users } from "lucide-react";
import { DiscussionCards } from "@/utils/types";
const calculateTime=(time:string)=>{
  const now = Date.now();
  const given = new Date(time).getTime();
  const diffMs = now - given;
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) {
    return `${diffSeconds} sec${diffSeconds !== 1 ? "s" : ""} ago`;
  } else if (diffMinutes < 60) {
    return `${diffMinutes} min${diffMinutes !== 1 ? "s" : ""} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hr${diffHours !== 1 ? "s" : ""} ago`;
  } else {
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  }
}

const DiscussionCard = ({ discussion }: { discussion: DiscussionCards }) => {
  return (
    <div className="w-full border-slate-100 border items-center">
      <div className="my-3 mx-3 flex">
        {discussion.image ? (
          <img src={discussion.image} className="w-12 h-12 rounded" />
        ) : (
          <div className="bg-slate-100 h-14 rounded-lg w-14 flex items-center justify-center">
            <Users strokeWidth={1.3} size={12} className="w-8 h-8" />
          </div>
        )}
        <div className="ml-4">
            <p className="font-bold">{discussion.title}</p>
            <div className="flex text-neutral-400 space-x-2 items-center">
                <p>{discussion.no_Of_Comments} comments •</p>
                <p>{calculateTime(discussion.last_Updated)}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default function DiscussionGroups() {
  const discussions: DiscussionCards[] = [
    {
      title: "Best Programming Language for 2025?",
      image: undefined,
      no_Of_Comments: 42,
      last_Updated: "2025-09-01T10:30:00Z",
    },
    {
      title: "Is AI Taking Over Jobs?",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      no_Of_Comments: 67,
      last_Updated: "2025-09-03T15:45:00Z",
    },
    {
      title: "Future of Web Development",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      no_Of_Comments: 29,
      last_Updated: "2025-09-04T09:12:00Z",
    },
    {
      title: "Best Laptops for Developers",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      no_Of_Comments: 15,
      last_Updated: "2025-09-05T08:00:00Z",
    },
    {
      title: "Is Remote Work Here to Stay?",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      no_Of_Comments: 51,
      last_Updated: "2025-09-02T20:20:00Z",
    },
  ];
  return (
    <div className="max-w-7xl w-full border border-slate-200 overflow-hidden rounded-2xl mt-2 flex flex-col items-center">
      {discussions.map((discussion, i) => (
        <DiscussionCard key={i} discussion={discussion} />
      ))}
    </div>
  );
}
