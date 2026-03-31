import styled from "styled-components";
import { Logout } from "../../apis/user/logout.tsx";

interface props {
  onClick: () => void;
}

export const LogoutButton = ({ onClick }: props) => {
  const handle = async () => {
    const token = localStorage.getItem("refreshToken") || "";
    await Logout({ refreshToken: token });
    onClick();
  };

  return (
    <>
      <Wrapper onClick={handle}>로그아웃</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 80px;
  height: 30px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  color: white;
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    color: #c2c2c2;
    background-color: #b90000;
  }
`;
