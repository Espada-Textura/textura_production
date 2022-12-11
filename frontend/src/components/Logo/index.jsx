import { Link } from "react-router-dom";

export default function Logo({ width, height }) {
  return (
    <Link to={"/home"} className="flex px-4">
      <img
        src="/src/images/logo.svg"
        alt="logo"
        style={{ width: width, height: height }}
      />
    </Link>
  );
}
