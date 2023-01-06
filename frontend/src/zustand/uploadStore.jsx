import create from "zustand";

export const useUploadStore = create((set) => ({
  isOpen: false,
  imageLength: 0,
  title: "",
  desc: [],
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
      desc: prevState.desc.filter(
        (_element, elementIndex) => index !== elementIndex
      ),
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

  setDesc: (inputs) =>
    set((prevState) => {
      if (prevState.desc.length > prevState.draftImages.length) {
        prevState.desc.shift();
        return { ...prevState, desc: [...prevState.desc, ...inputs] };
      }

      return { ...prevState, desc: [...prevState.desc, ...inputs] };
    }),

  resetUpload: () =>
    set((prevState) => ({
      ...prevState,

      imageLength: 0,
      title: "",
      desc: [{ input: "" }],
      draftImages: [],
    })),
}));
