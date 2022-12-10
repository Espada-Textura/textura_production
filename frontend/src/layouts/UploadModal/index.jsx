import { useCallback } from "react";
import FileUpload from "./FileUpload";

const uploadModal = (props) => {
  const handleClose = useCallback();

  return (
    <>
      <div className={"upload-portal"}></div>
      <div className={"upload-container"}></div>
    </>
  );
};

export default uploadModal;
