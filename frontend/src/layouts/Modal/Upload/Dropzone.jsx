import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useUploadStore, addDraftImages } from "@/zustand/uploadStore";
import { useAsyncFileRead } from "@/hooks/useFileRead";
import { useErrorNotify, useWarningNotify } from "@/hooks/useNotify";

import cloudSvg from "@/images/cloud.svg";

import Header from "./Header";
import DraftImages from "./DraftImages";

const Dropzone = () => {
  let filesCount = 0;
  const limitFiles = 10;

  const images = useUploadStore((state) => [...state.draftImages]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file, index) => {
      useAsyncFileRead(file).then(
        (result) => {
          addDraftImages(result, index + images.length);
        },
        (error) => {
          useErrorNotify(
            "File Reading Error",
            `There was an error reading your files. Please try again.`
          );
        }
      );
    });

    rejectedFiles.forEach((file, index) => {
      switch (file.errors[0].code) {
        case "file-invalid-type": {
          useErrorNotify(
            "Unsupported File",
            <span>
              <span className="font-bold"> {file.file.name} </span> has
              unsupported extension.
            </span>
          );
          break;
        }

        case "file-too-large": {
          useErrorNotify(
            "File too large",
            <span>
              <span className="font-bold"> {file.file.name} </span> has too
              large size.
            </span>
          );
          break;
        }

        case "limit-files-reached": {
          useWarningNotify(
            "Limited Files Reached",
            <span>
              You can post up to{" "}
              <span className="font-bold"> {limitFiles} </span> pictures per
              post only.
            </span>
          );
          break;
        }
      }
    });
  }, []);

  const fileValidator = (file) => {
    filesCount++;

    return images.length + filesCount > limitFiles
      ? {
          code: "limit-files-reached",
          message: "You can only post 10 picture per post.",
        }
      : null;
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/jpeg": [], "image/png": [] },
    maxSize: 10000000,
    maxFiles: (() => {
      const max = limitFiles - images.length;
      return max > 1 ? max : 1;
    })(),
    multiple: true,
    onDrop,
    validator: fileValidator,
  });

  return (
    <>
      <div className="fixed  sm:fixed w-[100%] max-sm:w-full bg-primary-100 z-10 max-w-[40rem] rounded-t-lg">
        <Header />
      </div>

      {images.length > 0 && (
        <div className="mt-14 sm:max-h-[70vh] overflow-y-scroll scrollbar-hide">
          <DraftImages />
        </div>
      )}

      {images.length < limitFiles && (
        <div
          className={
            "px-8 flex justify-center rounded-b-lg border-t-[1px] border-solid border-t-secondary-20"
          }
          style={
            images.length > 0
              ? {
                  position: "absolute",
                  width: "100%",
                  bottom: 0,
                  backgroundColor: "var(--tr-primary)",
                }
              : {}
          }
        >
          <div
            {...getRootProps()}
            className={
              "rounded-sm font-medium text-secondary-90 flex justify-center" +
              (images.length < 0 ? " w-full" : " w-fit")
            }
          >
            <input {...getInputProps()} />

            {images.length <= 0 ? (
              <div className="px-8 mt-8 min-h-[20rem] flex flex-col items-center content-center justify-center text-center gap-2">
                <img
                  src={cloudSvg}
                  alt="cloud"
                  className=" w-24 mb-2"
                  draggable={false}
                />
                <span>
                  Drag and drop your artwork, or click{" "}
                  <span className="font-bold text-accent-100 cursor-pointer">
                    Browse
                  </span>
                </span>
                <span>
                  10 MB for each image, with a maximum of {limitFiles} per post.
                </span>
                <span> {"(*.png, *.jpg, *jpeg)"} files are accepted. </span>
              </div>
            ) : (
              <button className="relative  self-center text-center w-full button-medium my-1 button-plain-secondary text-secondary-100 rounded-lg font-bold">
                Add More
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dropzone;
