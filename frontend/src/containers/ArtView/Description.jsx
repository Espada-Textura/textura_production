import { useState } from "react";
import { useTimeDifference } from "@/hooks";
import {
  HiOutlineDotsVertical,
  HiOutlineHeart,
  HiOutlineChatAlt2,
  HiOutlineShare,
} from "react-icons/hi";
import { useEffect } from "react";
import { useRef } from "react";

const Description = ({ art }) => {
  const [isShowMore, setShowMore] = useState(false);
  const [isOverFlown, setOverFlow] = useState(false);
  const descRef = useRef();

  const postedtime = useTimeDifference(art?.createdDate);
  console.log(art?.createdDate, postedtime);

  useEffect(() => {
    const resize = () => {
      const height = descRef.current.scrollHeight;

      // console.log(descRef.current.clientHeight);
      setOverFlow(height > 109);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <section className="flex flex-col">
        <div className="flex gap-4 items-center">
          <img
            src={art?.user.avatar}
            alt={art?.user.firstName}
            className="w-10 h-10 rounded-xl"
          />
          <div className="flex flex-col items-center justify-start w-full text-sm">
            <span className="font-semibold self-start">
              {`${art?.user.firstName} ${art?.user.lastName}`}
            </span>
            <span className="text-secondary-90 self-start">
              {postedtime.dateDifference}
            </span>
          </div>
          <button type="button">
            <HiOutlineDotsVertical className="w-5 h-5" />
          </button>
        </div>
      </section>

      <article className="flex flex-col gap-2 ">
        <h2 className="font-semibold text-xl">{art?.title}</h2>
        <p
          ref={descRef}
          className={`text-ellipsis text-justify text-secondary-100 ${
            isShowMore ? "" : "overflow-hidden max-h-[6.8rem]"
          }`}
        >
          {art?.arts[0].desc
            ? art?.arts[0].desc
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste quidem pariatur tenetur officiis. Totam veniam voluptas tempore culpa, quos ut quia, blanditiis corrupti numquam cumque quo! Repellendus officia id et? Ullam nam ea assumenda nobis? Fugit placeat corrupti ipsa."}
        </p>
        {isOverFlown && (
          <button className="self-start">
            <span
              className="text-left font-bold"
              onClick={() => setShowMore(!isShowMore)}
            >
              {isShowMore ? "Show Less" : "Show More"}
            </span>
          </button>
        )}
      </article>

      <section className="flex flex-col gap-2 text-secondary-100 ">
        <div className="flex justify-between">
          <span>0 Like</span>
          <span>{`${art?.view} view${art?.view > 0 ? "s" : ""}`}</span>
        </div>
        <div className="flex border-y-[1px] border-secondary-30 border-solid">
          <button className="h-11 pr-3 w-full">
            <HiOutlineHeart className="w-5 h-5" />
            <span>Like</span>
          </button>
          <button className="h-11 px-3 w-full">
            <HiOutlineChatAlt2 className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button className="h-11 pl-3 w-full">
            <HiOutlineShare className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
        <div className="flex justify-between">
          <span>0 Comment</span>
          <span>0 Share</span>
        </div>
      </section>
    </>
  );
};

export default Description;
