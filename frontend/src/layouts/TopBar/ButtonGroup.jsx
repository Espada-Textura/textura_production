import {
  HiOutlineBell,
  HiChevronDown,
  HiOutlinePaperAirplane,
  HiUpload,
  HiOutlineUser,
} from "react-icons/hi";

import SearchBar from "@components/SearchBar/index.jsx";

export default function ButtonGroup() {
  return (
    <div className={"flex gap-4"}>
      <SearchBar />

      <button className={"btn-highlighted btn-medium"}>
        <HiUpload className={"w-6 h-6"} />
        Upload
      </button>

      <button className={"btn-plain-sec icon-btn-medium"}>
        <HiOutlineBell className={"w-6 h-6"} />
      </button>

      <button className={"btn-plain-sec icon-btn-medium"}>
        <HiOutlinePaperAirplane
          className={"w-6 h-6 rotate-45 translate-x-0.5 -translate-y-0.5"}
        />
      </button>

      <div className={"topbar-profile-btn"}>
        <button className={"icon-btn-medium btn-plain-sec"}>
          {/* TODO: Conditional Rendering on the profile*/}
          <HiOutlineUser className={"w-6 h-6"} />
        </button>

        <HiChevronDown className={"w-6 h-6"} />
      </div>
    </div>
  );
}
