'use client'
import Image from "next/image";
import myPhoto from "../assets/myPhoto.jpeg";
import { CalendarFold, House, MessageCircleMore, Users } from "lucide-react";
import { useState } from "react";
import { navBarTypes } from "@/utils/types";
import { it } from "node:test";
export default function SideNavBar() {
  const [current,setCurrent]=useState("Home")
  const navItems:navBarTypes[]=[{
    name:"Home",
    icon:<House size={24}/>
  },{
    name:"Groups",
    icon:<Users size={24} />
  },
  {
    name:"Events",
    icon:<CalendarFold size={24} />
  },
  {
    name:"Messages",
    icon:<MessageCircleMore size={24}/>
  }
]
  return (
    <div className="w-[32vh] min-h-screen border-r border-slate-200 shadow h-full p-4">
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
          <p className="text-sm text-gray-600">Lil Boi</p>
        </div>
      </div>

      <ul className="space-y-2">
        {navItems.map((item,i)=><li key={i}>
          <div onClick={()=>{setCurrent(item.name)}} className={`flex items-center gap-x-2 p-2 rounded-lg ${current==item.name?"bg-slate-100  cursor":""} hover:bg-slate-100  cursor-pointer`}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        </li>)}
      </ul>
    </div>
  );
}
