import styled from "styled-components";
import MainPageLayouts from "../layouts/mainPageLoyouts";
import { LikeComment } from "../components/user/likeComment";
import type { Type } from "../apis/get/main/likePost/type";
import { useEffect, useState } from "react";
import { LikePost } from "../apis/get/main/likePost";

const MainLikePost = () => {
  const [posts, setPosts] = useState<Type[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await LikePost();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, []);

  if (loading === true) return <div>로딩중</div>;

  return (
    <>
      <MainPageLayouts>
        <PostWrap>
          {posts.map((post) => {
            return (
              <LikeComment
                key={post.id}
                name={post.author.name}
                title={post.title}
                likeCount={post.likeCount}
                createdAt={post.createdAt}
              />
            );
          })}
        </PostWrap>
      </MainPageLayouts>
    </>
  );
};

export default MainLikePost;

const PostWrap = styled.div`
  display: flex;
  gap: 10px;
`;
