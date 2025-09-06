"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import CommunityFunction from "./Components/communityNews";
import DiscussionGroups from "./Components/DiscussionCard";
import { DiscussionCards } from "@/utils/types";
import SearchaBar from "./Components/SearchBar";
export default function Home() {
  const [search, setSearch] = useState("");
  const [getHigh, setHigh] = useState("For You");
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
  const types = [
    { name: "For You" },
    { name: "Following" },
    { name: "Groups" },
  ];
  return (
    <div className="flex ml-107 flex-col min-h-screen w-full">
      <div className="border border-slate-200 flex items-center justify-center h-20">
        <div className="relative w-[98%] mx-3">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400"
            size={24}
          />
          <SearchaBar
            inputValue={search}
            onChange={(e) => setSearch(e.target.value)}
            placeHolderValue="Search"
          />
        </div>
      </div>
      <div className="border border-slate-200 space-x-10 px-10 flex h-14">
        {types.map((item, i) => (
          <span
            onClick={() => setHigh(item.name)}
            key={i}
            className={`mt-3 ${getHigh == item.name ? "font-extrabold text-black border-b-4 rounded transition-colors duration-300 border-black" : "text-neutral-400"} hover:text-black hover:border-black hover:border-b-4 rounded transition-colors duration-300`}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <CommunityFunction />
        </div>
        <p className="text-xl font-bold mt-4 ml-32">Trending Discussions</p>
        <div className="flex justify-center">
          <DiscussionGroups discussions={discussions} />
        </div>
        <p className="text-xl font-bold mt-4 ml-32">From Your Groups</p>
        <div className="flex justify-center">
          <DiscussionGroups discussions={discussions} />
        </div>
      </div>
    </div>
  );
}
