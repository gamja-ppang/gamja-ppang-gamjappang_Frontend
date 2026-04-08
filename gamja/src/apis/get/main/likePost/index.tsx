import { api } from "../../..";
import type { Type } from "./type";

export const LikePost = async () => {
  try {
    const response = await api.get<Type>(`/api/v1/me/liked-posts`);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
