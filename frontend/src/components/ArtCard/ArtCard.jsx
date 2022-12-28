// const useGetArt = (id) => ArtApi.get(id);

import { useState } from "react";
import { Blurhash } from "react-blurhash";

const ArtCard = ({ art, title }) => {
  // const { data } = useQuery({
  //   queryKey: ["art"],
  //   // queryFn: useGetArt,
  // });

  const [isLoaded, setLoad] = useState(false);

  if (art.rpath !== "" && art.preimage !== "")
    return (
      <div className="artcard--container relative rounded-md mb-6 sm:mb-6">
        <img
          src={art.tpath}
          alt={title}
          className={"rounded-md " + isLoaded ? "visible" : "invisible"}
          loading="lazy"
          onLoad={() => setLoad(true)}
        />

        {!isLoaded && (
          <Blurhash
            hash={art.preimage}
            resolutionX={128}
            resolutionY={128}
            punch={1}
            className={"artcard--blurhash"}
            style={{
              width: "100%",
              height: "100%",
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
