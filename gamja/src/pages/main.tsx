import styled from "styled-components";
import Post from "../components/main/post";
import MainPageLayouts from "../layouts/mainPageLoyouts";

function Main() {
  return (
    <>
      <MainPageLayouts>
        <PostWrap>
          <Post />
          <Post />
        </PostWrap>
      </MainPageLayouts>
    </>
  );
}

export default Main;

const PostWrap = styled.div`
  display: flex;
  gap: 10px;
`;
