import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUser, searchUsers } from "../store/communityActions";

import { CircularProgress, Button, Modal, Card } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import ProfileButton from "./ProfileButton";

const FriendList = () => {
  const dispatch = useDispatch();
  const { userToken, friends, loading, error, users } = useSelector(
    (state) => state.community
  );

  const [openModal, setOpenModal] = useState(false);
  const [friendName, setFriendName] = useState("");

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);

  const addFriendHandler = () => {};

  const searchFriendName = (name) => {
    dispatch(searchUsers(name));
  };

  useEffect(() => {
    if (!friends) {
      dispatch(fetchUser());
    }
  }, []);

  return (
    <div className="w-[300px] bg-white rounded-card px-4">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl text-slate-800">Friend List</div>
        <div className="flex flex-row items-center">
          <div className="text-slate-400 text-sm">add friend</div>
          <Button
            onClick={openModalHandler}
            className="min-h-[53px] rounded-full !bg-transparent "
          >
            <AddRoundedIcon color="orange" fontSize="large" />
          </Button>
          <Modal open={openModal} onClose={closeModalHandler}>
            <Card className="absolute top-1/2 left-1/2 w-96 h-auto translate-x-[-50%] translate-y-[-50%] !bg-orange p-4 !rounded-card">
              <input
                type="text"
                className="rounded-card mb-2 px-4 py-2 w-full focus:outline-orange"
                placeholder="Enter friend name"
                onChange={(e) => searchFriendName(e.target.value)}
              />
              <div className="rounded-card mb-2 px-4 w-full">
                {users && users.map((user) => <div>{user.firstname}</div>)}
              </div>
              <Button
                color="orange"
                className="w-full flex items-center justify-center !bg-white rounded-card px-4 py-1"
                onClick={addFriendHandler}
              >
                Send friend request
              </Button>
            </Card>
          </Modal>
        </div>
      </div>
      {loading && <CircularProgress color="orange" />}
      {error && <p>Error: {error}</p>}
      {friends.length > 0 ? (
        friends.map(({ userId, firstname, lastname, stars }, index) => (
          <motion.div
            variants={fadeIn("left", "spring", index * 0.3, 1)}
            initial="hidden"
            animate="show"
          >
            <div>
              <div>
                <ProfileButton userId={userId} />
                <div>
                  <div>{firstname}</div>
                  <div>{lastname}</div>
                </div>
              </div>
              <div>{stars}</div>
            </div>
          </motion.div>
        ))
      ) : !loading || error ? (
        <p className="min-h-[53px]">You don't have friends yet!</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default FriendList;
