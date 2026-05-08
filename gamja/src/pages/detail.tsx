import Header from "../components/common/header";
import { GoToEditButton } from "../components/commentPatch/goToEditButton";
import { useEffect, useState } from "react";
import Comment from "../components/chat/comment";
import GetComment from "../apis/get/postComment/index";
import { GetPost } from "../apis/get/post";
import type { Type as CommentType } from "../apis/get/postComment/type";
import type { Type as PostType } from "../apis/get/post/type";
import { useNavigate, useParams } from "react-router-dom";
import { postDelete } from "../apis/delete/index";
import { PostDetailComponents } from "../components/getDetail/postDetailComponents";

function Detail() {
  const [comment, setComment] = useState<CommentType[]>([]);
  const [post, setPost] = useState<PostType | null>(null);

  const navigate = useNavigate();

  const { postId } = useParams();
  const currentPostId = Number(postId);

  useEffect(() => {
    const getComment = async () => {
      try {
        const data = await GetComment(currentPostId);
        setComment(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getPost = async () => {
      try {
        const data = await GetPost(currentPostId);
        setPost(data);
      } catch (error) {
        console.log(error);
        navigate(-1);
      }
    };

    getComment();
    getPost();
  }, [currentPostId]);

  const handleDelete = async () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      try {
        await postDelete({ postId: currentPostId });
        navigate("/mypost");
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!post) {
    return <div>로딩 중</div>;
  }

  return (
    <>
      <Header />

      <PostDetailComponents {...post} />

      <GoToEditButton postId={currentPostId} />
      <button onClick={handleDelete}>삭제하기</button>
      {comment.map((comment, index) => {
        return <Comment {...comment} />;
      })}
    </>
  );
}

export default Detail;
