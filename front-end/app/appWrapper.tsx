"use client";
import SideNavBar from "./Components/sideBar";
import { usePathname } from "next/navigation";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const miniSideBar = path.includes("/groups/info");
  return (
    <>
      <SideNavBar miniSideBar={miniSideBar} />
      <main
        className={`${
          miniSideBar ? "col-start-2 col-span-17" : "col-start-4 col-span-15"
        } min-h-screen w-full`}
      >
        {children}
      </main>
    </>
  );
}
