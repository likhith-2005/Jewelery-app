// Error messages and handling
export const ERROR_MESSAGES = {
  API_QUOTA: "I apologize, but I'm temporarily unavailable. Please try again later or contact our support team for immediate assistance.",
  GENERAL: "I apologize, but I'm having trouble responding right now. Please try again later.",
};

export function handleApiError(error) {
  if (error.error?.type === 'insufficient_quota') {
    return ERROR_MESSAGES.API_QUOTA;
  }
  return ERROR_MESSAGES.GENERAL;
}