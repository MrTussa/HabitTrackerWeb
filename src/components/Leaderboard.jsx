import { useSelector } from "react-redux";

import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

import ProfileButton from "./ProfileButton";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Leaderboard = () => {
  const { leaderboard } = useSelector((state) => state.community);

  return (
    <div className="w-[300px] h-80 bg-white rounded-card pl-4 pb-4">
      <div className="flex flex-col gap-2 overflow-y-auto overflow-x-hidden h-[85%]">
        {leaderboard.length > 0
          ? leaderboard.map(({ userId, firstname, lastname, stars }, index) => (
              <motion.div
                variants={fadeIn("left", "spring", index * 0.3, 1)}
                initial="hidden"
                animate="show"
                className="flex flex-row justify-between pr-4"
                key={(userId, index)}
              >
                <div className="flex flex-row gap-3 items-center">
                  <ProfileButton userId={userId} />
                  <div>
                    {firstname} {lastname}
                  </div>
                </div>
                <div className="flex items-center">
                  <StarRateRoundedIcon color="orange" /> {stars}
                </div>
              </motion.div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Leaderboard;
