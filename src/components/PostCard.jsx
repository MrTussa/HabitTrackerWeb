import { useDispatch } from "react-redux";

import { Card, Checkbox } from "@mui/material";
import moment from "moment";
import ProfileButton from "./ProfileButton";
import { toggleLike } from "../store/communityActions";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useState } from "react";

const PostCard = ({
  _id,
  text,
  likes,
  comments = 0,
  userId,
  createdAt,
  name,
  hasLiked = false,
}) => {
  const [currLikes, setCurrLikes] = useState(likes);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(hasLiked);
  const likeHandler = () => {
    dispatch(toggleLike({ postId: _id }));
    if (isChecked) {
      setCurrLikes(currLikes - 1);
    } else {
      setCurrLikes(currLikes + 1);
    }
    setIsChecked((prevState) => !prevState);
  };
  return (
    <Card
      key={userId}
      className="flex flex-col text-lg bg-white  !shadow-card font-semibold group relative !rounded-card max-w-[500px]"
    >
      <div className="flex border-b border-slate-100 p-3 flex-row gap-3 items-center">
        <ProfileButton userId={userId} />
        <div className="flex flex-col text-left">
          <div className="leading-4">{name}</div>
          <div className="text-slate-400 font-light t leading-4">
            {moment(createdAt).format("MMM DD")}
          </div>
        </div>
      </div>
      <p className="font-normal text-slate-700 text-left  px-4">{text}</p>
      <div className="flex justify-end  px-4">
        <div>
          <Checkbox
            onChange={likeHandler}
            size="small"
            icon={<FavoriteRoundedIcon />}
            checkedIcon={<FavoriteRoundedIcon color="orange" />}
            checked={isChecked}
          />
          {currLikes}
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
