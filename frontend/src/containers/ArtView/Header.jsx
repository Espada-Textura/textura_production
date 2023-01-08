import {
  HiOutlineChevronLeft,
  HiOutlineZoomIn,
  HiOutlineZoomOut,
  HiOutlineArrowsExpand,
} from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center z-50 h-16 absolute top-0 left-0 w-full sm:px-10 p-4">
      <button className="flex" onClick={() => navigate("/home")}>
        <HiOutlineChevronLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
      <div className="flex gap-2">
        <button className="icon-button-medium">
          <HiOutlineZoomIn className="w-5 h-5" />
        </button>
        <button className="icon-button-medium">
          <HiOutlineZoomOut className="w-5 h-5" />
        </button>
        <button className="icon-button-medium">
          <HiOutlineArrowsExpand className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
