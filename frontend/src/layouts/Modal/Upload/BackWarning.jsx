import { Portal } from "react-portal";
import { useUploadStore } from "@/zustand/uploadStore.jsx";

const BackWarning = ({ setWarning, formData }) => {
  const [setUploadOpen, resetUpload, setTitle, setDesc, title, desc] =
    useUploadStore((state) => [
      state.setUploadOpen,
      state.resetUpload,
      state.setTitle,
      state.setDesc,
      state.title,
      state.desc,
    ]);

  const handleCloseWarning = () => {
    setWarning(false);
  };

  const handleCloseWithoutSave = () => {
    resetUpload();
    setUploadOpen(false);
    handleCloseWarning();
  };

  const handleCloseWithSave = () => {
    setTitle(formData.title);
    setDesc(formData.desc);
    setUploadOpen(false);
    handleCloseWarning();
  };

  return (
    <Portal>
      <div
        className="upload--pop-portal w-full h-screen min-h-screen"
        onClick={handleCloseWarning}
      />
      <div className=" max-w-[20rem] max-sm:w-[80%] fixed text-secondary-100 bg-primary-100 rounded-xl flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 items-center p-8 pb-2">
          <h2 className="font-bold text-xl text-center">Save as Draft</h2>
          <span className="text-center text-secondary-80 text-sm">
            Before heading back, do you want to save as a draft?
          </span>
        </div>
        <div className=" upload--pop-buttons flex flex-col w-full pt-4">
          <button
            className=" button-large w-full font-semibold border-y-[1px] border-solid border-secondary-20 hover:bg-secondary-10"
            onClick={handleCloseWithSave}
          >
            <span>Save</span>
          </button>
          <button
            className=" text-accent-100 button-large w-full font-semibold hover:bg-secondary-10"
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
