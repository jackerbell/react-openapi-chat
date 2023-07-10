import axiosClient from "./axios.client";

export const chatCompletion = async ({ prompt }) => {
  try {
    const response = axiosClient.post("cahts",{ prompt });

    return { response };
  } catch (error) {
    return { error };
  }
}