import { setUpload, resetDraftImages } from "@/zustand/uploadStore";

import { HiOutlineArrowSmLeft } from "react-icons/hi";

const UploadButtons = () => {
  const handleClose = () => {
    setUpload(false);
    resetDraftImages();
  };

  return (
    <>
      <div className="flex justify-between items-center px-1">
        <button
          className="button-medium text-secondary-100 px-0 "
          onClick={handleClose}
        >
          Back
        </button>

        <button className="button-medium text-accent-100 px-0">Upload</button>
      </div>
    </>
  );
};

export default UploadButtons;
