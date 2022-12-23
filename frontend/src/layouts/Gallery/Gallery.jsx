import Art from "@/components/ArtCard";

const Gallery = ({ infos }) => {
  console.log(infos);

  return (
    <div className="gallery--container columns-4 p-6 sm:p-8">
      {infos.map((info) => (
        <Art art={info.arts[0]} key={info.arts[0].id} />
      ))}
    </div>
  );
};

export default Gallery;
