import axios from 'axios';
import { common } from './common';
import { createSubscription } from './api_service';

export const refs = {
  emailForm: document.querySelector('.subscribe-form'),
  sendBtn: document.querySelector('.send-btn'),
};

refs.emailInput.addEventListener('submit', onEmailEnter);

export function onEmailEnter(event) {
  event.preventDefault();

  const data = event.currentTarget;
  const email = data.value.trim();
  console.log(email);
  if (email !== '') {
    refs.sendBtn.addEventListener('click', onSendBtn);
  }
  //   event.currentTarget.reset();
}

export async function onSendBtn() {
  try {
    const result = await createSubscription(email);
    const status = result.status;
    console.log(status);
  } catch (error) {
    console.log(error.message);
  }
}
