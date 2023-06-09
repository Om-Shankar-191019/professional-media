import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className=" w-full bg-white mx-8 my-2  rounded-md px-4 py-4 border border-gray-300">
      <p className="text-sm text-gray-500">{post.postMessage}</p>
    </div>
  );
};

export default PostCard;
