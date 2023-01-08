import create from "zustand";

export const userAuthStore = create((set) => ({
  isAuthed: false,
  currentUser: {},

  setCurrentUser: (resp) =>
    set((prevState) => {
      let currentUser = resp ? resp : {};
      let isAuthed = currentUser ? true : false;

      return {
        ...prevState,
        ...{ currentUser: currentUser, isAuthed: isAuthed },
      };
    }),
}));
