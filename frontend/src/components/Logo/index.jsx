import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to={"/home"}
      className="flex"
      style={{ fontFamily: "pacifico", fontSize: "2em", padding: "0, 0.5rem" }}
    >
      <p style={{ color: "var(--tr-accent)" }}> Tex </p>
      <p style={{ color: "var(--tr-secondary)" }}> tura </p>
    </Link>
  );
}
