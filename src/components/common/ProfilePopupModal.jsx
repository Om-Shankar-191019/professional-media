import React, { useState } from "react";
import { Button, Modal } from "antd";
import { onLogout } from "../../api/AuthAPI";

const ProfilePopupModal = ({ profilePopupOpen, setProfilePopupOpen }) => {
  return (
    <>
      <Modal
        open={profilePopupOpen}
        onOk={() => setProfilePopupOpen(false)}
        onCancel={() => setProfilePopupOpen(false)}
        footer={null}
      >
        <Button
          onClick={onLogout}
          className="border border-gray-300  rounded-md px-2 py-1"
        >
          logout
        </Button>
      </Modal>
    </>
  );
};

export default ProfilePopupModal;
