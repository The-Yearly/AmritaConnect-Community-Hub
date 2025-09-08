export default function GroupOverView() {
  const discussionData = [
    {
      id: 1,
      title: "Best Camera for Beginners?",
      author: "Ethan Carter",
      author_avatar: "https://i.pravatar.cc/150?img=1",
      created_at: "2 days ago",
      views: 34,
      replies: 12,
    },
    {
      id: 2,
      title: "Is React Worth Learning in 2025?",
      author: "Sophia Lee",
      author_avatar: "https://i.pravatar.cc/150?img=2",
      created_at: "5 hours ago",
      views: 87,
      replies: 21,
    },
    {
      id: 3,
      title: "Best Budget Laptop for Developers?",
      author: "Michael Johnson",
      author_avatar: "https://i.pravatar.cc/150?img=3",
      created_at: "1 week ago",
      views: 143,
      replies: 36,
    },
    {
      id: 4,
      title: "How to Stay Consistent in Coding?",
      author: "Emily Davis",
      author_avatar: "https://i.pravatar.cc/150?img=4",
      created_at: "3 days ago",
      views: 56,
      replies: 18,
    },
    {
      id: 5,
      title: "Best Books to Learn Data Structures?",
      author: "Daniel Martinez",
      author_avatar: "https://i.pravatar.cc/150?img=5",
      created_at: "10 hours ago",
      views: 99,
      replies: 27,
    },
  ];

  return (
    <div className="w-full relative flex flex-col overflow-hidden min-h-screen h-auto rounded-2xl shadow border-2 border-neutral-200">
      <div className="relative h-112 w-full flex-col">
        <img
          src={"https://picsum.photos/1200/1200"}
          className="object-cover h-full w-full rounded"
        />
        <img
          src={"https://picsum.photos/300/300"}
          className="absolute bottom-4 left-4 object-cover h-32 w-32 rounded"
        />
      </div>
      <div className="mt-6 px-5 flex flex-col">
        <p className="font-bold">Discussions</p>
        <div className="border-b-1 my-4 border-neutral-300" />
        {discussionData.map((discussion, i) => (
          <div
            className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition"
            key={i}
          >
            <img
              className="w-14 h-14 rounded-full object-cover shadow-sm"
              src={discussion.author_avatar}
              alt={discussion.author}
            />

            <div className="flex flex-col w-full">
              <p className="text-lg font-semibold text-gray-800">
                {discussion.title}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 text-sm text-gray-600 mt-1">
                <span className="font-medium">
                  Started by {discussion.author}
                </span>
                <span>{discussion.created_at} ago</span>
                <span>{discussion.views} views</span>
                <span>{discussion.replies} replies</span>
              </div>
              <div className="border-b border-neutral-200 mt-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
