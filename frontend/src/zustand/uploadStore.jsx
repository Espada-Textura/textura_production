import create from "zustand";

export const useUploadStore = create(() => ({
  isOpen: false,
  draftImages: [],
}));

export const setUpload = (state) =>
  useUploadStore.setState((prevState) => ({ ...prevState, isOpen: state }));

export const addDraftImages = (state) => {
  useUploadStore.setState((prevState) => ({
    ...prevState,
    draftImages: [...prevState.draftImages, state],
  }));
};
