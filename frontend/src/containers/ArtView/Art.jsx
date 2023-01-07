const Art = ({ art }) => {
  return (
    <div className="artview--art-container top-16 relative w-full overflow-y-scroll h-full  p-4 bg-secondary-10">
      {art?.arts?.map((image) => (
        <img
          key={image.aid}
          src={image.rpath}
          alt={image.desc}
          className={"object-contain w-screen lg:h-full"}
        />
      ))}
    </div>
  );
};

export default Art;
