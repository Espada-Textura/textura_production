import { useCallback } from "react";
import { useUploadStore } from "@/zustand/uploadStore";
import { useErrorNotify } from "@/hooks/notification";
import { useAsyncFileRead, useHandleSubmit } from "@/hooks/upload";

import TextareaAutoSize from "react-textarea-autosize";

import { HiOutlineRefresh, HiOutlineTrash } from "react-icons/hi";

const DraftImages = ({ form, fieldArray }) => {
  const [images, deleteDraftImage, changeDraftImage] = useUploadStore(
    (state) => [
      state.draftImages,

      state.deleteDraftImage,
      state.changeDraftImage,
    ]
  );

  const {
    register,
    unregister,
    formState: { errors },
  } = form;

  const { remove } = fieldArray;

  const handleImageChange = useCallback((event, index) => {
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
      (_error) => {
        useErrorNotify(
          "File Reading Error",
          `There was an error reading your files. Please try again.`
        );
      }
    );
  }, []);

  const handleDeleteImage = async (index) => {
    await unregister(`desc[${index}].input`); //remove the validation from react-hook-form
    await remove(index); //remove the input from the form
    await deleteDraftImage(index);
  };

  return (
    <div
      className={
        "bg-primary-100 max-sm:h-screen px-6 sm:px-8 w-full flex flex-col gap-4"
      }
    >
      <section className="text-center">
        <TextareaAutoSize
          {...register("title", { required: true })}
          className="placeholder:text-center text-center w-full resize-none"
          type="text"
          name="title"
          placeholder="Add a title here"
          autoFocus
        />
        {errors.title?.type === "required" && (
          <span className="text-sm text-error-100 text-center">
            * Please add a title *
          </span>
        )}
      </section>

      {images.map((image, index) => {
        return (
          <section className={"rounded-lg pb-4"} key={index}>
            <TextareaAutoSize
              {...register(`desc.${index}.input`)}
              className={
                "upload--text-input placeholder:text-center text-center text-base"
              }
              placeholder={"Express something about your work."}
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
                type="button"
                onClick={() => handleDeleteImage(index)}
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
                loading={"lazy"}
              />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default DraftImages;
