import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <NavLink to={"discover/all"}>All</NavLink>
      <NavLink to={"discover/latest"}>Latest</NavLink>
      <NavLink to={"discover/following"}>Following</NavLink>
      <NavLink to={"discover/popular"}>Popular</NavLink>
      <NavLink to={"discover/trending"}>Trending</NavLink>
      <NavLink to={"discover/artists"}>Artists</NavLink>
      <NavLink to={"discover/stories"}>Stories</NavLink>
    </>
  );
};

export default Categories;
