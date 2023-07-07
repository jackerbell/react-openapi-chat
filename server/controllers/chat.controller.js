import { Configuration, OpenAIApi } from "openai";
import { AsyncLocalStorage } from "async_hooks";

const openAIConfig = new Configuration({
  apiKey: process.env.OPENAPI_KEY
});

const openapi = new OpenAIApi(openAIConfig);

export const chatCompletion = async (req,res) => {
  try {
    const { prompt } = req.body;
    const answer = await openapi.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 3000,
    });
    
    const text = answer.data.choices[0].text;

    res.status(200).json({ text })
  } catch (error) {
    res.status(500).json({
      message:err.message
    })
  }
}

