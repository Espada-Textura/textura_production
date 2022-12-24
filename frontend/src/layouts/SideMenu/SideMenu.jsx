import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import { useKeyAction } from "@/hooks/useKeyAction";
import { useOutSideClose } from "@/hooks/useModalClose";

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
  HiOutlineMenuAlt1,
} from "react-icons/hi";
import { Portal } from "react-portal";

const SideMenu = (props) => {
  const sideMenuRef = useRef();

  const handleClose = () => props.setMenuOpen(false);

  useOutSideClose([sideMenuRef, props.togglerRef], handleClose, []);
  useKeyAction("Escape", handleClose, []);

  return (
    <Portal>
      <aside ref={sideMenuRef} className={`sidebar-container`}>
        <div className={"px-6 py-[0.65rem]"}>
          <button
            className={"icon-button-medium button-fair-secondary w-fit"}
            onClick={handleClose}
          >
            <HiOutlineMenuAlt1 className={"w-6 h-6"} />
          </button>
        </div>
        <div className="sidebar-menu">
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
        </div>
        <footer className="sidebar-footer">
          <FaFacebook />
          <FaGithub />
          <FaTwitter />
          <FaYoutube />
        </footer>
      </aside>
    </Portal>
  );
};

export default SideMenu;
