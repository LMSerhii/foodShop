import svg_sprite from '/img/sprite.svg';

const dataModal = document.querySelector('[data-modal]');

const ERROR_MODAL = `<div class="modal-box" data-modal-backdrop>
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

const SUCCESS_MODAL = `<div class="modal-box" data-modal-backdrop>
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
    </div>`;

function onStopPropagation(event) {
  event.stopPropagation();
}

function handleKeyPress(event) {
  if (event.key === 'Escape') removeModal();
}

function removeModal() {
  dataModal.innerHTML = '';
  dataModal.classList.add('is-hidden');
  window.removeEventListener('keydown', handleKeyPress);
  dataModal.removeEventListener('click', removeModal);
}

function creatModal(el) {
  dataModal.insertAdjacentHTML('beforeend', el);
  dataModal.classList.remove('is-hidden');
  const closeModal = dataModal.querySelector('[data-modal-close]');
  const backdrop = dataModal.querySelector('[data-modal-backdrop]');
  window.addEventListener('keydown', handleKeyPress);
  closeModal.addEventListener('click', removeModal);
  dataModal.addEventListener('click', removeModal);
  backdrop.addEventListener('click', onStopPropagation);
}

export function openSuccessModal() {
  creatModal(SUCCESS_MODAL);
}

export function openErrorModal() {
  creatModal(ERROR_MODAL);
}
