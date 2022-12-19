import create from "zustand";

export const useUploadStore = create(() => ({
  isOpen: false,
  draftImages: [],
}));

export const setUpload = (state) =>
  useUploadStore.setState((prevState) => ({ ...prevState, isOpen: state }));

export const addDraftImages = (image, index) => {
  useUploadStore.setState((prevState) => ({
    ...prevState,
    draftImages: (() => {
      if (prevState.draftImages[index] === undefined)
        prevState.draftImages[index] = image;
      else prevState.draftImages[index + prevState.draftImages.length] = image;
      return prevState.draftImages;
    })(),
  }));
};

export const deleteDraftImage = (elementIndex) => {
  useUploadStore.setState((prevState) => ({
    ...prevState,
    imageLength: prevState.imageLength - 1,
    draftImages: prevState.draftImages.filter(
      (element, index) => index !== elementIndex
    ),
  }));
};

export const changeDraftImage = (elementIndex, newImage) => {
  useUploadStore.setState((prevState) => ({
    ...prevState,
    draftImages: prevState.draftImages.map((element, index) => {
      return elementIndex === index ? newImage : element;
    }),
  }));
};

export const resetDraftImages = () =>
  useUploadStore.setState((prevState) => ({
    ...prevState,
    draftImages: [],
  }));