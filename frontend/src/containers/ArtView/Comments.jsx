import TextareaAutoSize from "react-textarea-autosize";

import { HiPaperAirplane, HiOutlineChevronDown } from "react-icons/hi";

const Comments = ({ art }) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex gap-4 items-start">
        <img src={art?.user?.avatar} alt="" className="w-11 h-11 rounded-xl" />
        <div className="w-full relative">
          <TextareaAutoSize
            className="w-full text-secondary-100 p-3 px-4 pr-10 resize-none rounded-lg bg-secondary-10 h-10 placeholder:text-secondary-80 placeholder:font-semibold overflow-hidden outline-none focus:outline-none focus-visible:outline-none"
            placeholder="Write some comments"
          />
          <button className="icon-button-medium button-plain-secondary absolute right-0 bottom-2">
            <HiPaperAirplane className={"rotate-90 w-5 h-5"} />
          </button>
        </div>
      </div>
      <button className="flex gap-3 w-fit hover:text-accent-100">
        <HiOutlineChevronDown className="w-5 h-5" />
        <span>All Comments</span>
      </button>
    </section>
  );
};

export default Comments;
