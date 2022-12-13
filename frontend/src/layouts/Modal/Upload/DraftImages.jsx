import TextareaAutoSize from "react-textarea-autosize";

import { HiOutlineRefresh, HiOutlineTrash } from "react-icons/hi";

const DraftImages = ({ images }) => {
  return (
    <>
      <div className="upload-title-input">
        <input type="text" name="title" placeholder="Add a title here" />
      </div>

      {images.map((image, index) => (
        <div className={"pb-6 rounded-lg"} key={index}>
          <TextareaAutoSize
            className={"upload-text-input"}
            placeholder={"Express something about your work."}
            required
          />

          <div className="rounded-lg relative">
            <button className="button-medium button-fair-primary backdrop:blur-2xl absolute top-4 left-4">
              <HiOutlineRefresh className="w-5 h-5" />
              <span className="font-bold">Change</span>
            </button>
            <button className="icon-button-medium button-fair-primary backdrop:blur-2xl absolute top-4 right-4">
              <HiOutlineTrash className="w-5 h-5" />
            </button>
            <img
              src={image}
              alt={`picture ${index}`}
              className={"rounded-lg"}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default DraftImages;
