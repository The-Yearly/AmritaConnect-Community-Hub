import { ReactNode } from "react";

export interface navBarTypes {
  name: string;
  link?: string;
  action?: () => void;
  icon: ReactNode;
}

export interface CardType {
  image: string;
  type: string;
  title: string;
  desc: string;
}

export interface DiscussionCards {
  title: string;
  image?: string;
  no_Of_Comments: number;
  last_Updated: string;
}

export interface Communities {
  room_id: number;
  room_title: string;
  tags?: string[];
  room_pic?: string;
  room_banner?: string;
  room_desc: string;
}

export enum Communityvarients {
  exploreCard = "ExploreCard",
  sideCard = "SideCard",
}
