import { Communities } from "@/utils/types";
import Link from "next/link";
import { motion } from "framer-motion";
import { Communityvarients } from "@/utils/types";
export default function CommunityCard(props: {
  errand: Communities;
  varient: Communityvarients;
}) {
  const errand = props.errand;
  const varient = props.varient;
  return (
    <motion.div
      whileHover={{ y: -15 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col rounded-xl overflow-hidden shadow-md w-full h-82"
    >
      <Link href={"/groups/" + errand.room_id}>
        <div className="relative">
          <div className="flex absolute mt-2">
            {errand.tags?.map((tag, i) => (
              <div
                key={i}
                className=" bg-black/50 backdrop-blur-sm mx-1 rounded-4xl py-1 px-3 text-xs md:text-sm text-white"
              >
                {tag}
              </div>
            ))}
          </div>
          <img
            src={errand.room_pic||"/a.svg"}
            className="w-full h-48 object-cover rounded"
            alt="Image"
          />
        </div>
        <p
          className={`text-black mx-3 my-4 ${varient == "ExploreCard" ? "line-clamp-2" : "line-clamp-1"}`}
        >
          {errand.room_title}
        </p>
        <p className="text-slate-400 mx-3  line-clamp-2 h-12 ">
          {errand.room_desc}
        </p>
      </Link>
    </motion.div>
  );
}
