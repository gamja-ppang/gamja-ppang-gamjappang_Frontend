import type { Type } from "./type";
import { api } from "../..";

export const patchPost = async ({
  postId,
  title,
  content,
  tag,
}: Type) => {
  try {
    const response = await api.patch(`/api/v1/post/${postId}`, {
      title,
      content,
      tag,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
