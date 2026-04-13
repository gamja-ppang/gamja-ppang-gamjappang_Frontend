import { api } from "..";

const Comment = async (postId: number) => {
  try {
    const response = await api.get(`/api/v1/comment/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default Comment;
