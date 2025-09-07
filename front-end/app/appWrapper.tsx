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
        className={`col-span-15 ${
          miniSideBar ? "col-start-2" : "col-start-4"
        } min-h-screen w`}
      >
        {children}
      </main>
    </>
  );
}
