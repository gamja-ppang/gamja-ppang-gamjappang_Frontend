import { api } from "../../..";

export const MyPost = async () => {
  try {
    const response = await api.get(`/api/v1/me/posts`);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
