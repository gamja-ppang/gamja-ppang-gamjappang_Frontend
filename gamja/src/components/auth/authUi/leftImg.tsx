import styled from "styled-components";
import cat from "../../../assets/Login/cat.svg";

export const Img = () => {
  return (
    <ImgWrap>
      <img src={cat} alt="" />
    </ImgWrap>
  );
};

const ImgWrap = styled.div`
  width: 537px;
  height: 653px;
`;
