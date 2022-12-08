import { HiUpload } from "react-icons/hi";

const profileDrop = () => {
  return (
    <>
      <div className={"drop-container"}>
        <div className={"drop-section"}>
          <div className={"drop-item"}>
            <button className={"button-medium, button-plain-accent"}>
              <span>Upload</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default profileDrop;
