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
    imageLength > 0 ? setWarning(true) : setUploadOpen(false);
  };

  useBodyScrollLock(true);
  useKeyAction("Escape", handleClose, []);

  return (
    <>
      <Portal>
        <div className="upload--portal" onClick={handleClose} />
        <Dropzone />
      </Portal>
      {isWarningOpen && <BackWarning setWarning={setWarning} />}
    </>
  );
};

export default Upload;
