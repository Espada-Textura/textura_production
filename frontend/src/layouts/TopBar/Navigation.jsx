//hooks
import { NavLink } from "react-router-dom";

//icons
import {
  HiOutlineHome,
  HiOutlinePuzzle,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import { FiCompass } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav className="max-md:hidden">
      <ul className={"topbar-navigation-bar max-lg:gap-6"}>
        <li>
          <NavLink to={"/home"} className={"topbar-nav-link max-xl:p-3"}>
            <span className="max-lg:hidden">Home</span>
            <HiOutlineHome className="lg:hidden w-6 h-6" />
          </NavLink>
        </li>

        <li>
          <NavLink to={"/discover"} className={"topbar-nav-link max-xl:p-3"}>
            <span className="max-lg:hidden">Discover</span>
            <FiCompass className="lg:hidden w-6 h-6" />
          </NavLink>
        </li>

        <li>
          <NavLink to={"/challenges"} className={"topbar-nav-link max-xl:p-3"}>
            <span className="max-lg:hidden">Challenges</span>
            <HiOutlinePuzzle className="lg:hidden w-6 h-6" />
          </NavLink>
        </li>

        <li>
          <NavLink to={"/forum"} className={"topbar-nav-link max-xl:p-3"}>
            <span className="max-lg:hidden">Forum</span>
            <HiOutlineChatAlt2 className="lg:hidden w-6 h-6" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
