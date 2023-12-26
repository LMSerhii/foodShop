import { common } from './common';
import { refs } from './refs';
import { getData, getDataId } from './api_service';

import { save, load } from './storage';
import { addToCart } from './helpers/addToCart';
import { productMarkup, notFoundMarkup } from './markupFunctions';

const renderProducts = async query => {
  const data = await getData(query);

  if (!data.results.length) {
    notFoundMarkup(refs.productList);
    return;
  }

  save(common.PAGES, {
    page: data.page,
    perPage: data.perPage,
    totalPages: data.totalPages,
  });

  refs.productList.innerHTML = productMarkup(data.results);
};

const onProductList = evt => {
  evt.preventDefault();

  if (evt.target.closest('.js-cart')) {
    addToCart(evt);
  }

  if (evt.target.classList.contains('js-info')) {
    displayProductDetails;
  }
};

refs.productList.addEventListener('click', onProductList);

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
console.trace();
const divModal = document.querySelector('.modal');
console.dir(divModal);
document.addEventListener('DOMContentLoaded', function () {
  const modal = {
    openModal: document.querySelector('[data-modal-open]'),
    closeModal: document.querySelector('.modal__close'),
    dataModal: document.getElementById('productModal'),
  };

  // Перевірка наявності елементів перед додаванням обробників подій
  if (modal.openModal) {
    modal.openModal.addEventListener('click', handleOpenModal);
  }

  if (modal.dataModal) {
    modal.dataModal.addEventListener('click', handleBackdropClick);
  }

  window.addEventListener('keydown', handleKeyPress);

  function handleOpenModal() {
    if (modal.dataModal) {
      // modal.dataModal.classList.remove('is-hidden');
      modal.style.display = 'block';
    }
  }

  function handleBackdropClick(event) {
    if (
      event.target === modal.dataModal ||
      event.target.closest('[data-modal-close]')
    ) {
      modal.dataModal.classList.add('is-hidden');
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Escape' && modal.dataModal) {
      modal.dataModal.classList.add('is-hidden');
    }
  }

  const displayProductDetails = async evt => {
    if (evt && evt.target) {
      const closestInfo = evt.target.closest('.js-info');

      if (closestInfo) {
        const { id } = closestInfo.dataset;

        try {
          const data = await getDataId(id);

          if (data) {
            const successContent = successModal(data);
            divModal.innerHTML = successContent;
            modal.dataModal.classList.remove('is-hidden');
          }

          save(common.PAGES, {
            page: data.page,
            perPage: data.perPage,
            totalPages: data.totalPages,
          });
        } catch (err) {
          console.error(err);
        }
      } else {
        console.error('.js-info not found in the ancestor elements.');
      }
    }
  };

  function successModal(array) {
    return array
      .map(({ _id, name, img, category, price, size, popularity, desc }) => {
        return `
        <button class="modal-close" type="button" data-modal-close>
          <svg class="modal-icon" width="22" height="22">
            <use href="./img/sprite.svg#close"></use>
          </svg>
        </button>

        <div>
          <li class="card js-info" data-id=${_id}>
            <!-- Видаліть id="productModal" звідси -->
            <div class="card-top">
              <!-- Залиште решту коду незміненою -->
            </div>
            <div class="card-bottom">
              <!-- Залиште решту коду незміненою -->
            </div>
          </li>
        </div>`;
      })
      .join('');
  }

  // Додавання обробника подій на елемент з data-modal-open=""
  if (modal.dataModal) {
    modal.dataModal.addEventListener('click', handleOpenModal);
  }
});

export { renderProducts };
