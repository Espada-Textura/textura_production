import { useCallback } from "react";

import FileUpload from "./FileUpload";
import { Portal } from "react-portal";
import useOutSideClose from "@/hooks/outsideClose";

const Upload = (props) => {
  const handleClose = (event) => {
    props.setOpen(!props.isOpen);
  };

  return (
    <Portal>
      <div className="upload-container" onClick={handleClose}>
        <p>This is the portal</p>
      </div>
    </Portal>
  );
};

export default Upload;
