"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import CommunityFunction from "./Components/communityNews";

export default function Home() {
  const [search, setSearch] = useState("");
  const [getHigh, setHigh] = useState("For You");
  const types = [
    { name: "For You" },
    { name: "Following" },
    { name: "Groups" },
  ];
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="border border-slate-200 flex items-center justify-center h-20">
        <div className="relative w-[98%] mx-3">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400"
            size={24}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="bg-neutral-100 text-2xl rounded-3xl h-12 w-full border-0 focus:outline-none pl-12 pr-5 text-neutral-400"
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
        <p className="text-xl font-bold mt-4 ml-24">Trending Discussions</p>
      </div>
    </div>
  );
}
