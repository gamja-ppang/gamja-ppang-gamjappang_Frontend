import styled from "styled-components";
import type { Type } from "../../apis/get/post/type";

export const PostDetailComponents = ({
  title,
  author,
  createdAt,
  content,
}: Type) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <TitleBottom>
        <ProfileWrap>
          <Profile></Profile>
          <Name>{author.authorName}</Name>
        </ProfileWrap>

        <Date>{createdAt}</Date>
      </TitleBottom>

      <Line style={{}}></Line>

      <Text>{content}</Text>
    </Wrap>
  );
};

const Date = styled.div``;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Text = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: start;
  width: 900px;
`;

const TitleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  margin: 20px 0px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  width: 937px;
  border: none;
  display: flex;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid gray;
  width: 937px;
`;

const Profile = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
  border-radius: 100%;
`;

const Name = styled.p`
  font-size: 16px;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 10px 0px;
`;
