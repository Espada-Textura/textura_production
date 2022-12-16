import { useEscClose } from "@/hooks/modalClose";
import { useUploadStore, setUpload } from "@/zustand/uploadStore";
import { useState } from "react";

import { Portal } from "react-portal";

import Dropzone from "./Dropzone";
import UploadButtons from "./UploadButtons";
import BackWarning from "./BackWarning";

const Upload = () => {
  const isOpen = useUploadStore((state) => state.isOpen);
  const images = useUploadStore((state) => state.draftImages);
  const [isWarningOpen, setWarning] = useState(false);

  const handleClose = () => {
    images.length > 0 ? setWarning(true) : setUpload(false);
  };

  useEscClose("Escape", handleClose, []);

  return (
    <>
      <Portal>
        <div className="upload-portal" onClick={handleClose} />
        <div className="upload-container pb-4 max-sm:pt-0 my-4 max-sm:my-0 max-sm:rounded-none rounded-lg max-sm:w-full max-sm:h-screen w-[90%] sm:max-w-[40rem] font-normal focus-visible:outline-none focus:outline-none">
          <div className=" fixed sm:absolute w-[100%] max-sm:w-full bg-primary-100 z-10 max-w-[40rem] rounded-lg">
            <UploadButtons />
          </div>
          <Dropzone />
        </div>
      </Portal>
      {isWarningOpen && <BackWarning setWarning={setWarning} />}
    </>
  );
};

export default Upload;
