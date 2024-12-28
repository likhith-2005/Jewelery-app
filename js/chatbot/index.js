import { ChatbotUI } from './ui.js';
import { CHATBOT_CONFIG } from './config.js';

export function initializeChatbot() {
  const chatbotRoot = document.getElementById('chatbot-root');
  if (chatbotRoot) {
    const chatbot = new ChatbotUI(chatbotRoot);
    chatbot.addMessage(CHATBOT_CONFIG.initialMessage, 'bot');
  }
}