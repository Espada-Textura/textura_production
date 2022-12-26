import { useState, useRef } from "react";
import { useUploadStore } from "@/zustand/uploadStore";

import {
  HiOutlineBell,
  HiChevronDown,
  HiOutlinePaperAirplane,
  HiUpload,
  HiOutlineUser,
  HiSearch,
} from "react-icons/hi";

import { Link } from "react-router-dom";

import ProfileDrop from "@layouts/ProfileDrop";
import Upload from "@layouts/Modal/Upload";

const ButtonGroup = () => {
  //state
  const [isProfileDrop, setProfileDrop] = useState(false);
  const [isUploadOpen, setUploadOpen] = useUploadStore((state) => [
    state.isOpen,
    state.setUploadOpen,
  ]);

  const profileToggler = useRef();

  //profile close handler
  const handProfileClose = () => {
    setProfileDrop(!isProfileDrop);
  };

  return (
    <>
      <div className={"flex gap-4 items-center"}>
        <Link
          className={
            "button-plain-secondary icon-button-medium px-3 max-md:hidden items-center flex"
          }
          to={"/search"}
        >
          <HiSearch className={"w-6 h-6 self-center"} />
        </Link>

        <button
          className={
            "button-plain-secondary icon-button-medium max-xl:px-3 max-lg:hidden"
          }
          onClick={() => setUploadOpen(!isUploadOpen)}
        >
          <HiUpload className={"w-6 h-6"} />
        </button>

        <button
          className={"button-plain-secondary icon-button-medium max-lg:hidden"}
        >
          <HiOutlineBell className={"w-6 h-6"} />
        </button>

        <button
          className={"button-plain-secondary icon-button-medium max-lg:hidden"}
        >
          <HiOutlinePaperAirplane className={"w-6 h-6 rotate-90"} />
        </button>

        <div
          className={"topbar--profile-btn"}
          onClick={handProfileClose}
          ref={profileToggler}
        >
          <button
            className={
              " px-3 icon-button-medium button-plain-secondary items-center flex"
            }
          >
            {/* TODO: Conditional Rendering on the profile*/}
            <HiOutlineUser className={"w-6 h-6 self-center"} />
          </button>

          <HiChevronDown className={"w-6 h-6 "} />
        </div>
      </div>
      {isProfileDrop && (
        <ProfileDrop
          isDrop={isProfileDrop}
          setDrop={setProfileDrop}
          togglerRef={profileToggler}
        />
      )}

      {isUploadOpen && <Upload />}
    </>
  );
};

export default ButtonGroup;
