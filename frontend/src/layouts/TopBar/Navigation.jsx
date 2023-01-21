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
      <ul className={"topbar--navigation-bar gap-4"}>
        <li>
          <NavLink to={"/"} className={"topbar--nav-link max-xl:p-3"}>
            <span className="max-md:hidden">Home</span>
            <HiOutlineHome className="md:hidden w-8 h-8" />
          </NavLink>
        </li>

        <li>
          <NavLink to={"/discover"} className={"topbar--nav-link max-xl:p-3"}>
            <span className="max-md:hidden">Discover</span>
            <FiCompass className="md:hidden w-8 h-8" />
          </NavLink>
        </li>

        <li>
          <NavLink to={"/challenges"} className={"topbar--nav-link max-xl:p-3"}>
            <span className="max-md:hidden">Challenges</span>
            <HiOutlinePuzzle className="md:hidden w-8 h-8" />
          </NavLink>
        </li>

        <li>
          <NavLink to={"/forum"} className={"topbar--nav-link max-xl:p-3"}>
            <span className="max-md:hidden">Forum</span>
            <HiOutlineChatAlt2 className="md:hidden w-8 h-8" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
