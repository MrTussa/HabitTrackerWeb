import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  Button,
  Modal,
  Card,
  TextareaAutosize,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { createPost } from "../store/communityActions";

const AddPost = () => {
  const dispatch = useDispatch();
  const { postLoading } = useSelector((state) => state.community);

  const [openModal, setOpenModal] = useState(false);
  const [postText, setPostText] = useState("");

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => {
    setOpenModal(false);
    setPostText(""); // Очистить текст поста при закрытии модального окна
  };

  const submitPostHandler = () => {
    dispatch(createPost(postText))
      .unwrap()
      .then(() => {
        closeModalHandler();
      });
  };

  return (
    <div>
      <Button
        onClick={openModalHandler}
        className="min-h-[53px] rounded-full !bg-transparent "
      >
        <AddRoundedIcon color="orange" fontSize="large" />
      </Button>
      <Modal open={openModal} onClose={closeModalHandler}>
        <Card className="absolute top-1/2 left-1/2 w-96 h-auto translate-x-[-50%] translate-y-[-50%] !bg-orange p-4 !rounded-card">
          <TextareaAutosize
            className="rounded-card mb-2 px-4 py-2 w-full focus:outline-orange"
            placeholder="Share your feelings"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <div className="mb-2">
            <Button
              className="w-full"
              variant="contained"
              color="success"
              onClick={submitPostHandler}
              disabled={postLoading}
            >
              {postLoading ? (
                <CircularProgress color="orange" size={24} />
              ) : (
                "Post"
              )}
            </Button>
          </div>
        </Card>
      </Modal>
    </div>
  );
};

export default AddPost;
