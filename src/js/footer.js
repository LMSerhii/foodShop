import { createSubscription } from './api_service';
import { openModalFooter } from './modal';
import { refs } from './refs';
import { success, error } from './helpers/madalMarkups';

const renderFooter = () => {
  refs.emailForm.addEventListener('submit', onEmailEnter);
};

const onEmailEnter = event => {
  event.preventDefault();

  const email = refs.emailInput.value.trim();
  if (!email) {
    return;
  }
  onSendBtn(email);
};

async function onSendBtn(email) {
  const result = await createSubscription(email);
  switch (result) {
    case 201:
      openModalFooter(refs.emailForm, success);
      break;
    case 409:
      openModalFooter(refs.emailForm, error);
      break;

    default:
      break;
  }
  return result;
}

export { renderFooter };
