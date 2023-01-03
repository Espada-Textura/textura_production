import {
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import axios from "@/axios";

const fetchGallery = (page) => {
  return axios.get(`art-posts?per_page=30&page=${page}`);
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
      const maxPages = lastPage.data.totalPages;
      const nextPage = allPages.length + 1;
      return nextPage <= maxPages ? nextPage : undefined;
    },
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    staleTime: 150000,
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
      queryClient.refetchQueries({ queryKey: ["gallery"] });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      queryClient.refetchQueries({ queryKey: ["gallery"] });
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
