import axios from 'axios';
import { common } from './common';
import { createSubscription } from './api_service';

export const refs = {
  emailInput: document.querySelector('.subscribe-input'),
  sendBtn: document.querySelector('.send-btn'),
};

refs.emailInput.addEventListener('change', onEmailEnter);

export function onEmailEnter(event) {
  //   event.preventDefault();

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
