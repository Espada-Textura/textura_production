export const useHandleSubmit = (fieldsData, imagesData) => {
  const data = {
    title: fieldsData.title,
    arts: [],
  };

  fieldsData.desc = fieldsData.desc.filter(
    (element, _index) => element !== undefined
  );
  imagesData = imagesData.filter((element) => element !== undefined);

  imagesData.map((image, index) => {
    data.arts.push({
      desc: fieldsData.desc[index],
      index: index,
      image: {
        mime: image.substring(
          image.lastIndexOf(":") + 1,
          image.lastIndexOf(";")
        ),
        data: image.substring(image.lastIndexOf("base64,") + 7),
      },
    });
  });

  return data;
};
