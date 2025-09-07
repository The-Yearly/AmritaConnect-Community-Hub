export default function SideGroupInfo() {
  const groupData = {
    room_id: 1,
    room_title: "Tech Enthusiasts",
    tags: ["Programming", "AI", "Startups"],
    room_pic:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop",
    room_banner:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=300&fit=crop",
    room_desc:
      "A community for developers, engineers, and tech lovers to discuss trends, share projects, and learn together.",
    users: new Array(102).fill(10),
  };
  const relatedGroups=new Array(3).fill(10)
  return (
    <div className="p-6 h-full">
      <div className="grid-cols-3 border-neutral-100 rounded-2xl border flex flex-col space-y-5 items-center shadow-md w-full h-full">
        <div className="px-6 w-full mt-6 space-y-5">
          <p className="mt-5 font-bold text-2xl">{groupData.room_title}</p>
          <p className="text-neutral-600">{groupData.room_desc}</p>
          <button className="bg-blue-600 w-full rounded-md h-12  text-white">
            Join Group
          </button>
          <div className="border-b-1 border-neutral-300" />
        </div>
        <div className="px-6 w-full space-y-5">
          <p className="mt-5 font-bold text-2xl">
            Members ({groupData.users.length})
          </p>
          <div className="flex ml-2">
            {groupData.users
              .slice(0, 5)
              .map((user, i) =>
                i != 4 ? (
                  <img
                    key={i}
                    className="h-14 w-14 rounded-full -ml-3"
                    src={`https://avatar.iran.liara.run/public/boy?username=[${i}]`}
                  />
                ) : (
                  <div key={i} className="bg-neutral-300 h-14 w-14 rounded-full -ml-5 flex items-center justify-center text-stone-500">
                    + {groupData.users.length - 4}
                  </div>
                ),
              )}
          </div>
          <div className="border-b-1 border-neutral-300" />
        </div>
        <div className="px-6 w-full space-y-5">
          <p className="mt-2 font-bold text-2xl">About</p>
          <div className="flex ml-2">
            <p className="text-neutral-600">{groupData.room_desc} </p>
          </div>
          <div className="border-b-1 border-neutral-300" />
        </div>
                <div className="px-6 w-full space-y-2">
          <p className="mt-2 font-bold text-2xl">Related Groups</p>
          {relatedGroups.map((group,i)=>
          <div key={i} className="mt-5 flex space-y-3 ml-2">
            <img src={"https://picsum.photos/200/300"} className="h-18 w-18 rounded-lg"/>
            <div className="items-center ml-3">
              <p className="font-bold mt-1 line-clamp-2 ">Visual Arts Club</p>
              <p className="text-neutral-500 line-clamp-1">Design And Creativity</p>
            </div>
          </div>
)}
          
        </div>
      </div>
    </div>
  );
}
