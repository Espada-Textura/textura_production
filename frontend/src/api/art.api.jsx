import {
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import axios from "@/axios";

const fetchGallery = (page) => {
  return axios.get(`art-posts?page=${page}&perPage=30`);
};

const uploadArts = (data) => {
  return axios.post("art-posts/new", data);
};

/**
 * The function for fetching data infinitely using react-query's useInfiniteQuery hooks
 *
 */
export const useFetchGallery = () => {
  return useInfiniteQuery({
    queryKey: ["gallery"],
    queryFn: ({ pageParam = 1 }) => fetchGallery(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= lastPage.data.totalPages ? nextPage : undefined;
    },
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    staleTime: 150000,
    retry: 2,
  });
};

/**
 * Function for uploading the posts using useMutation hooks from react-query
 */
export const useUpload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["art-upload"],
    mutationFn: (data) => uploadArts(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
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

/**
 * export function for naming convention
 */
export const art = {
  useFetchGallery: useFetchGallery,
  useUpload: useUpload,
  login: login,
};
