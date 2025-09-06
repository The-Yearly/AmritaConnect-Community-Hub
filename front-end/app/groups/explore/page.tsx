"use client";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import CommunityGrids from "./components/communityGrid";
import SearchaBar from "@/app/Components/SearchBar";
import { useState } from "react";
export default function Explore() {
  const tags = [
    "All",
    "Print Out",
    "Assignments",
    "Notes",
    "Drawing",
    "Running",
  ];
  const [search,setSearch]=useState("")
  return (
    <div className="flex flex-col items-center justify-center mt-15 ml-107 px-4">
      <div className="w-full max-w-[90rem]">
        <div className="flex mb-5 flex-col items-center">
          <p className="font-bold mb-4 text-5xl">Discover Your Community</p>
          <p className="text-neutral-500 text-xl">
            Explore groups based on your interests and connect with like minded
            students
          </p>
        </div>
        <div className="relative w-full mb-6">
          <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
    <SearchaBar inputValue={search} placeHolderValue="Discover.." onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <p className="font-semibold text-2xl my-5">Categories</p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-3"
        >
          {tags.map((tag, i) => (
            <button
              key={i}
              className="px-4 py-2 bg-slate-100 text-sm font-medium rounded-full hover:bg-sky-100 hover:text-sky-600 transition"
            >
              {tag}
            </button>
          ))}
        </motion.div>
      </div>
      <CommunityGrids />
    </div>
  );
}
