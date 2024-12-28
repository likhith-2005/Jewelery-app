import OpenAI from 'openai';
import { CHATBOT_CONFIG } from './constants.js';
import { handleApiError } from './errors.js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateResponse(message) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: CHATBOT_CONFIG.context },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 150
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating response:', error);
    return handleApiError(error);
  }
}