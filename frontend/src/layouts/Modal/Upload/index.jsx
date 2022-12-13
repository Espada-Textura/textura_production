import { useCallback } from "react";
import { useEscClose } from "@/hooks/modalClose";
import { useUploadStore, setUpload } from "@/zustand/uploadStore";

import { HiX } from "react-icons/hi";
import { Portal } from "react-portal";
import Dropzone from "./Dropzone";

const Upload = (props) => {
  const isOpen = useUploadStore((state) => state.isOpen);

  const handleClose = () => {
    setUpload(!isOpen);
  };

  useEscClose("Escape", handleClose, []);

  return (
    <Portal>
      <div className="upload-portal" onClick={handleClose} />
      <div className="upload-container my-4 max-sm:my-0 max-sm:rounded-none rounded-lg max-sm:w-full max-sm:h-screen w-[90%] md:max-w-[50rem] font-normal focus-visible:outline-none focus:outline-none">
        <button
          className=" absolute top-8 right-8 w-10 h-10 button-plain-secondary rounded-lg"
          onClick={handleClose}
        >
          <HiX className="w-5 h-5" />
        </button>
        <Dropzone />
      </div>
    </Portal>
  );
};

export default Upload;
