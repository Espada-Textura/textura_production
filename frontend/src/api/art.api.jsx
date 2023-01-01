import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchGallery = () => {
  return axios.get("art-posts");
};

const uploadArts = (data) => {
  return axios.post("art-posts/new", data);
};

const ArtApi = axios.create({
  baseURL: "https://web.textura-art.com/api",
});

export const useFetchGallery = () => {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGallery,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: 150000,
  });
};

//upload method for uploading images
export const useUpload = (data) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["art-upload"],
    mutationFn: uploadArts(data),
    onMutate: async (newData) => {
      //cancel out the query before posting a new one
      await queryClient.cancelQueries(["gallery"]);

      //get the old data from the cache to prepare for errors
      const previousData = queryClient.getQueryData(["gallery"]);

      //optimistically updates the new value to the gallery
      queryClient.setQueryData(["gallery"], newData);

      //return the prepared context for errors
      return { previousData };
    },

    //if error occured, use the context from above to rollback the query
    onError: (_err, _newData, context) => {
      queryClient.setQueryData(["gallery"], context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQuery(["gallery"]);
    },
  });
};
export default ArtApi;
