import React from "react";
import { Space, Spin } from "antd";

const Loader = () => {
  return (
    <div className="fixed inset-y-1/2 inset-x-1/2 flex justify-center items-center flex-col">
      <p className=" text-blue-500 mb-4 -mt-8">Loading...</p>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Loader;
