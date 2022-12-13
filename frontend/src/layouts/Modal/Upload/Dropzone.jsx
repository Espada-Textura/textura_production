import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useUploadStore, addDraftImages } from "@/zustand/uploadStore";
import { useBase64 } from "@/hooks/useBase64";

import cloudSvg from "@/images/cloud.svg";

import DraftImages from "./DraftImages";
import UploadButtons from "./UploadButtons";

const Dropzone = () => {
  const images = useUploadStore((state) => [...state.draftImages]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    //if the total number of image is less than 10, we proceed the post
    if (acceptedFiles.length + images.length <= 10) {
      //set the add more to false for disable the upload fields for a while
      setAddMore(false);

      acceptedFiles.forEach((file) => {
        useBase64(file).then(
          (result) => {
            addDraftImages(result);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    onDrop,
    maxSize: 10000000,
    maxFiles: 10,
  });

  return (
    <>
      {images.length <= 0 ? (
        <div className="w-[80%] mb-5">
          <h2 className=" font-bold text-xl sm:text-2xl">Upload Artwork</h2>
          <span>Share us what is your working on?</span>
        </div>
      ) : (
        <DraftImages images={images} />
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
        <span> {"(*.png, *.jpg, *jpeg)"} files are accepted. </span>
      </div>

      {images.length > 0 && <UploadButtons />}
    </>
  );
};

export default Dropzone;
