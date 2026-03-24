import api from "../..";

const sendEmail = async (email: string) => {
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

export default sendEmail;
