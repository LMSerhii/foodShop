import { getDataId } from '../api_service';
import { refs } from '../refs';

// Функція для відображення модального вікна
// function showModal(modalId) {
//   var modal = document.getElementById(modalId);
//   modal.style.display = 'block';
// }

// // Функція для закриття модального вікна
// function closeModal(modalId) {
//   var modal = document.getElementById(modalId);
//   modal.style.display = 'none';
// }

// // Закриття модального вікна при кліку поза ним
// window.onclick = function (event) {
//   var modals = document.getElementsByClassName('modal');
//   for (var i = 0; i < modals.length; i++) {
//     var modal = modals[i];
//     if (event.target == modal) {
//       modal.style.display = 'none';
//     }
//   }
// };

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

// const openModal = async evt => {
//   const { id } = evt.target.closest('.js-card').dataset;

//   try {
//     const data = await getDataId(id);

//     if (data === true) {
//       const successContent = successModal(data);
//       openModal(successContent);
//     }

//     save(common.PAGES, {
//       page: data.page,
//       perPage: data.perPage,
//       totalPages: data.totalPages,
//     });
//     modal.dataModal.innerHTML = successContent;
//     modal.dataModal.classList.remove('is-hidden');
//   } catch (err) {
//     console.error(err);
//   }
// };

// function successModal(arrey) {
//   return arrey.map(
//     ({ _id, name, img, category, price, size, popularity, desc }) => {
//       return `<div class="modal-box">
//   <button class="modal-close" type="button" data-modal-close>
//     <svg class="modal-icon" width="22" height="22">
//       <use href="./img/sprite.svg#close"></use>
//     </svg>
//   </button>
//   </div>
//   <div class="modal-text-box">
//   <li class="card js-card" data-id=${_id}>
//             <div class="card-top">

//               <div class="card-img-wrapper">
//                   <img class="img-modal" src="${img}" alt="${name}" width="300" height="300" loading="lazy"/>
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
//                     <p class="text-desc">${desc}</p>
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
//               </li>
//               </div>`;
//     }
//   );
// }

export { openModal };
