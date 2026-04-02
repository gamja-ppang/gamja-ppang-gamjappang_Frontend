import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../apis/index";

export const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");

    const loginTask = async () => {
      try {
        const response: any = await api.post(`/api/v1/auth/social`, {
          provider: "google",
          authorizationCode: code,
          redirectUri: import.meta.env.VITE_REDIRECT_URI,
        });

        const { accessToken, refreshToken } = response;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        navigate("/main");
      } catch (error) {
        console.log(error);
        throw error;
      }
    };

    loginTask();
  }, []);
  return <>Loading....</>;
};
