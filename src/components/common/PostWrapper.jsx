import React, { useState, useMemo } from "react";
import { getPostMessages } from "../../api/firestoreAPI";
import PostCard from "./PostCard";
const PostWrapper = () => {
  const [allPosts, setAllPosts] = useState([]);

  useMemo(() => {
    getPostMessages(setAllPosts);
  }, []);
  return (
    <div className="w-1/2 flex items-center flex-col ">
      {allPosts.map((post, index) => {
        return <PostCard key={`${index}${post.id}`} post={post} />;
      })}
    </div>
  );
};

export default PostWrapper;
