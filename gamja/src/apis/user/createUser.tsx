import api from "..";

interface userCreate {
  username: string;
  email: string;
  password: string;
}

const CreateUser = async ({ username, email, password }: userCreate) => {
  try {
    const response = await api.post(`/api/v1/auth/join`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default CreateUser;
