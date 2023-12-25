import { getDataId } from '../api_service';
import { refs } from '../refs';

const modal = {
  openModal: document.querySelector('[data-modal-open]'),
  closeModal: document.querySelector('.modal__close'),
  dataModal: document.querySelector('[data-modal]'),
};

// modal.closeModal.addEventListener('click', handleClick);
modal.openModal.addEventListener('click', handleClick);
modal.dataModal.addEventListener('click', handleBackdropClick);
window.addEventListener('keydown', handleKeyPress);

function handleClick() {
  modal.dataModal.classList.toggle('is-hidden');
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

const openModal = async evt => {
  const { id } = evt.target.closest('.js-card').dataset;

  try {
    const data = await getDataId(id);

    if (response === true) {
      const successContent = successModal();
      openModal(successContent);
    } else if (response === false) {
      const errorContent = errorModal();
      openModal(errorContent);
    } else {
      console.log('Не виконано', response);
    }
  } catch (err) {
    console.error(err);
  }

  save(common.PAGES, {
    page: data.page,
    perPage: data.perPage,
    totalPages: data.totalPages,
  });
  modal.dataModal.innerHTML = content;
  modal.dataModal.classList.remove('is-hidden');
};

// function modalProductMarkup(arrey) {
//   return arrey.map(
//     ({ _id, name, img, category, price, size, popularity, desc }) => {
//       `<li class="card js-card" data-id=${_id}>
//             <div class="card-top">

//               <div class="card-img-wrapper">
//                   <img src="${img}" alt="${name}" width="140" height="140" loading="lazy"/>
//               </div>

//               <h3 class="card-product-name">${name}</h3>

//               <ul class="card-prodcuts-list">
//                   <li class="card-prodcuts-item">Category:
//                     <span>${category.replace('_', ' ')}</span>
//                   </li>
//                   <li class="card-prodcuts-item">Size:
//                     <span>${size}</span>
//                   </li>
//                   <li class="card-prodcuts-item">Popularity:
//                     <span>${popularity}</span>
//                   </li>
//                   <li class ="describtion">
//                    <p class="text-desc">${desc}</p>
//                   </li>
//               </ul>

//             </div>

//             <div class="card-bottom">
//               <p class="card-producs-price">$${price}</p>

//               <button class="card-btn js-cart" type="button">

//                   <svg class="card-btn-icon" width="18" height="18">
//                       <use href="${svg_sprite}#cart"></use>
//                   </svg>

//               </button>

//             </div>
//         </li>`;
//     }
//   );
// }

function successModal() {
  return `<div class="modal-box">
  <button class="modal-close" type="button" data-modal-close>
    <svg class="modal-icon" width="22" height="22">
      <use href="./img/sprite.svg#close"></use>
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
  return `<div class="modal__box">
  <button class="modal__close" type="button" data-modal-close>
    <svg class="modal__icon" width="22" height="22">
      <use href="./img/sprite.svg#close"></use>
    </svg>
  </button>
  <div class="modal-text-box">
  <p class="subscription-thanks">
  This <span class="subscription-accent">email address</span> has already been entered
  </p>
  <p class="subscription-promise">
  You have already subscribed to our new products. Watch for offers at the mailing address.
  </p>`;
}

export { openModal };

// // import {onSendBtn} from './footer';
// import { refs } from './refs';

// const modal = {
//   openModal: document.querySelector('[data-modal-open]'),
//   closeModal: document.querySelector('.modal__close'),
//   dataModal: document.querySelector('[data-modal]'),
// };

// // modal.closeModal.addEventListener('click', handleClick);
// modal.openModal.addEventListener('click', handleClick);
// modal.dataModal.addEventListener('click', handleBackdropClick);
// window.addEventListener('keydown', handleKeyPress);

// function handleClick() {
//   modal.dataModal.classList.toggle('is-hidden');
// }

// function handleBackdropClick(event) {
//   if (event.target === modal.dataModal) {
//     modal.dataModal.classList.add('is-hidden');
//   }
// }
// function handleKeyPress(event) {
//   if (event.key === 'Escape') {
//     modal.dataModal.classList.add('is-hidden');
//   }
// }

// // async function createSubscription() {
// //   const isAlreadySubscribed = true;
// //   return isAlreadySubscribed;
// // }

// async function createMarkup() {
//   try {
//     const response = await createSubscription();
//     if (response === true) {
//       const successContent = successModal();
//       openModal(successContent);
//     } else if (response === false) {
//       const errorContent = errorModal();
//       openModal(errorContent);
//     } else {
//       console.log('Не виконано', response);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }
// function openModal(content) {
//   modal.dataModal.innerHTML = content;
//   modal.dataModal.classList.remove('is-hidden');
// }
// createMarkup();

// function successModal() {
//   return `<div class="modal-box">
//   <button class="modal-close" type="button" data-modal-close>
//     <svg class="modal-icon" width="22" height="22">
//       <use href="./img/sprite.svg#close"></use>
//     </svg>
//   </button>
//   <div class="modal-text-box">
//       <p class="subscription-thanks">
//         Thanks for subscribing for
//         <span class="subscription-accent">new</span> products
//       </p>
//       <p class="subscription-promise">
//         We promise you organic and high-quality products that will meet your
//         expectations. Please stay with us and we promise you many pleasant
//         surprises.
//       </p>
//     <img
//       class="modal-image"
//       srcset="../img/subscribing@1x.png 1x, ../img/subscribing@2x.png 2x"
//       src="../img/subscribing@1x.png"
//       alt="basket of fresh vegetables"
//       width="490"
//     />
//   </div>
// </div>
// `;
// }

// function errorModal() {
//   return `<div class="modal__box">
//   <button class="modal__close" type="button" data-modal-close>
//     <svg class="modal__icon" width="22" height="22">
//       <use href="./img/sprite.svg#close"></use>
//     </svg>
//   </button>
//   <div class="modal-text-box">
//   <p class="subscription-thanks">
//   This <span class="subscription-accent">email address</span> has already been entered
//   </p>
//   <p class="subscription-promise">
//   You have already subscribed to our new products. Watch for offers at the mailing address.
//   </p>`;
// }
