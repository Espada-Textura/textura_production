//components
import Menu from "./Menu.jsx";
import Logo from "@components/Logo/";
import ButtonGroup from "./ButtonGroup.jsx";
import Navigation from "./Navigation.jsx";

import Categories from "./Categories.jsx";
//icons

export default function Topbar() {
  return (
    <header className={"topbar-section"}>
      <div className={"topbar-top-section"}>
        <div className={"flex gap-10 items-center"}>
          <Menu />
          <Logo />
        </div>
        <Navigation />
        <ButtonGroup />
      </div>
      <div className={"topbar-bottom-section"}>
        <Categories />
      </div>
    </header>
  );
}
