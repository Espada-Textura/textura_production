import { useCallback } from "react";

import FileUpload from "./FileUpload";
import { Portal } from "react-portal";
import { useEscClose } from "@/hooks/modalClose";

const Upload = (props) => {
  const handleClose = () => {
    props.setOpen(!props.isOpen);
  };

  useEscClose("Escape", handleClose, []);

  return (
    <Portal>
      <div className="upload-portal" onClick={handleClose} />
      <div className="upload-container">
        <p>This is the portal</p>
      </div>
    </Portal>
  );
};

export default Upload;
