import { useState } from "react";
import { verifyEmail } from "../../../apis/user/auth/index";

interface type {
  email: string;
}

export const InputCode = ({ email }: type) => {
  const [code, setCode] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean>(false);

  return (
    <>
      <input
        placeholder="인증코드를 입력하세요"
        onChange={(e) => setCode(e.target.value)}
      ></input>
      <button
        onClick={async () => {
          await verifyEmail({ email, signupCode: code });
          setIsVerified(true);
        }}
      >
        {isVerified ? "인증됨" : "확인"}
      </button>
    </>
  );
};
