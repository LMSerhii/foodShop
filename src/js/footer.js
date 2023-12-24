import { createSubscription } from './api_service';

export const refs = {
  emailForm: document.querySelector('.subscribe-form'),
  emailInput: document.querySelector('.subscribe-input'),
  sendBtn: document.querySelector('.send-btn'),
};

refs.emailForm.addEventListener('submit', onEmailEnter);

export async function onEmailEnter(event) {
  event.preventDefault();

  const email = refs.emailInput.value.trim();
  if (!email) {
    return;
  }
  const result = await onSendBtn(email);
}

export async function onSendBtn(email) {
  const result = await createSubscription(email);
  switch (result) {
    case 201:
      return true;
    case 409:
      return false;

    default:
      break;
  }
  return result;
}
