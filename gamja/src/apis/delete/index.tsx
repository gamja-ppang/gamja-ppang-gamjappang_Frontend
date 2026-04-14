import { api } from "..";
import type { Type } from "./type";

export const postDelete = async ({ postId }: Type) => {
  try {
    const response = await api.delete(`/api/v1/post/${postId}`);

    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
