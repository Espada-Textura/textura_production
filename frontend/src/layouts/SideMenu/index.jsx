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

const SideMenu = (props) => {
  return (
    <>
      <div className={"sidebar-portal"}>
        <aside className={"sidebar-container"}>
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

            <NavLink className={"sidebar-item"} to={"challenge"}>
              <HiOutlinePuzzle />
              Challenge
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

          <footer className="sidebar-footer">
            <FaFacebook />
            <FaGithub />
            <FaTwitter />
            <FaYoutube />
          </footer>
        </aside>
        <div
          className={"sidebar-empty-space w-full z-0"}
          onClick={() => props.setOpen(false)}
        ></div>
      </div>
    </>
  );
};

export default SideMenu;
