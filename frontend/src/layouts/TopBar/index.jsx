//components
import Logo from "@components/Logo/";
import ButtonGroup from "./ButtonGroup.jsx";
import Navigation from "./Navigation.jsx";
import SearchBar from "@components/SearchBar";
import Categories from "./Categories.jsx";

//store
import { useMenuStore, setMenuOpen } from "@/zustand/menuStore.jsx";

//icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Topbar = () => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);

  return (
    <header className={"topbar-section"}>
      <div className={"topbar-top-section"}>
        <button
          className={"icon-button-medium button-fair-secondary"}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <HiOutlineMenuAlt1 className={"w-6 h-6"} />
        </button>
        <Logo />
        <Navigation />
        <SearchBar />
        <ButtonGroup />
      </div>
      {/* <div
        className={
          "topbar-bottom-section max-xl:justify-around max-xl:gap-0 max-md:hidden"
        }
      >
        <Categories />
      </div> */}
    </header>
  );
};

export default Topbar;
