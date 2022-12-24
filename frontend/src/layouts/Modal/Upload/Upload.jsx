import { useKeyAction } from "@/hooks/useKeyAction";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useUploadStore } from "@/zustand/uploadStore";
import { useState } from "react";

import { Portal } from "react-portal";

import Dropzone from "./Dropzone";
import BackWarning from "./BackWarning";

const Upload = () => {
  const [imageLength, setUploadOpen] = useUploadStore((state) => [
    state.imageLength,
    state.setUploadOpen,
  ]);
  const [isWarningOpen, setWarning] = useState(false);

  const handleClose = () => {
    if (imageLength > 0) {
      setWarning(true);
    } else {
      setUploadOpen(false);
    }
  };

  useBodyScrollLock(true);
  useKeyAction("Escape", handleClose, []);

  return (
    <>
      <Portal>
        <div className="upload--portal" onClick={handleClose} />
        <div
          className={
            "upload--container sm:max-h-[80vh] max-sm:pt-0  max-sm:my-0 max-sm:rounded-none rounded-t-lg max-sm:w-full max-sm:bg-primary-100 max-sm:h-screen w-[90%] sm:max-w-[40rem] font-normal focus-visible:outline-none focus:outline-none"
          }
        >
          <Dropzone />
        </div>
      </Portal>
      {isWarningOpen && <BackWarning setWarning={setWarning} />}
    </>
  );
};

export default Upload;
