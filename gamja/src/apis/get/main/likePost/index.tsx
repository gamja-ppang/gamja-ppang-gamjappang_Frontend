import { api } from "../../..";

export const LikePost = async () => {
  try {
    const response = await api.get(`/api/v1/me/liked-posts`);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
