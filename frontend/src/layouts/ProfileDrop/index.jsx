import { useRef } from "react";
import { useOutSideClose, useEscClose } from "@/hooks/modalClose";
import { setUpload } from "@/zustand/uploadStore";

import {
  HiOutlineUpload,
  HiOutlinePaperAirplane,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlinePhotograph,
  HiOutlineCollection,
  HiOutlineSupport,
  HiOutlineExclamation,
  HiOutlineCog,
  HiOutlineSun,
  HiOutlineLogout,
} from "react-icons/hi";

const profileDrop = (props) => {
  const handleOpenNClose = (open) => {
    open();
    props.setDrop(!props.isDrop);
  };

  const profileRef = useRef();

  useOutSideClose(
    [profileRef, props.togglerRef],
    () => props.setDrop(!props.isDrop),
    []
  );

  useEscClose("Escape", () => props.setDrop(!props.isDrop), []);

  return (
    <>
      <div className={"drop-container"} ref={profileRef}>
        <div className={"drop-section"}>
          <button
            className={"drop-item w-full"}
            onClick={() => handleOpenNClose(() => setUpload(true))}
          >
            <HiOutlineUpload />
            <span>Upload</span>
          </button>
        </div>

        <div className={"drop-separator"} />

        <div className={"drop-section"}>
          <button className={"drop-item w-full"}>
            <HiOutlinePaperAirplane className={"rotate-90 "} />
            <span>Messages</span>
          </button>
          <button className={"drop-item w-full"}>
            <HiOutlineBell />
            <span>Notifications</span>
          </button>
        </div>

        <div className={"drop-separator"} />

        <div className={"drop-section"}>
          <button className={"drop-item w-full"}>
            <HiOutlineUser />
            <span>My Profile</span>
          </button>
          <button className={"drop-item w-full"}>
            <HiOutlinePhotograph />
            <span>My Arts</span>
          </button>
          <button className={"drop-item w-full"}>
            <HiOutlineCollection />
            <span>My Collections</span>
          </button>
        </div>

        <div className={"drop-separator"} />

        <div className={"drop-section"}>
          <button className={"drop-item w-full"}>
            <HiOutlineSupport />
            <span>Helps & Supports</span>
          </button>
          <button className={"drop-item w-full"}>
            <HiOutlineExclamation />
            <span>Send Feedbacks</span>
          </button>
          <button className={"drop-item w-full"}>
            <HiOutlineCog />
            <span>Setting</span>
          </button>
        </div>

        <div className={"drop-separator"} />

        <div className={"drop-section"}>
          <button className={"drop-item w-full"}>
            <HiOutlineSun />
            <span>Themes</span>
          </button>
        </div>

        <div className={"drop-separator"} />

        <div className={"drop-section"}>
          <button className={"drop-item w-full"}>
            <HiOutlineLogout />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default profileDrop;
