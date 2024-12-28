import { generateResponse } from './api-client.js';
import { CHATBOT_CONFIG } from './config.js';

export class ChatbotUI {
  constructor(rootElement) {
    if (!rootElement) throw new Error('Root element is required for ChatbotUI');
    
    this.chatContainer = document.createElement('div');
    this.chatContainer.className = 'chatbot-container';
    rootElement.appendChild(this.chatContainer);
    this.setupUI();
  }

  setupUI() {
    this.chatContainer.innerHTML = this.createTemplate();
    this.setupEventListeners();
  }

  createTemplate() {
    return `
      <div class="chatbot-header">
        <h3>Jewelry Assistant</h3>
        <button class="minimize-btn">−</button>
      </div>
      <div class="chat-messages"></div>
      <div class="chat-input-container">
        <input type="text" placeholder="Ask about our jewelry..." class="chat-input">
        <button class="send-btn">Send</button>
      </div>
    `;
  }

  setupEventListeners() {
    const input = this.chatContainer.querySelector('.chat-input');
    const sendBtn = this.chatContainer.querySelector('.send-btn');
    const minimizeBtn = this.chatContainer.querySelector('.minimize-btn');

    if (input && sendBtn) {
      sendBtn.addEventListener('click', () => this.handleSend());
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.handleSend();
      });
    }

    if (minimizeBtn) {
      minimizeBtn.addEventListener('click', () => this.toggleMinimize());
    }
  }

  async handleSend() {
    const input = this.chatContainer.querySelector('.chat-input');
    if (!input) return;

    const message = input.value.trim();
    if (!message) return;

    this.addMessage(message, 'user');
    input.value = '';

    const loadingMessage = this.addMessage('Typing...', 'bot');
    
    try {
      const response = await generateResponse(message, CHATBOT_CONFIG.context);
      if (loadingMessage) {
        loadingMessage.textContent = response;
      }
    } catch (error) {
      if (loadingMessage) {
        loadingMessage.textContent = "I'm sorry, I couldn't process your request. Please try again.";
      }
    }
  }

  addMessage(message, sender) {
    const messagesContainer = this.chatContainer.querySelector('.chat-messages');
    if (!messagesContainer) return null;

    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${sender}-message`;
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return messageElement;
  }

  toggleMinimize() {
    this.chatContainer.classList.toggle('minimized');
    const minimizeBtn = this.chatContainer.querySelector('.minimize-btn');
    if (minimizeBtn) {
      minimizeBtn.textContent = this.chatContainer.classList.contains('minimized') ? '+' : '−';
    }
  }
}