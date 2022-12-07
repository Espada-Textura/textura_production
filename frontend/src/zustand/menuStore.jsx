import create from "zustand";

export const useMenuStore = create(() => ({
  isMenuOpen: false,
}));

export const setMenuOpen = (newState) => {
  useMenuStore.setState(() => ({
    isMenuOpen: newState,
  }));
};
