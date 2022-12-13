import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import TextareaAutoSize from "react-textarea-autosize";
import cloudSvg from "@/images/cloud.svg";

const Dropzone = () => {
  const [images, setAcceptedImages] = useState([]);
  const [addMore, setAddMore] = useState(false);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles);
    console.log(rejectedFiles);

    //if the total number of image is less than 10, we proceed the post
    acceptedFiles.length + images.length <= 10 &&
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          setAcceptedImages((prevState) => [
            ...prevState,
            { data: reader.result, name: file.name },
          ]);
        };

        reader.readAsDataURL(file);
      });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".gif", ".svg"] },
    onDrop,
    maxSize: 10000000,
  });

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <>
      {images.length > 0 && (
        <>
          {images.map((image, index) => (
            <div className={"rounded-lg"} key={index}>
              <TextareaAutoSize className={"resize-none w-full bg-white"} />
              <img src={image.data} alt={image.name} className={"rounded-lg"} />
            </div>
          ))}
        </>
      )}

      <div
        {...getRootProps()}
        className="upload-dropzone w-full flex flex-col items-center content-center min-h-[20rem] justify-center text-center gap-2 rounded-sm font-medium text-secondary-90"
      >
        <input {...getInputProps()} />
        <img src={cloudSvg} alt="cloud" className=" w-24 mb-2" />
        <span>
          Drag and drop your artwork, or click{" "}
          <span className="font-bold text-accent-100 cursor-pointer">
            Browse
          </span>
        </span>
        <span>10 MB for each image, with a maximum of 10 per post.</span>
        <span> {"(*.png, *.jpg, *.gif, *.svg)"} files are accepted. </span>
      </div>
    </>
  );
};

export default Dropzone;
