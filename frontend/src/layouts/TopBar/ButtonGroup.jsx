import {
  HiOutlineBell,
  HiChevronDown,
  HiOutlinePaperAirplane,
  HiUpload,
  HiOutlineUser,
  HiSearch,
} from "react-icons/hi";

import { Navigate, Link } from "react-router-dom";

export default function ButtonGroup() {
  return (
    <div className={"flex gap-4"}>
      <Link
        className={
          "topbar-nav-link btn-plain-sec icon-btn-medium px-3 max-md:hidden xl:hidden"
        }
        to={"/search"}
      >
        <HiSearch className={"w-6 h-6"} />
      </Link>

      <button
        className={"btn-highlighted btn-medium max-xl:px-3 max-md:hidden"}
      >
        <HiUpload className={"w-6 h-6"} />
        <span className="max-xl:hidden">Upload</span>
      </button>

      <button className={"btn-plain-sec icon-btn-medium max-lg:hidden"}>
        <HiOutlineBell className={"w-6 h-6"} />
      </button>

      <button className={"btn-plain-sec icon-btn-medium max-lg:hidden"}>
        <HiOutlinePaperAirplane
          className={"w-6 h-6 rotate-45 translate-x-0.5 -translate-y-0.5"}
        />
      </button>

      <div className={"topbar-profile-btn"}>
        <Link className={"topbar-nav-link px-3 icon-btn-medium btn-plain-sec"}>
          {/* TODO: Conditional Rendering on the profile*/}
          <HiOutlineUser className={"w-6 h-6"} />
        </Link>

        <HiChevronDown className={"w-6 h-6"} />
      </div>
    </div>
  );
}
