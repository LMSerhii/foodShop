import { common } from './common';
import { refs } from './refs';
import { getData } from './api_service';
import { getDataId } from './api_service';
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
    displayProductDetails(evt);
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

document.addEventListener('DOMContentLoaded', function () {
  const modal = {
    openModal: document.querySelector('[data-modal-open]'),
    closeModal: document.querySelector('.modal__close'),
    dataModal: document.getElementById('productModal'), // Замініть 'productModal' на унікальний id
  };

  console.log('modal.dataModal:', modal.dataModal);

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
      modal.dataModal.classList.toggle('is-hidden');
    }
  }

  function handleBackdropClick(event) {
    if (
      event.target === modal.dataModal ||
      event.target.closest('[data-modal-close]')
    ) {
      modal.dataModal.classList.add('is-hidden');
      modal.dataModal.removeEventListener('click', handleBackdropClick);
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Escape' && modal.dataModal) {
      modal.dataModal.classList.add('is-hidden');
    }
  }

  const displayProductDetails = async evt => {
    console.log(
      'Clicked on product card:',
      evt.target.closest('.js-info').dataset
    );
    const { id } = evt.target.closest('.js-info').dataset;

    try {
      const data = await getDataId(id);
      console.log('Data from getDataId:', data);

      if (data) {
        const successContent = successModal(data);
        console.log('Success content:', successContent);

        // Видалено зайвий виклик функції
        modal.dataModal.innerHTML = successContent;
        modal.dataModal.classList.remove('is-hidden');
        modal.dataModal.addEventListener('click', handleBackdropClick);
      }

      save(common.PAGES, {
        page: data.page,
        perPage: data.perPage,
        totalPages: data.totalPages,
      });
    } catch (err) {
      console.error(err);
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
          <div class="card-top">
            <div class="card-img-wrapper">
              <img class="img-modal" src="${img}" alt="${name}" width="300" height="300" loading="lazy"/>
            </div>
            <h3 class="card-product-name">${name}</h3>
            <ul class="card-prodcuts-list">
              <li class="card-prodcuts-item">Category:
                <span>${category.replace('_', ' ')}</span>
              </li>
              <li class="card-prodcuts-item">Size:
                <span>${size}</span>
              </li>
              <li class="card-prodcuts-item">Popularity:
                <span>${popularity}</span>
              </li>
              <li class ="describtion">
                <p class="text-desc">${desc}</p>
              </li>
            </ul>
          </div>
          <div class="card-bottom">
            <p class="card-producs-price">$${price}</p>
            <button class="card-btn js-info" type="button">
              <svg class="card-btn-icon" width="18" height="18">
                <use href="${svg_sprite}#cart"></use>
              </svg>
            </button>
          </div>
        </li>
      </div>`;
      })
      .join(''); // Об'єднати рядки масиву в один рядок
  }

  // Додавання обробника подій на елемент з data-modal-open=""
  if (modal.dataModal) {
    modal.dataModal.addEventListener('click', handleOpenModal);
  }
});

// export { displayProductDetails };

export { renderProducts };
