import {
  HiBell,
  HiChevronDown,
  HiPaperAirplane,
  HiUpload,
  HiUser,
} from "react-icons/hi";

export default function ButtonGroup() {
  return (
    <div className={"flex gap-4"}>
      <button className={"btn-filled-sec btn-large"}>
        <HiUpload className={"w-6 h-6"} />
        Upload
      </button>

      <button className={"btn-plain-filled-sec icon-btn-large"}>
        <HiBell className={"w-6 h-6"} />
      </button>

      <button className={"btn-plain-filled-sec icon-btn-large"}>
        <HiPaperAirplane
          className={"w-6 h-6 rotate-45 translate-x-0.5 -translate-y-0.5"}
        />
      </button>

      <div className={"profile-btn"}>
        <button className={"icon-btn-large btn-plain-filled-sec"}>
          {/* TODO: Conditional Rendering on the profile*/}
          <HiUser className={"w-6 h-6"} />
        </button>

        <HiChevronDown className={"w-6 h-6"} />
      </div>
    </div>
  );
}
