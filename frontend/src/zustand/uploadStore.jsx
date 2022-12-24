import create from "zustand";

export const useUploadStore = create((set) => ({
  isOpen: false,
  draftImages: [],

  setUploadOpen: (state) =>
    set((prevState) => ({ ...prevState, isOpen: state })),

  addDraftImages: (image, index) => {
    set((prevState) => ({
      ...prevState,
      draftImages: (() => {
        console.log(index + prevState.draftImages.length);

        prevState.draftImages[index] === undefined
          ? (prevState.draftImages[index] = image)
          : (prevState.draftImages[index + prevState.draftImages.length] =
              image);

        return prevState.draftImages;
      })(),
    }));
  },

  deleteDraftImage: (index) => {
    set((prevState) => ({
      ...prevState,
      imageLength: prevState.imageLength - 1,
      draftImages: prevState.draftImages.filter(
        (element, elementIndex) => index !== elementIndex
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
      draftImages: [],
    })),
}));
