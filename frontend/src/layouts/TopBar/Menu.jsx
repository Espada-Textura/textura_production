import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Menu = () => {
  return (
    <>
      <button
        className={"icon-button-medium button-fair-secondary"}
        // onClick={}
      >
        <HiOutlineMenuAlt1 className={"w-6 h-6"} />
      </button>
    </>
  );
};

export default Menu;
