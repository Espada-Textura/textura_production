import { useState } from "react";

import { useUploadStore } from "@/zustand/uploadStore";

import BackWarning from "./BackWarning";

const Header = ({ form }) => {
  const [images, title, desc, setUploadOpen, resetUpload] = useUploadStore(
    (state) => [
      state.draftImages,
      state.title,
      state.desc,
      state.setUploadOpen,
      state.resetUpload,
      state.setTitle,
      state.setDecs,
    ]
  );

  const [isWarningOpen, setWarning] = useState(false);

  const closeModal = () => {
    setUploadOpen(false);
    resetUpload();
  };

  const handleClose = () => {
    images.length > 0 ? setWarning(true) : closeModal();
  };

  return (
    <>
      <div className="flex bg-transparent justify-center items-center min-h-[3.5rem] ">
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
      {isWarningOpen && (
        <BackWarning setWarning={setWarning} formData={form.getValues()} />
      )}
    </>
  );
};

export default Header;
