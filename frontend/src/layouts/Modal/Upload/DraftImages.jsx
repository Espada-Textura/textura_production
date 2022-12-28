import { useUploadStore } from "@/zustand/uploadStore";
import { useAsyncFileRead } from "@/hooks/useFileRead";
import { useErrorNotify } from "@/hooks/useNotify";

import TextareaAutoSize from "react-textarea-autosize";

import { HiOutlineRefresh, HiOutlineTrash } from "react-icons/hi";

const DraftImages = () => {
  const [images, deleteDraftImage, changeDraftImage] = useUploadStore(
    (state) => [
      state.draftImages,
      state.deleteDraftImage,
      state.changeDraftImage,
    ]
  );

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];

    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      useErrorNotify(
        "Unsupported File",
        <span>
          <span className="font-bold"> {file.name} </span> has unsupported
          extension.
        </span>
      );
      return;
    }

    if (file.size > 10000000) {
      useErrorNotify(
        "File too large",
        <span>
          <span className="font-bold"> {file.name} </span> has too large size.
        </span>
      );
      return;
    }

    useAsyncFileRead(file).then(
      (result) => changeDraftImage(index, result),
      (error) => {
        useErrorNotify(
          "File Reading Error",
          `There was an error reading your files. Please try again.`
        );
      }
    );
  };

  return (
    <div
      className={
        "bg-primary-100 max-sm:h-screen px-6 sm:px-8 w-full flex flex-col gap-4"
      }
    >
      <input
        className="placeholder:text-center text-center w-full"
        type="text"
        name="title"
        placeholder="Add a title here"
        autoFocus
      />

      {images.map((image) => (
        <div className={" rounded-lg"} key={crypto.randomUUID()}>
          <TextareaAutoSize
            className={
              "upload--text-input placeholder:text-center text-center text-base"
            }
            placeholder={"Express something about your work."}
            required
          />

          <div className="rounded-lg relative">
            <div className="cursor-pointer button-medium backdrop-brightness-75 bg-secondary-50 text-primary-100 backdrop:blur-2xl absolute top-4 left-4 flex items-center gap-2 ">
              <HiOutlineRefresh className="w-5 h-5" />
              <span className="font-semibold">Change</span>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={(event) => handleImageChange(event, index)}
                className="cursor-pointer opacity-0 w-full h-full absolute top-0 left-0"
                name="image"
                title=" "
              />
            </div>
            <button
              onClick={() => deleteDraftImage(index)}
              className="icon-button-medium backdrop-brightness-75 bg-secondary-50 text-primary-100 backdrop:blur-2xl absolute top-4 right-4"
            >
              <HiOutlineTrash className="w-5 h-5" />
            </button>
            <img
              src={image}
              className={
                "rounded-lg min-h-[20rem] object-cover w-full shadow shadow-secondary-20"
              }
              draggable={false}
              loading={"eager"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DraftImages;
