import axiosClient from "./axios.client.js";

export const userSignUp = async ({
  username,
  password
}) => {
  try {
    const response = await axiosClient.post(
      "users/signup",
      { username, password }
    );

    return response;
  } catch (error) {
    return { error };
  }
};

export const userSignIn = async ({
  username,
  password
}) => {
  try {
    const response = await axiosClient.post(
      "users/signin",
      { username, password }
    );
    console.log(response);

    return response;
  } catch (error) {
    return { error };
  }
};

export const userCheckTkn = async () => {
  try {
    const response = await axiosClient.get("users/check-token");

    return { response };
  } catch (error) {
    return { error };
  }
}