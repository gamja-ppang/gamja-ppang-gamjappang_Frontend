import { api } from "../..";
import type { Type } from "./type";

const GetComment = async (postId: number): Promise<Type[]> => {
  try {
    const response = await api.get(`/api/v1/comment/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default GetComment;
