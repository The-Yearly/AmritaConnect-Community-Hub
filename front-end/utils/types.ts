import { ReactNode } from "react";

export interface navBarTypes {
  name: string;
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
