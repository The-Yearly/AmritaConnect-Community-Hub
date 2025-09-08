import GroupOverView from "./components/groupOverView";
import SideGroupInfo from "./components/sideOverview";
export default function GroupPage() {
  return (
    <div className="w-full p-6 h-full grid grid-cols-4">
      <div className="col-span-1">
        <SideGroupInfo />
      </div>
      <div className="col-span-3 ml-8">
        <GroupOverView />
      </div>
    </div>
  );
}
