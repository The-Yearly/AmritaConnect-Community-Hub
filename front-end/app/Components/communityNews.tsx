"use client";
import { CardType } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function CommunityCard({ news }: { news: CardType }) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden  duration-300 ">
      <img
        alt="theme Heading"
        src={news.image}
        className="h-[48vh] w-full object-cover"
      />
      <div className="p-5 space-y-2">
        <p className="text-sm font-medium text-indigo-500">{news.type}</p>
        <h2 className="text-xl font-bold text-gray-900">{news.title}</h2>
        <p className="text-gray-600 text-base">{news.desc}</p>
      </div>
    </div>
  );
}
export default function CommunityFunction() {
  const communityNews: CardType[] = [
    {
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200",
      type: "Web Development",
      title: "Build Modern Websites",
      desc: "Learn how to create responsive, fast, and accessible websites using the latest web technologies.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
      type: "Machine Learning",
      title: "AI & Data Science",
      desc: "Explore the world of artificial intelligence and machine learning with hands-on projects.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1604147706283-d711d4aa93a0?w=1200",
      type: "Design",
      title: "UI/UX Fundamentals",
      desc: "Understand the principles of user experience and interface design for web and mobile applications.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614064641938-3b7ab8bc67bb?w=1200",
      type: "Cybersecurity",
      title: "Stay Secure Online",
      desc: "Master the essentials of cybersecurity to protect yourself and your applications from threats.",
    },
  ];

  return (
    <div className="max-w-7xl mt-8">
      <Swiper>
        {communityNews.map((news, i) => (
          <SwiperSlide>
            <CommunityCard key={i} news={news} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
