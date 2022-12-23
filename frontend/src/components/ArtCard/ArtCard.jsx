const ArtCard = ({ art }) => {
  console.log(art.preimage);

  if (art.rpath !== "")
    return (
      <div className="artcard--container rounded-md mb-6 sm:mb-8">
        <img
          src={art.tpath}
          alt={art.createdDate}
          className="rounded-md"
          loading="lazy"
          placeholder={art.preimage}
        />
        <div className="absolute"></div>
      </div>
    );
};

export default ArtCard;
