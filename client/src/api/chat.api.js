import axiosClient from "./axios.client";

export const chatCompletion = async ({ prompt }) => {
  try {
    const response = axiosClient.post("chats", { prompt });

    return { response };
  } catch (error) {
    return { error };
  }
}