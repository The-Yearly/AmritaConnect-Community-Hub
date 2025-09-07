import { Communities } from "@/utils/types";
import CommunityCard from "./communityCard";
import { motion } from "framer-motion";
import { Communityvarients } from "@/utils/types";
export default function CommunityGrids() {
  const Communities: Communities[] = [
    {
      room_id: 1,
      room_title: "Tech Enthusiasts",
      tags: ["Programming", "AI", "Startups"],
      room_pic:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop",
      room_banner:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=300&fit=crop",
      room_desc:
        "A community for developers, engineers, and tech lovers to discuss trends, share projects, and learn together.",
    },
    {
      room_id: 2,
      room_title: "Gamers Arena",
      tags: ["PC Gaming", "Esports", "Consoles"],
      room_pic:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=200&h=200&fit=crop",
      room_banner:
        "https://images.unsplash.com/photo-1617957741649-8d2d69c2e00d?w=800&h=300&fit=crop",
      room_desc:
        "Connect with gamers worldwide, share strategies, join tournaments, and explore new game releases.",
    },
    {
      room_id: 3,
      room_title: "Bookworms Club",
      tags: ["Fiction", "Non-fiction", "Reviews"],
      room_pic:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=200&fit=crop",
      room_banner:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=300&fit=crop",
      room_desc:
        "For readers who love novels, biographies, and literature discussions. Share your book lists and reviews here.",
    },
    {
      room_id: 4,
      room_title: "Fitness Freaks",
      tags: ["Workout", "Nutrition", "Wellness"],
      room_pic:
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=200&h=200&fit=crop",
      room_banner:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=300&fit=crop",
      room_desc:
        "Stay motivated, track your fitness goals, and share diet plans, routines, and success stories.",
    },
    {
      room_id: 5,
      room_title: "Movie Buffs",
      tags: ["Hollywood", "Bollywood", "Reviews"],
      room_pic:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=200&h=200&fit=crop",
      room_banner:
        "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=800&h=300&fit=crop",
      room_desc:
        "Discuss the latest blockbusters, hidden gems, and classics with fellow movie lovers.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="w-full max-w-[90rem] gap-8 grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
    >
      {Communities.map((community, i) => (
        <CommunityCard
          key={i}
          room={community}
          varient={Communityvarients.exploreCard}
        />
      ))}
    </motion.div>
  );
}
