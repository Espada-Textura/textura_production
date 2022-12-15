import React from "react";
import { Portal } from "react-portal";

import { BsPatchExclamation } from "react-icons/bs";

const BackWarning = () => {
  return (
    <Portal>
      <div className="upload-pop-portal" />
      <div className=" max-w-[22rem] mx-4 absolute text-secondary-100 bg-primary-100 rounded-xl pt-8 pb-4 px-8 flex flex-col  justify-center items-center gap-4">
        <h2 className="font-bold text-xl text-center">Save as Draft</h2>
        <span className="text-center text-secondary-90">
          Before heading back, do you want to save as a draft?
        </span>

        <div className=" upload-pop-buttons flex flex-col w-full py-3 gap-3">
          {/* <button className="button-medium w-full font-bold">Cancel</button> */}
          <button className=" rounded-full button-filled-accent button-medium w-full font-semibold">
            <span>Save</span>
          </button>
          <button className="button-medium w-full font-semibold button-outlined-fair-accent">
            <span>Do not save</span>
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default BackWarning;
