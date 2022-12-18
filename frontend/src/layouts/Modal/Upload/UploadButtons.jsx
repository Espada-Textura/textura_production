import { useState } from "react";
import { useWarningNotify } from "@/hooks/useNotify";

import {
  setUpload,
  resetDraftImages,
  useUploadStore,
} from "@/zustand/uploadStore";

import BackWarning from "./BackWarning";

const UploadButtons = () => {
  const images = useUploadStore((state) => state.draftImages);

  const [isWarningOpen, setWarning] = useState(false);

  const closeModal = () => {
    setUpload(false);
    resetDraftImages();
  };

  const handleClose = () => {
    images.length > 0 ? setWarning(true) : closeModal();
  };

  return (
    <>
      <div className="flex justify-center items-center  border-b-[1px] border-b-secondary-20 border-solid min-h-[3.5rem] ">
        <button
          className="h-full text-secondary-100 px-8 font-semibold absolute  left-0"
          onClick={handleClose}
        >
          Back
        </button>

        <span className="text-secondary-100 font-semibold sm:text-[1rem] text-center ">
          Create Artwork
        </span>
        {images.length > 0 && (
          <button
            className=" h-full text-accent-100 px-8 font-semibold absolute right-0"
            onClick={() => useWarningNotify("Warnings", "This is a warning")}
          >
            Upload
          </button>
        )}
      </div>
      {isWarningOpen && <BackWarning setWarning={setWarning} />}
    </>
  );
};

export default UploadButtons;
