import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchUser,
  searchUsers,
  sendFriendRequest,
} from "../store/communityActions";

import {
  CircularProgress,
  Button,
  Modal,
  Card,
  IconButton,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

import ProfileButton from "./ProfileButton";

const FriendList = () => {
  const dispatch = useDispatch();
  const { friends, users, loading, error, searchLoading } = useSelector(
    (state) => state.community
  );

  const [openModal, setOpenModal] = useState(false);
  const [friendRequestSentMap, setFriendRequestSentMap] = useState({});

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);

  const addFriendHandler = (friendId) => {
    dispatch(sendFriendRequest(friendId))
      .unwrap()
      .then((data) => {
        setFriendRequestSentMap((prevMap) => ({
          ...prevMap,
          [friendId]: true, // установить состояние, что запрос был отправлен для конкретного пользователя
        }));
      });
  };

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
              <div className="rounded-card mb-2 p-4 w-full h-[300px] bg-white [&>*:last-child]:border-b-0 [&>*:last-child]:border-slate-400 flex flex-col gap-3">
                {searchLoading && (
                  <div className="m-auto">
                    <CircularProgress color="orange" />
                  </div>
                )}
                {users &&
                  users.map(({ userId, firstname, lastname, stars }, index) => (
                    <div
                      key={index}
                      className=" border-b-0 border-slate-400 flex flex-row justify-between"
                    >
                      <div className="flex flex-row gap-4 items-center">
                        <ProfileButton userId={userId} />
                        <div>
                          {firstname} {lastname}
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 items-center">
                        <div className="flex items-center">
                          <StarRateRoundedIcon color="orange" /> {stars}
                        </div>
                        <IconButton
                          color="orange"
                          onClick={() => addFriendHandler(userId)}
                          disabled={friendRequestSentMap[userId]} // Блокировать кнопку, если запрос уже был отправлен
                        >
                          {friendRequestSentMap[userId] ? (
                            <PersonAddIcon color="green" />
                          ) : (
                            <PersonAddIcon />
                          )}
                        </IconButton>
                      </div>
                    </div>
                  ))}
              </div>
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
