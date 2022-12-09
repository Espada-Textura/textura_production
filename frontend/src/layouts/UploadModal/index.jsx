import React from "react";

const uploadModal = () => {
  return (
    <>
      <div className={"upload-container"}>
        <div className={"upload-title"}>
          <h2>Upload Artwork</h2>
          <span>
            Let our community know about your creation, or share us what is your
            working on.
          </span>
        </div>
        <form>
          <input
            name={"upload-art-name"}
            type={"text"}
            placeholder={"Name of this masterpiece"}
          />
          <input name={"upload-art-desc"} type={"text"} />
          <div className={""}></div>
          <div>
            <button className={"button-contained-fair"}></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default uploadModal;
