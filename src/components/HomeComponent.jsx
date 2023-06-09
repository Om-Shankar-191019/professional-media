import React from "react";
import PostUpdate from "./common/PostUpdate";
import PostWrapper from "./common/PostWrapper";

const HomeComponent = () => {
  return (
    <div className="bg-gray-100 flex  items-center flex-col">
      <PostUpdate />
      <PostWrapper />
    </div>
  );
};

export default HomeComponent;
