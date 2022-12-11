//components
import Logo from "@components/Logo/";
import ButtonGroup from "./ButtonGroup.jsx";
import Navigation from "./Navigation.jsx";
import SearchBar from "@components/SearchBar";
import Categories from "./Categories.jsx";
import SideMenu from "@layouts/SideMenu/";

//icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Topbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={"topbar-section"}>
        <div className={"topbar-top-section"}>
          <button
            className={"icon-button-medium button-fair-secondary"}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <HiOutlineMenuAlt1 className={"w-6 h-6"} />
          </button>
          <Logo height={"2.5rem"} />
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
      <SideMenu setMenuOpen={setMenuOpen} isOpen={isMenuOpen} />
    </>
  );
};

export default Topbar;
