import { useUpload } from "@/api";

// resp.then((resp) => {
//   resp = {
//     mime: file.files[0].type,
//     data: resp.replace("data:", "").replace(/^.+,/, ""),
//   };
// });

export const useHandleSubmit = (fieldsData, imagesData) => {
  console.log(
    fieldsData.desc.filter((element, _index) => element !== undefined)
  );

  console.log(imagesData.filter((element) => element !== undefined));
};
