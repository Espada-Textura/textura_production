//components
import Menu from "./Menu.jsx";
import Logo from "@components/Logo/";
import ButtonGroup from "./ButtonGroup.jsx";
import Navigation from "./Navigation.jsx";
import SearchBar from "@components/SearchBar/index.jsx";
import Categories from "./Categories.jsx";

//icons

export default function Topbar() {
  return (
    <header className={"topbar-section"}>
      <div className={"topbar-top-section"}>
        <Menu />
        <Logo />
        <Navigation />
        <SearchBar />
        <ButtonGroup />
      </div>
      <div className={"topbar-bottom-section"}>
        <Categories />
      </div>
    </header>
  );
}
