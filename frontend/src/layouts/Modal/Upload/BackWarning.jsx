import { Portal } from "react-portal";
import { setUpload, resetDraftImages } from "@/zustand/uploadStore.jsx";

const BackWarning = ({ setWarning }) => {
  const handleCancel = () => {
    setWarning(false);
  };

  const handleCloseWithoutSave = () => {
    resetDraftImages();
    handleCancel();
    setUpload(false);
  };

  const handleCloseWithSave = () => {
    handleCancel();
    setUpload(false);
  };

  return (
    <Portal>
      <div className="upload-pop-portal" onClick={handleCancel} />
      <div className=" max-w-[20rem] mx-4 absolute text-secondary-100 bg-primary-100 rounded-xl pt-8 pb-4 px-8 flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="font-bold text-xl text-center">Save as Draft</h2>
          <span className="text-center text-secondary-80 text-sm">
            Before heading back, do you want to save as a draft?
          </span>
        </div>
        <div className=" upload-pop-buttons flex flex-col w-full pt-4 gap-2">
          <button
            className=" button-medium w-full font-semibold"
            onClick={handleCloseWithSave}
          >
            <span>Save</span>
          </button>
          <button
            className=" text-accent-100 button-medium w-full font-semibold "
            onClick={handleCloseWithoutSave}
          >
            <span>Discard </span>
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default BackWarning;
