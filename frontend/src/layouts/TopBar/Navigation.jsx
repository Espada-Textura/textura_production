//hooks
import { NavLink } from "react-router-dom";

//icons
import { HiOutlineHome } from "react-icons/hi";

export default function Navigation() {
  return (
    <ul className={"topbar-navigation-bar "}>
      <li>
        <NavLink to={"/home"} className={"topbar-nav-link"}>
          {/* <HiOutlineHome className="block xl:hidden" /> */}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/discover"} className={"topbar-nav-link"}>
          Discover
        </NavLink>
      </li>
      <li>
        <NavLink to={"/challenges"} className={"topbar-nav-link"}>
          Challenges
        </NavLink>
      </li>
      <li>
        <NavLink to={"/forum"} className={"topbar-nav-link"}>
          Forum
        </NavLink>
      </li>
    </ul>
  );
}
