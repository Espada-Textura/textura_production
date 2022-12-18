//hooks
import { useRef } from "react";

//components
import Logo from "@components/Logo/";
import ButtonGroup from "./ButtonGroup.jsx";
import Navigation from "./Navigation.jsx";
import SideMenu from "@layouts/SideMenu/";

//icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Topbar = () => {
  const menuRef = useRef();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={"topbar-section"}>
        <div className={"topbar-top-section"}>
          <button
            ref={menuRef}
            className={"icon-button-medium button-fair-secondary md:hidden"}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <HiOutlineMenuAlt1 className={"w-6 h-6"} />
          </button>
          <div className="flex gap-6">
            <Logo
              style={{
                height: "3rem",
                paddingBottom: "0.25rem",
              }}
            />
            <Navigation />
          </div>
          <ButtonGroup />
        </div>
      </header>
      {isMenuOpen && (
        <SideMenu setMenuOpen={setMenuOpen} togglerRef={menuRef} />
      )}
    </>
  );
};

export default Topbar;
