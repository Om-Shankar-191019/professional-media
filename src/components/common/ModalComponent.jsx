import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalComponent = ({
  modalOpen,
  setModalOpen,
  postMessage,
  setPostMessage,
  sendPostMessage,
}) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <textarea
          className="w-full my-4 p-2 h-40  resize-none"
          type="text"
          placeholder="What do you want to talk about?"
          value={postMessage}
          onChange={(event) => setPostMessage(event.target.value)}
        />
        <Button
          onClick={sendPostMessage}
          disabled={postMessage ? false : true}
          className="border border-gray-300  rounded-md px-2 py-1"
        >
          Post
        </Button>
      </Modal>
    </>
  );
};

export default ModalComponent;
