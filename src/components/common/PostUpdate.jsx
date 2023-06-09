import React, { useState, useMemo, useEffect } from "react";
import ModalComponent from "./ModalComponent";
import { postMessageToFirestore } from "../../api/firestoreAPI";
import { getCurrentTimeStamp } from "../../helpers/useMoment";

const PostUpdate = () => {
  let userEmail = localStorage.getItem("userEmail");
  const [modalOpen, setModalOpen] = useState(false);
  const [postMessage, setPostMessage] = useState();

  const sendPostMessage = async () => {
    let object = {
      postMessage: postMessage,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: userEmail,
    };
    await postMessageToFirestore(object);
    await setModalOpen(false);
    await setPostMessage("");
  };

  return (
    <div className=" w-1/2 bg-white mx-8 my-8  rounded-md px-4 py-4 border border-gray-300">
      <div className="flex space-x-4 justify-between items-center">
        <div className="h-12 w-12  rounded-full overflow-hidden ">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="flex flex-1 border border-gray-500 hover:bg-gray-200 ease-linear duration-200 rounded-3xl p-3 text-gray-600 font-semibold"
        >
          Start a post
        </button>
      </div>

      <ModalComponent
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        postMessage={postMessage}
        setPostMessage={setPostMessage}
        sendPostMessage={sendPostMessage}
      />
    </div>
  );
};

export default PostUpdate;
