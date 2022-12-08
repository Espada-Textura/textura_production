import { NavLink } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlinePuzzle,
  HiOutlineUserGroup,
  HiOutlineStar,
  HiOutlineNewspaper,
  HiOutlineHeart,
  HiOutlineLightningBolt,
  HiOutlineFire,
  HiOutlineLightBulb,
  HiOutlineAtSymbol,
  HiOutlineBookmark,
} from "react-icons/hi";

import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import { setMenuOpen, useMenuStore } from "@/zustand/menuStore";

const SideMenu = () => {
  const isOpen = useMenuStore((state) => state.isMenuOpen);

  return (
    <>
      <aside
        className={`sidebar-container ${
          isOpen ? "translate-x-0" : "translate-x-[-300px]"
        } ease-in-out duration-300`}
      >
        <div className={"sidebar-section"}>
          <input
            className={"sidebar-search"}
            type={"search"}
            placeholder={"Search"}
          />
        </div>

        <div className={"sidebar-section"}>
          <div className={"sidebar-section-title"}>Navigation</div>

          <NavLink className={"sidebar-item"} to={"home"}>
            <HiOutlineHome />
            Home
          </NavLink>

          <NavLink className={"sidebar-item"} to={"challenges"}>
            <HiOutlinePuzzle />
            Challenges
          </NavLink>

          <NavLink className={"sidebar-item"} to={"forum"}>
            <HiOutlineUserGroup />
            Forum
          </NavLink>
        </div>

        <div className={"sidebar-section"}>
          <div className={"sidebar-section-title"}>Discover</div>

          <NavLink className={"sidebar-item"} to={"discover/all"}>
            <HiOutlineStar />
            Discover
          </NavLink>

          <NavLink className={"sidebar-item"} to={"discover/latest"}>
            <HiOutlineNewspaper />
            Latest
          </NavLink>

          <NavLink className={"sidebar-item"} to={"discover/following"}>
            <HiOutlineHeart />
            Following
          </NavLink>

          <NavLink className={"sidebar-item"} to={"discover/popular"}>
            <HiOutlineLightningBolt />
            Popular
          </NavLink>

          <NavLink className={"sidebar-item"} to={"discover/trending"}>
            <HiOutlineFire />
            Trending
          </NavLink>

          <NavLink className={"sidebar-item"} to={"discover/topics"}>
            <HiOutlineLightBulb />
            Topics
          </NavLink>

          <NavLink className={"sidebar-item"} to={"discover/artists"}>
            <HiOutlineAtSymbol />
            Artists
          </NavLink>

          <NavLink className={"sidebar-item"} to={"discover/stories"}>
            <HiOutlineBookmark />
            Stories
          </NavLink>
        </div>

        <footer className="sidebar-footer ">
          <FaFacebook />
          <FaGithub />
          <FaTwitter />
          <FaYoutube />
        </footer>
      </aside>
      <div
        className={`${
          !isOpen && "hidden"
        } sidebar-empty-space w-full z-0 absolute top-0 right-0 h-full`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default SideMenu;
