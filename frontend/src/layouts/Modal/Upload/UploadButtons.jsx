import { setUpload, resetDraftImages } from "@/zustand/uploadStore";
import { useUploadStore } from "@/zustand/uploadStore";

const UploadButtons = () => {
  const handleClose = () => {
    setUpload(false);
    resetDraftImages();
  };

  const images = useUploadStore((state) => state.draftImages);

  return (
    <>
      <div className="flex justify-center items-center  border-b-2 border-b-secondary-10 border-solid min-h-[3.5rem] ">
        (
        <button
          className="h-full text-secondary-100 px-8 font-semibold absolute  left-0"
          onClick={handleClose}
        >
          Back
        </button>
        )
        <span className="text-secondary-100 font-semibold sm:text-[1rem] text-center ">
          Create Artwork
        </span>
        {images.length > 0 && (
          <button className=" h-full text-accent-100 px-8 font-semibold absolute right-0">
            Upload
          </button>
        )}
      </div>
    </>
  );
};

export default UploadButtons;
