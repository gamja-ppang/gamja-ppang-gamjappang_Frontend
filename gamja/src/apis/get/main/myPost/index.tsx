import { api } from "../../..";

export const MyPost = async () => {
  try {
    const response = await api.get(`/api/v1/me/posts`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
