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

const profileDrop = () => {
  return (
    <>
      <div className={"drop-container"}>
        <div className={"drop-section"}>
          <button className={"drop-item w-full"}>
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
