import { useMutation } from "@tanstack/react-query";
import axios from "@/axios";

/**
 * Function for uploading the posts using useMutation hooks from react-query
 */
export const login = () => {
  return useMutation({
    mutationKey: "login",
    mutationFn: (form) =>
      axios.post("login", {
        email: form.email,
        password: form.password,
      }),
  });
};

/**
 * export function for naming convention
 */
export const auth = {
  login: login,
};
