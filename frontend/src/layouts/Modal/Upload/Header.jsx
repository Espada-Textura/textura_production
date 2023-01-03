import { useState } from "react";

import { useUploadStore } from "@/zustand/uploadStore";

import BackWarning from "./BackWarning";

const Header = () => {
  const [images, setUploadOpen, resetDraftImages] = useUploadStore((state) => [
    state.draftImages,
    state.setUploadOpen,
    state.resetDraftImages,
  ]);

  const [isWarningOpen, setWarning] = useState(false);

  const closeModal = () => {
    setUploadOpen(false);
    resetDraftImages();
  };

  const handleClose = () => {
    images.length > 0 ? setWarning(true) : closeModal();
  };

  return (
    <>
      <div className="flex bg-transparent justify-center items-center  border-b-[1px] border-b-secondary-20 border-solid min-h-[3.5rem] ">
        <button
          type="button"
          className="h-full rounded-lg text-secondary-100 px-8 font-semibold absolute left-0 shadow-none"
          onClick={handleClose}
        >
          Back
        </button>

        <span className="text-secondary-100 font-semibold sm:text-[1rem] text-center ">
          Create Artwork
        </span>
        {images.length > 0 && (
          <button
            type="submit"
            className=" h-full text-accent-100 px-8 font-semibold absolute right-0 shadow-none"
          >
            Upload
          </button>
        )}
      </div>
      {isWarningOpen && <BackWarning setWarning={setWarning} />}
    </>
  );
};

export default Header;
