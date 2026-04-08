import styled from "styled-components";
import kakao from "../../../assets/Login/kakao.svg";
import naver from "../../../assets/Login/naver.svg";
import google from "../../../assets/Login/google.svg";
import {
  googleHandleLogin,
  kakaoHandleLogin,
  naverHandleLogin,
} from "../../../apis/user/loginUser/social/Location";

export const IconWrap = () => {
  return (
    <OtherLoginCon>
      <Icon>
        <img src={kakao} alt="" onClick={kakaoHandleLogin} />
      </Icon>
      <Icon>
        <img src={naver} alt="" onClick={naverHandleLogin} />
      </Icon>
      <Icon>
        <img src={google} alt="" onClick={googleHandleLogin} />
      </Icon>
    </OtherLoginCon>
  );
};

const OtherLoginCon = styled.div`
  display: flex;
`;
const Icon = styled.div`
  margin: 0px 5px;
  cursor: pointer;
`;
