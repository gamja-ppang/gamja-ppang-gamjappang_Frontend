import api from "../..";

interface auth {
  email: string;
  signupCode?: string;
}

export const sendEmail = async ({ email }: auth) => {
  try {
    const response = await api.post(`/api/v1/auth/code/send`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const verifyEmail = async ({ email, signupCode }: auth) => {
  try {
    const response = await api.post(`/api/v1/auth/code/verify`, {
      email,
      signupCode,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
