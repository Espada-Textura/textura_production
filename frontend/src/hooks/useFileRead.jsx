// resp.then((resp) => {
//   resp = {
//     mime: file.files[0].type,
//     data: resp.replace("data:", "").replace(/^.+,/, ""),
//   };
// });

export const useAsyncFileRead = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });