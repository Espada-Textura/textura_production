import {
  useMutation,
  useQueryClient,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import axios from "@/axios";

const fetchGallery = (page) => {
  return axios.get(`art-posts?page=${page}&perPage=30`);
};

const fetchPost = (pid) => {
  return axios.get(`art-posts/${pid}`);
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
    queryFn: async ({ pageParam = 1 }) => await fetchGallery(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= lastPage.data.totalPages ? nextPage : undefined;
    },
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    staleTime: 150000,
  });
};

export const useFetchPost = (pid) => {
  return useQuery({
    queryKey: ["post", pid],
    queryFn: async ({ queryKey }) => await fetchPost(queryKey[1]),
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

/**
 * Function for uploading the posts using useMutation hooks from react-query
 */
export const useUpload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["art-upload"],
    mutationFn: async (data) => await uploadArts(data),
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
  useFetchPost: useFetchPost,
  useUpload: useUpload,
  login: login,
};
