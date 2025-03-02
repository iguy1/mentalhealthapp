import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default async function handler(req, res) {
  const { prompt } = req.body;
  try {
    const result = await model.generateContent(prompt);
    const text = await result.response.text();
    res.status(200).json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch from Gemini.' });
  }
}
