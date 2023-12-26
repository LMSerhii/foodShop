import svg_sprite from './img/sprite.svg'; 
import{onSendBTn} from './footer';

function modalFunction() {
  const modal = {
    openModal: document.querySelector('[data-modal-open]'),
    closeModal: document.querySelector('[data-modal-close]'),
    dataModal: document.querySelector('[data-modal]'),
  };

  modal.closeModal.addEventListener('click', handleClick);
  modal.openModal.addEventListener('click', handleClick);
  modal.dataModal.addEventListener('click', handleBackdropClick);
  window.addEventListener('keydown', handleKeyPress);

  function handleClick() {
    modal.dataModal.classList.remove('is-hidden');
  }

  function handleBackdropClick(event) {
    if (event.target === modal.dataModal) {
      modal.dataModal.classList.add('is-hidden');
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Escape') {
      modal.dataModal.classList.add('is-hidden');
    }
  }
}

function createModalHTML(result) {
  const sendResult = onSendBTn(email); 

  if (sendResult) {
    return successModal();
  } else {
    return errorModal();
  }
}

  
  function successModal() {
    return `<div class="modal-box">
    <button class="modal-close" type="button" data-modal-close>
      <svg class="modal-icon" width="22" height="22">
        <use href="${svg_sprite}#close"></use>
      </svg>
    </button>
    <div class="modal-text-box">
        <p class="subscription-thanks">
          Thanks for subscribing for
          <span class="subscription-accent">new</span> products
        </p>
        <p class="subscription-promise">
          We promise you organic and high-quality products that will meet your
          expectations. Please stay with us and we promise you many pleasant
          surprises.
        </p>
      <img
        class="modal-image"
        srcset="../img/subscribing@1x.png 1x, ../img/subscribing@2x.png 2x"
        src="../img/subscribing@1x.png"
        alt="basket of fresh vegetables"
        width="490"
      />
    </div>
  </div>
  `;
  }
  
  function errorModal() {
    return `<div class="modal-box">
    <button class="modal-close" type="button" data-modal-close>
      <svg class="modal-icon" width="22" height="22">
        <use href="${svg_sprite}#close"></use>
      </svg>
    </button>
    <div class="modal-text-box">
    <p class="subscription-thanks">
    This <span class="subscription-accent">email address</span> has already been entered
    </p>
    <p class="subscription-promise">
    You have already subscribed to our new products. Watch for offers at the mailing address.
    </p>
    </div>
  </div>`;
  }

  modalFunction();
  