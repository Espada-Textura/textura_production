

export const useAsyncFileRead = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
    reader.onerror = (error) => reject(error);
  });
