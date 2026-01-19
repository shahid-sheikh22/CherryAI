import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",   // ✅ WORKING MODEL
});

async function runChat(prompt) {
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  console.log("Gemini response:", text);
  return text;
}

export default runChat;
