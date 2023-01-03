import create from "zustand";

export const useUploadStore = create((set) => ({
  isOpen: false,
  imageLength: 0,
  title: "",
  desc: [{ input: "" }],
  draftImages: [],

  setUploadOpen: (state) =>
    set((prevState) => ({ ...prevState, isOpen: state })),

  addDraftImages: (image, index) => {
    set((prevState) => ({
      ...prevState,
      imageLength: prevState.imageLength + 1,
      draftImages: (() => {
        prevState.draftImages[index] === undefined
          ? (prevState.draftImages[index] = image)
          : (prevState.draftImages[prevState.draftImages.length] = image);

        return prevState.draftImages;
      })(),
    }));
  },

  deleteDraftImage: (index) => {
    set((prevState) => ({
      ...prevState,
      imageLength: prevState.imageLength - 1,
      draftImages: prevState.draftImages.filter(
        (_element, elementIndex) => index !== elementIndex
      ),
    }));
  },

  changeDraftImage: (index, newImage) => {
    set((prevState) => ({
      ...prevState,
      draftImages: prevState.draftImages.map((element, elementIndex) => {
        return elementIndex === index ? newImage : element;
      }),
    }));
  },

  resetDraftImages: () =>
    set((prevState) => ({
      ...prevState,
      imageLength: 0,
      draftImages: [],
    })),

  setTitle: (title) =>
    set((prevState) => ({
      ...prevState,
      title: title,
    })),

  setInputs: (inputs) => {
    set((prevState) => ({
      ...prevState,
      desc: [...prevState.desc, ...inputs],
    }));
  },
}));
