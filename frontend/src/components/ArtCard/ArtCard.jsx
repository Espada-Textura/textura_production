import { useState, useRef } from "react";
import { Blurhash } from "react-blurhash";
import { useNavigate } from "react-router-dom";

import {
  HiOutlineHeart,
  HiOutlineEye,
  HiOutlineChatAlt2,
  HiHeart,
} from "react-icons/hi";

const ArtCard = ({ data }) => {
  const [isLoaded, setLoad] = useState(false);
  const [likeByUser, setLike] = useState(false);
  const imgRef = useRef();
  const overLayRef = [useRef(), useRef()];

  const navigate = useNavigate();

  const art = data?.arts[0];

  if (art.rpath !== "" && art.preimage !== "")
    return (
      <figure
        className={`artcard--container relative rounded-md mb-6 sm:mb-6 cursor-pointer`}
        onClick={(event) => {
          if (overLayRef.find((element) => element.current === event.target))
            navigate(`/post/${data?.pid}`);
        }}
      >
        <img
          ref={imgRef}
          src={art.tpath}
          alt={data?.title}
          className={`rounded-md ${
            isLoaded ? "inline-block relative" : "hidden absolute"
          }`}
          loading="lazy"
          onLoad={() => {
            setLoad(true);
          }}
          draggable={false}
        />

        <section
          ref={overLayRef[0]}
          className="artcard--info-container font-normal text-primary-100 flex flex-col justify-between backdrop-brightness-90 duration-200 transition-all first-letter: opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full p-5"
        >
          <div
            className="w-full h-full flex flex-col justify-between"
            ref={overLayRef[1]}
          >
            <div className="flex gap-4 justify-items-start items-center">
              <img
                src={data?.user.avatar}
                alt={data?.user.lastName}
                className="w-8 h-8 rounded-lg"
              />
              <span className=" text-base">{`${data?.user.firstName} ${data?.user.lastName}`}</span>
            </div>

            <div className="w-full flex gap-4">
              <div className="w-full flex flex-col gap-2 overflow-clip">
                <span className="uppercase text-xl font-semibold">
                  {data?.title}
                </span>
                <p className="overflow-hidden text-sm font-light max-h-10 h-full text-ellipsis text-justify">
                  {art.desc
                    ? art.desc
                    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi soluta dolorum nobis quia voluptate, quibusdam quaerat molestiae neque assumenda quod quidem."}
                </p>
                <div className="flex gap-8 mt-1">
                  <div className="flex gap-3">
                    <HiOutlineEye className="w-5 h-5" />
                    <span>{data?.view}</span>
                  </div>
                  <div className="flex gap-3">
                    <HiOutlineChatAlt2 className="w-5 h-5" />
                    <span>{0}</span>
                  </div>
                  <div className="flex gap-3">
                    <HiOutlineHeart className="w-5 h-5" />
                    <span>{data?.like}</span>
                  </div>
                </div>
              </div>
              <button
                className="shadow-none"
                onClick={() => setLike(!likeByUser)}
              >
                {likeByUser ? (
                  <HiHeart className="w-7 h-7 text-accent-100 m-4" />
                ) : (
                  <HiOutlineHeart
                    className={`w-7 h-7 m-4 hover:text-accent-100`}
                  />
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
      </figure>
    );
};

export default ArtCard;
