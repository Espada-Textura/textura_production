import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

import { HiUser } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi";
import { useRef } from "react";

const ArtCard = ({ art, artist, title, like }) => {
  const [isLoaded, setLoad] = useState(false);

  const imgRef = useRef();

  if (art.rpath !== "" && art.preimage !== "")
    return (
      <div
        className={`artcard--container relative rounded-md mb-6 sm:mb-6 `}
        // style={{
        //   aspectRatio: `${art.height}/${art.width} `,
        // }}
      >
        <img
          ref={imgRef}
          src={art.tpath}
          alt={title}
          className={`rounded-md ${
            isLoaded ? "inline-block relative" : "hidden absolute"
          }`}
          loading="lazy"
          onLoad={() => {
            setLoad(true);
          }}
          draggable={false}
        />

        <section className="artcard--info-container flex flex-col justify-between backdrop-brightness-90 duration-200 transition-all first-letter: opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full p-5">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full flex justify-between content-center">
              <div className="flex gap-4">
                <img src="" alt="" className="w-7 h-7" />
                <span>username</span>
              </div>
              <div className="w-full flex">
                <div className="w-full flex flex-col gap-2">
                  <span className="">{title}</span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {!isLoaded && (
          <Blurhash
            hash={art.preimage}
            resolutionX={32}
            resolutionY={32}
            punch={1}
            width={"100%"}
            height={"100%"}
            className={"artcard--blurhash"}
            style={{
              aspectRatio: `${art.width / art.height}`,
              position: "relative",
              objectFit: "cover",
              top: "0",
              left: "0",
              display: "block",
              minHeight: "17.5rem",
            }}
          />
        )}
      </div>
    );
};

export default ArtCard;
