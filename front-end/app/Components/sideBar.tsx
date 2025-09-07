"use client";
import Image from "next/image";
import myPhoto from "../assets/myPhoto.jpeg";
import {
  Bell,
  CalendarFold,
  CircleQuestionMark,
  House,
  MessageCircleMore,
  Settings,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";
import { navBarTypes } from "@/utils/types";
export default function SideNavBar() {
  const [current, setCurrent] = useState("Home");
  const [showNotifications, setShowNotifications] = useState(false);
  useEffect(() => {
    console.log("Notifications Are bEing shown is ", showNotifications);
  }, [showNotifications]);
  const navItems: navBarTypes[] = [
    {
      name: "Home",
      link: "/",
      icon: <House size={24} />,
    },
    {
      name: "Groups",
      link: "/groups/explore",
      icon: <Users size={24} />,
    },
    {
      name: "Events",
      link: "/Events",
      icon: <CalendarFold size={24} />,
    },
    {
      name: "Messages",
      link: "/messages",
      icon: <MessageCircleMore size={24} />,
    },
    {
      name: "Notifications",
      action: () => setShowNotifications(!showNotifications),
      icon: <Bell size={24} />,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: <Settings size={24} />,
    },
    {
      name: "Help And Feedback",
      link: "/help&feedback",
      icon: <CircleQuestionMark size={24} />,
    },
  ];
  return (
    <div className="w-80 fixed min-h-screen border-r flex flex-col justify-between border-slate-200 shadow h-full p-4">
      <div>
        <div className="flex items-center mb-6 p-2 rounded-lg">
          <Image
            width={64}
            height={64}
            alt="Profile picture"
            src={myPhoto}
            className="w-16 h-16 rounded-full"
          />
          <div className="ml-4">
            <p className="text-md font-semibold">TheYearly</p>
            <p className="text-sm text-gray-600">Student</p>
          </div>
        </div>

        <ul className="space-y-2">
          {navItems.slice(0, navItems.length - 2).map((item, i) => (
            <li
              onClick={() => {
                setCurrent(item.name);
                if (item.action) {
                  item.action();
                }
              }}
              key={i}
            >
              <a
                href={item.link}
                className={`flex items-center gap-x-2 p-2 rounded-lg ${current == item.name ? "bg-slate-100  cursor" : ""} hover:bg-slate-100 transition-colors duration-500 ease-in-out cursor-pointer`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="space-y-2 border-t-1 border-slate-200">
          {navItems
            .slice(navItems.length - 2, navItems.length)
            .map((item, i) => (
              <li key={i}>
                <div
                  onClick={() => {
                    setCurrent(item.name);
                  }}
                  className={`flex items-center gap-x-2 p-2 rounded-lg ${current == item.name ? "bg-slate-100  cursor" : ""} hover:bg-slate-100  cursor-pointer`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
