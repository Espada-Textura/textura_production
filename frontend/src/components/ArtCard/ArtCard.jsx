import { useQuery } from "@tanstack/react-query";
import ArtApi from "@/api";

// const useGetArt = (id) => ArtApi.get(id);

const ArtCard = ({ art }) => {
  // const { data } = useQuery({
  //   queryKey: ["art"],
  //   // queryFn: useGetArt,
  // });

  if (art.rpath !== "")
    return (
      <div className="artcard--container rounded-md mb-6 sm:mb-6">
        <img
          src={art.tpath}
          alt={art.createdDate}
          className="rounded-md"
          loading="lazy"
          onLoad={() => console.log("loaded")}
        />
        {}
      </div>
    );
};

export default ArtCard;
