import TextareaAutoSize from "react-textarea-autosize";

import { useDropzone } from "react-dropzone";

const Dropzone = () => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone();

  return (
    <>
      <div
        {...getRootProps()}
        className="upload-dropzone w-full flex flex-col items-center content-center min-h-[20rem] justify-center text-center gap-2 rounded-sm"
      >
        <input {...getInputProps()} className="upload-input" />
        <img src="/src/images/cloud.svg" alt="cloud" className=" w-24 mb-2" />
        <span>
          Drag and drop your artwork, or click{" "}
          <span className="font-bold text-accent-100 cursor-pointer">
            Browse
          </span>
        </span>
        <span>10 MB for each image, with a maximum of 10 per post.</span>
        <span> Any kind of images are accepted. </span>
      </div>
    </>
  );
};

export default Dropzone;
