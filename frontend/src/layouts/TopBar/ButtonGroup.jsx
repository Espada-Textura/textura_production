import {
  HiOutlineBell,
  HiChevronDown,
  HiOutlinePaperAirplane,
  HiUpload,
  HiOutlineUser,
  HiSearch,
} from "react-icons/hi";

import { Link } from "react-router-dom";

export default function ButtonGroup() {
  return (
    <div className={"flex gap-4"}>
      <Link
        className={
          "button-plain-secondary icon-button-medium px-3 max-md:hidden xl:hidden items-center flex"
        }
        to={"/search"}
      >
        <HiSearch className={"w-6 h-6 self-center"} />
      </Link>

      <button
        className={
          "button-filled-accent button-medium max-xl:px-3 max-md:hidden"
        }
      >
        <HiUpload className={"w-6 h-6"} />
        <span className="max-xl:hidden">Upload</span>
      </button>

      <button
        className={"button-plain-secondary icon-button-medium max-lg:hidden"}
      >
        <HiOutlineBell className={"w-6 h-6"} />
      </button>

      <button
        className={"button-plain-secondary icon-button-medium max-lg:hidden"}
      >
        <HiOutlinePaperAirplane
          className={"w-6 h-6 rotate-45 translate-x-0.5 -translate-y-0.5"}
        />
      </button>

      <div className={"topbar-profile-btn"}>
        <button
          className={
            " px-3 icon-button-medium button-plain-secondary items-center flex"
          }
        >
          {/* TODO: Conditional Rendering on the profile*/}
          <HiOutlineUser className={"w-6 h-6 self-center"} />
        </button>

        <HiChevronDown className={"w-6 h-6"} />
      </div>
    </div>
  );
}
