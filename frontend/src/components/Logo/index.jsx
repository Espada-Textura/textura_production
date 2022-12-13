import { Link } from "react-router-dom";

import LogoImage from "@/images/logo.svg";

export default function Logo(props) {
  return (
    <Link to={"/home"} className="flex px-4">
      <img
        src={LogoImage}
        alt="logo"
        style={{ maxWidth: "initial", ...props.style }}
      />
    </Link>
  );
}
