import { createSubscription } from './api_service';

import { refs } from './refs';

const renderFooter = () => {
  refs.emailForm.addEventListener('submit', onEmailEnter);
};

async function onEmailEnter(event) {
  event.preventDefault();

  const email = refs.emailInput.value.trim();
  if (!email) {
    return;
  }
  const result = await onSendBtn(email);
}

async function onSendBtn(email) {
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
