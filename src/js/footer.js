import * as EmailValidator from 'email-validator';
import iziToast from 'izitoast';
import '../../node_modules/izitoast/dist/css/iziToast.min.css';
import { createSubscription } from './api_service';
import { openModalFooter } from './modal';
import { refs } from './refs';
import { success, error } from './helpers/modalMarkups';

const renderFooter = () => {
  refs.emailForm.addEventListener('submit', onEmailEnter);
};

const onEmailEnter = event => {
  event.preventDefault();

  const email = refs.emailInput.value.trim();

  if (!EmailValidator.validate(email)) {
    iziToast.warning({
      title: 'Caution',
      message: 'Check your email address',
    });
    return;
  }
  onSendBtn(email);

  refs.emailForm.reset();
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
