import create from "zustand";

export const useUploadStore = create(() => ({
  isOpen: false,
}));

export const setUpload = (state) => useUploadStore.setState({ isOpen: state });
