import { useState } from "react";
import { Blurhash } from "react-blurhash";

import { HiUser } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi";

const ArtCard = ({ art, artist, title, like }) => {
  const [isLoaded, setLoad] = useState(false);

  if (art.rpath !== "" && art.preimage !== "")
    return (
      <div
        className={`artcard--container relative rounded-md mb-6 sm:mb-6 aspect-[${
          art.height + "/" + art.width
        }] h-full`}
      >
        <img
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

        <div className="artcard--info-container flex flex-col justify-between backdrop-brightness-90 duration-200 transition-all first-letter: opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full p-5">
          <section>
            {/* <div className="flex flex-col gap-3 w-full">
              <div className="flex gap-4">
                <div className="p-2 bg-primary-90 rounded-lg text-secondary-100">
                  <HiUser className="w-5 h-5" />
                </div>
                <span className="text-ellipsis text-primary-100 text-base text-center self-center">{`${artist.firstName} ${artist.lastName}`}</span>
              </div>
            </div> */}
          </section>
          <section className="relative bottom-0 left-0 flex">
            <span className="text-ellipsis text-primary-100 text-base w-full self-center">
              {title}
            </span>
            <button className="flex flex-col gap-2 w-1/5 bg-transparent outline-none border-none shadow-none">
              <HiOutlineHeart className="w-5 h-5 text-primary-100" />
              <span className=" text-primary-100 text-base">{like}</span>
            </button>
          </section>
        </div>

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
              aspectRatio: `${art.width}/${art.height}`,
              position: "absolute",
              objectFit: "cover",
              top: "0",
              left: "0",
              display: "block",
            }}
          />
        )}
      </div>
    );
};

export default ArtCard;
