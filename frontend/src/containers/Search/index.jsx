import React from "react";

const Search = () => {
  return (
    <>
      <section className={"home-search-container"}>
        <div className="home-search-content">
          <h2>{search ? `${search}` : "Explore and Share Some Talents"}</h2>
          <h4>
            Over 5000 masterworks, including artwork, illustrations, and graphic
            designs
          </h4>
        </div>

        <form className={"search-form"} action={"/search"}>
          <input
            type="search"
            placeholder={"What are you looking for?"}
            name={"q"}
          />
          <button className="home-search-button">Search</button>
        </form>
        <div className={"home-search-suggestion"}></div>
        <div className={"home-search-category"}></div>
      </section>
    </>
  );
};

export default Search;
