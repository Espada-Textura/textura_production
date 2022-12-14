import create from "zustand";

export const useUploadStore = create(() => ({
  isOpen: false,
  draftImages: [],
}));

export const setUpload = (state) =>
  useUploadStore.setState((prevState) => ({ ...prevState, isOpen: state }));

export const addDraftImages = (image) => {
  useUploadStore.setState((prevState) => ({
    ...prevState,
    draftImages: [...prevState.draftImages, image],
  }));
};

export const deleteDraftImage = (elementIndex) => {
  useUploadStore.setState((prevState) => ({
    ...prevState,
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
