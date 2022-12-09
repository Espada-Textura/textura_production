import { useCallback } from "react";
import FileUpload from "./FileUpload";

const uploadModal = (props) => {
  const handleClose = useCallback();

  return (
    <>
      <div className={"upload-container"}>
        <div className={"upload-title"}>
          <h2>Upload Artwork</h2>
          <span>
            Let our community know about your creation, or share us what is your
            working on.
          </span>
        </div>
        <form>
          <input
            name={"upload-art-name"}
            type={"text"}
            placeholder={"Name of this masterpiece"}
          />
          <FileUpload />
          <div className={"upload-art-buttons"}>
            <button
              className={"button-fair-accent button-medium"}
              // onClick={}
            >
              Cancel
            </button>
            <div className={"upload-art-p-buttons"}>
              <button className={"button-plain-accent button-medium"}>
                Save to Draft
              </button>
              <button className={"button-contained-accent button-medium"}>
                Upload
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default uploadModal;
