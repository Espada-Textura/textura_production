//icons
import { HiSearch } from "react-icons/hi";
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
    <div className=" w-full px-4 max-xl:hidden max-w-sm">
      <form onSubmit={handleSubmit} className={"search-bar "}>
        <input
          type={"text"}
          placeholder={"Search arts, anime, etcs."}
          name={"search"}
          value={state}
          onChange={handleChange}
          autoComplete={"off"}
        />
        <button
          className={"icon-btn-medium  opacity-60"}
          onClick={handleSubmit}
        >
          <HiSearch className={"w-6 h-6"} />
        </button>
      </form>
    </div>
  );
}
