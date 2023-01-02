import { Fragment, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useForm, useFieldArray } from "react-hook-form";
import { useUploadStore } from "@/zustand/uploadStore";
import { useAsyncFileRead, useHandleSubmit } from "@/hooks/upload";
import {
  useErrorNotify,
  useWarningNotify,
  useSuccessNotify,
} from "@/hooks/notification";
import { art } from "@/api";
import axios from "@/axios";

import shallow from "zustand/shallow";

import cloudSvg from "@/images/cloud.svg";
import { ImSpinner2 } from "react-icons/im";

import Header from "./Header";
import DraftImages from "./DraftImages";

const Dropzone = () => {
  let filesCount = 0;
  const limitFiles = 10;

  const { data: auth, mutate: login, isSuccess: isLoginSucess } = art.login();

  //login
  useEffect(() => {
    login();
  }, []);

  if (isLoginSucess) {
    axios.defaults.headers.common.Authorization = `Bearer ${auth.data.accessToken}`;
  }

  const {
    data,
    error,
    isError: isUploadError,
    isIdle,
    isLoading: isUploadLoading,
    isPaused,
    isSuccess: isUploadSuccess,
    mutate,
    reset: resetUpload,
    status,
  } = art.useUpload();

  const [images, imageLength, addDraftImages, resetDraftImages, setUploadOpen] =
    useUploadStore(
      (state) => [
        state.draftImages,
        state.imageLength,
        state.addDraftImages,
        state.resetDraftImages,
        state.setUploadOpen,
      ],
      shallow
    );

  const form = useForm(
    {
      defaultValues: {
        title: "",
        desc: [{ input: "" }],
      },
    },
    { shouldFocusError: true }
  );

  const fieldArray = useFieldArray(
    { control: form.control, name: "desc" },
    { shouldUnregister: true }
  );

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file, index) => {
      useAsyncFileRead(file).then(
        (result) => {
          addDraftImages(result, index);
        },
        (_error) => {
          useErrorNotify(
            "File Reading Error",
            `There was an error reading your files. Please try again.`
          );
        }
      );
    });

    rejectedFiles.forEach((file, _index) => {
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

  const fileValidator = useCallback((_file) => {
    filesCount++;

    return imageLength + filesCount > limitFiles
      ? {
          code: "limit-files-reached",
          message: "You can only post 10 picture per post.",
        }
      : null;
  });

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

  if (isUploadSuccess) {
    useSuccessNotify(
      "Uploaded Successfully",
      `You can check the gallery to view your artworks.`
    );

    form.reset();
    resetUpload();
    setUploadOpen(false);
    resetDraftImages();
  }

  if (isUploadError) {
    useErrorNotify(
      "Uploading Error",
      `There was an error uploading your files. Please try again.`
    );
  }

  return (
    <Fragment>
      <form
        className={
          "upload--container sm:max-h-[80vh] max-sm:pt-0  max-sm:my-0 max-sm:rounded-none max-sm:w-full max-sm:bg-primary-100 max-sm:h-screen w-[90%] sm:max-w-[40rem] font-normal focus-visible:outline-none focus:outline-none"
        }
        onSubmit={form.handleSubmit((data) => {
          mutate(useHandleSubmit(data, images));
        })}
      >
        <div className="fixed sm:fixed sm:w-[90%] max-sm:w-full bg-primary-100 z-10 max-w-[40rem] rounded-t-xl">
          <Header trigger={form.trigger} formState={form.formState} />
        </div>

        {images.length > 0 && (
          <div
            className={`upload--image-container mt-14 pb-8 bg-primary-100 max-h-[85vh] sm:max-h-[70vh] overflow-y-scroll ${
              imageLength === limitFiles ? "rounded-b-xl" : ""
            }`}
          >
            <DraftImages form={form} fieldArray={fieldArray} />
          </div>
        )}

        {imageLength < limitFiles && (
          <div
            className={
              "bg-primary-100 px-8 flex w-full justify-center border-t-[1px] border-solid border-t-secondary-20 " +
              (images.length > 0
                ? "max-sm:bottom-0 max-sm:absolute rounded-b-xl"
                : "h-full sm:rounded-xl")
            }
          >
            <div
              {...getRootProps()}
              className={
                "rounded-sm font-medium text-secondary-90 flex justify-center w-full"
              }
            >
              <input {...getInputProps()} />

              {images.length <= 0 ? (
                <div className="px-8 mt-8 min-h-[20rem] flex flex-col items-center content-center justify-center text-center gap-2 ">
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
                    10 MB for each image, with a maximum of {limitFiles} per
                    post.
                  </span>
                  <span> {"(*.png, *.jpg, *jpeg)"} files are accepted. </span>
                </div>
              ) : (
                <button className="relative self-center text-center w-full button-medium  my-1  text-secondary-100 rounded-xl font-bold">
                  Add More
                </button>
              )}
            </div>
          </div>
        )}
      </form>
      {isUploadLoading && (
        <section className="absolute text-primary-100 font-bold z-[9999] top-0 bottom-0 h-full w-full  backdrop-brightness-50 bg-secondary-60 flex flex-col items-center justify-center gap-4">
          <ImSpinner2 className="w-10 h-10 animate-spin" />
          <span className="text-lg">Uploading</span>
        </section>
      )}
    </Fragment>
  );
};

export default Dropzone;
