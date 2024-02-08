import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPosts } from "../store/communityActions";

import { CircularProgress } from "@mui/material";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Container from "../components/Container";
import FriendList from "../components/FriendList";
import Header from "../components/Header";
import AddPost from "../components/AddPost";
import PostCard from "../components/PostCard";
import Leaderboard from "../components/Leaderboard";

const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.community);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden bg-slate-100">
      <Header />
      <Container className={"flex flex-row justify-between bg-slate-100 !my-0"}>
        <div className="bg-slate-100 w-full flex-row min-w-[350px] max-w-[500px]">
          <div>
            <div className="flex flex-row items-center justify-between bg-white rounded-card shadow-card pl-4 mb-2">
              <div className="font-bold text-xl text-slate-800">Posts</div>
              <AddPost />
            </div>
            {loading && (
              <div className="m-auto">
                <CircularProgress color="orange" />
              </div>
            )}
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <motion.div
                  variants={fadeIn("left", "spring", index * 0.2, 1)}
                  initial="hidden"
                  animate="show"
                  className="mb-2"
                  key={post._id}
                >
                  <PostCard {...post} />
                </motion.div>
              ))
            ) : !loading || error ? (
              <p className="min-h-[53px]">
                There are no posts yet! Try add one
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-[35%] ml-8">
          <div className="mb-4">
            <FriendList />
          </div>
          <Leaderboard />
        </div>
      </Container>
    </div>
  );
};

export default PostsPage;
