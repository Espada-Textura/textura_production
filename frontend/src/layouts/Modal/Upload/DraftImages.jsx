import {
  useUploadStore,
  deleteDraftImage,
  changeDraftImage,
} from "@/zustand/uploadStore";
import { useAsyncFileRead } from "@/hooks/useFileRead";

import TextareaAutoSize from "react-textarea-autosize";

import { HiOutlineRefresh, HiOutlineTrash } from "react-icons/hi";

const DraftImages = () => {
  const images = useUploadStore((state) => state.draftImages);

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];

    if (file.type !== "image/png" && file.type !== "image/jpeg") return;

    if (file.size > 10000000) return;

    useAsyncFileRead(file).then(
      (result) => changeDraftImage(index, result),
      (error) => console.log(error)
    );
  };

  return (
    <div className=" px-6 sm:px-8">
      <input type="text" name="title" placeholder="Add a title here" />

      {images.map((image, index) => (
        <div className={" rounded-lg pb-4"} key={index}>
          <TextareaAutoSize
            className={"upload-text-input "}
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
              className={"rounded-lg min-h-[20rem] object-cover w-full"}
              draggable={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DraftImages;
