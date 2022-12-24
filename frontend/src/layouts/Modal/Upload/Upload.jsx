import { useKeyAction } from "@/hooks/useKeyAction";
import { useUploadStore } from "@/zustand/uploadStore";
import { useState } from "react";

import { Portal } from "react-portal";

import Dropzone from "./Dropzone";
import BackWarning from "./BackWarning";

const Upload = () => {
  const [images, setUploadOpen] = useUploadStore((state) => [
    state.draftImages,
    state.setUploadOpen,
  ]);
  const [isWarningOpen, setWarning] = useState(false);

  const handleClose = () => {
    images.length > 0 ? setWarning(true) : setUploadOpen(false);
  };

  useKeyAction("Escape", handleClose, []);

  return (
    <>
      <Portal>
        <div className="upload-portal" onClick={handleClose} />
        <div className="sm:max-h-[80vh] upload-container  max-sm:pt-0  max-sm:my-0 max-sm:rounded-none rounded-lg max-sm:w-full max-sm:h-screen w-[90%] sm:max-w-[40rem] font-normal focus-visible:outline-none focus:outline-none">
          <Dropzone />
        </div>
      </Portal>
      {isWarningOpen && <BackWarning setWarning={setWarning} />}
    </>
  );
};

export default Upload;
