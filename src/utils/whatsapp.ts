import { WHATSAPP_NUMBER, WHATSAPP_BASE_URL } from '../constants';

export const createWhatsAppUrl = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `${WHATSAPP_BASE_URL}/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};