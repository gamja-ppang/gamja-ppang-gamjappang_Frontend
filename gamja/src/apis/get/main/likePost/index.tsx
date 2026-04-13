import { api } from "../../..";

export const LikePost = async () => {
  try {
    const response = await api.get(`/api/v1/me/liked-posts`);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
