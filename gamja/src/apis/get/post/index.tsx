import { api } from "../..";

export const GetPost = async (postId: number) => {
  try {
    const response = await api.get(`/api/v1/post/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
