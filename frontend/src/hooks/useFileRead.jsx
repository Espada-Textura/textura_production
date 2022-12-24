// resp.then((resp) => {
//   resp = {
//     mime: file.files[0].type,
//     data: resp.replace("data:", "").replace(/^.+,/, ""),
//   };
// });

export const useAsyncFileRead = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
    reader.onerror = (error) => reject(error);
  });
