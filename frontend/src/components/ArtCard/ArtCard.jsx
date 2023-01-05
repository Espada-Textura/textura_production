import { useState } from "react";
import { Blurhash } from "react-blurhash";

import {
  HiOutlineHeart,
  HiOutlineEye,
  HiOutlineChatAlt2,
  HiHeart,
} from "react-icons/hi";
import { useRef } from "react";

const ArtCard = ({ art, artist, title, like, view, artCount }) => {
  const [isLoaded, setLoad] = useState(false);
  const [likeByUser, setLike] = useState(false);
  const imgRef = useRef();

  if (art.rpath !== "" && art.preimage !== "")
    return (
      <div className={`artcard--container relative rounded-md mb-6 sm:mb-6 `}>
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

        <section className="artcard--info-container font-normal text-primary-100 flex flex-col justify-between backdrop-brightness-90 duration-200 transition-all first-letter: opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full p-5">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-4 justify-items-start items-center">
                <img
                  src={artist.avatar}
                  alt={artist.lastName}
                  className="w-8 h-8 rounded-full"
                />
                <span className=" text-base">{`${artist.firstName} ${artist.lastName}`}</span>
              </div>
              {artCount > 1 && (
                <div className="text-sm font-semibold bg-secondary-20 rounded-lg backdrop-blur-md p-2">
                  +{artCount} More
                </div>
              )}
            </div>
            <div className="w-full flex gap-8">
              <div className="w-full flex flex-col gap-2 overflow-clip">
                <span className="uppercase text-xl font-semibold">{title}</span>
                <p className="overflow-hidden text-sm font-light max-h-14 h-full text-ellipsis text-justify">
                  {art.desc
                    ? art.desc
                    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi soluta dolorum nobis quia voluptate, quibusdam quaerat molestiae neque assumenda quod quidem."}
                </p>
                <div className="flex gap-8 mt-4">
                  <div className="flex gap-3">
                    <HiOutlineEye className="w-5 h-5" />
                    <span>{view}</span>
                  </div>
                  <div className="flex gap-3">
                    <HiOutlineChatAlt2 className="w-5 h-5" />
                    <span>{0}</span>
                  </div>
                  <div className="flex gap-3">
                    <HiOutlineHeart className="w-5 h-5" />
                    <span>{like}</span>
                  </div>
                </div>
              </div>
              <button
                className="shadow-none"
                onClick={() => setLike(!likeByUser)}
              >
                {likeByUser ? (
                  <HiHeart className="w-7 h-7 text-primary-100" />
                ) : (
                  <HiOutlineHeart className={`w-7 h-7`} />
                )}
              </button>
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
              maxHeight: "37.5rem",
            }}
          />
        )}
      </div>
    );
};

export default ArtCard;
