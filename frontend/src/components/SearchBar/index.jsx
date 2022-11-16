//icons
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";

export default function SearchBar() {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(() => event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full px-4 max-xl:hidden">
      <form onSubmit={handleSubmit} className={"search-bar "}>
        <input
          type={"text"}
          placeholder={"Search for digital arts, anime, etc."}
          name={"search"}
          value={state}
          onChange={handleChange}
          autoComplete={"off"}
        />
        <button className={"icon-btn-medium"} onClick={handleSubmit}>
          <HiOutlineSearch className={"w-6 h-6"} />
        </button>
      </form>
    </div>
  );
}
