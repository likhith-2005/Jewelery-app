// Main entry point
import { initializeChatbot } from './chatbot/index.js';
import { initializeUserInterface } from './user/interface.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeChatbot();
  initializeUserInterface();
});