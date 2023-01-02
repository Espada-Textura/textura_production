import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "@/axios";

const fetchGallery = () => {
  return axios.get("art-posts");
};

const uploadArts = (data) => {
  return axios.post("art-posts/new", data);
};

export const useFetchGallery = () => {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGallery,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: 150000,
  });
};

//upload method for uploading images
export const useUpload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["art-upload"],
    mutationFn: (data) => uploadArts(data),
    onMutate: async (newData) => {
      //cancel out the query before posting a new one
      await queryClient.cancelQueries(["gallery"]);

      //get the old data from the cache to prepare for errors
      const previousData = queryClient.getQueryData(["gallery"]);

      //optimistically updates the new value to the gallery
      queryClient.setQueryData(["gallery"], (old) => [...old, newData]);

      //return the prepared context for errors
      return { previousData };
    },

    //if error occured, use the context from above to rollback the query
    onError: (_err, _newData, context) => {
      queryClient.setQueryData(["gallery"], context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
    },
  });
};

export const login = () => {
  return useMutation({
    mutationKey: "login",
    mutationFn: () =>
      axios.post("login", {
        email: "misapisatto@gmail.com",
        password: "Misa5454",
      }),
  });
};

export const art = {
  useFetchGallery: useFetchGallery,
  useUpload: useUpload,
  login: login,
};
