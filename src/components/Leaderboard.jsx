import { useSelector, useDispatch } from "react-redux";

import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

import ProfileButton from "./ProfileButton";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { fetchLeaderboard } from "../store/communityActions";
import { useEffect } from "react";

const Leaderboard = () => {
  const { leaderboard } = useSelector((state) => state.community);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, []);

  return (
    <div className="w-[300px] h-80 bg-white rounded-card  pb-4">
      <div className="flex justify-between items-center py-3 pl-4">
        <div className="font-bold text-xl text-slate-800">Leaderboard</div>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto overflow-x-hidden h-[85%]">
        {leaderboard.length > 0
          ? leaderboard.map(({ userId, firstname, lastname, stars }, index) => (
              <motion.div
                variants={fadeIn("left", "spring", index * 0.3, 1)}
                initial="hidden"
                animate="show"
                className="flex flex-row justify-between items-center pr-4"
                key={(userId, index)}
              >
                <div className="flex flex-row gap-3 items-center pl-4">
                  <ProfileButton userId={userId} />
                  <div className="flex flex-col items-start">
                    <div className="leading-5">
                      {firstname} {lastname}
                    </div>
                    <div className="text-slate-400 leading-5">
                      {stars} stars
                    </div>
                  </div>
                </div>
                {index === 0 && (
                  <div>
                    <img src="/trophy_1.svg" alt="1" />
                  </div>
                )}
                {index === 1 && (
                  <div>
                    <img src="/trophy_2.svg" alt="2" />
                  </div>
                )}
                {index === 2 && (
                  <div>
                    <img src="/trophy_3.svg" alt="3" />
                  </div>
                )}
              </motion.div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Leaderboard;
