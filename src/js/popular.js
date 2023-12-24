import axios from 'axios';
// import { common } from './common';
import { getPopular } from './api_service';

import { getDataId } from './api_service';
import svg_sprite from '../img/sprite.svg';
import { save, load } from './storage';

const refs = {
  popularProductList: document.querySelector('.popular-products'),
};

const popularProductList = document.querySelector('.popular_products_list');
console.dir(popularProductList);

popularProductList.addEventListener('click', onPopularList);

// getPopular();

render();

async function render() {
  const results = await getPopular();

  if (!results) {
    return;
  }

  const markup = createMarkup(results);

  popularProductList.insertAdjacentHTML('beforeend', markup);
}

function createMarkup(arrey) {
  if (!arrey.length) {
    console.log('Sorry not data');
    return;
  }
  return arrey
    .map(({ _id, name, img, category, size, popularity }) => {
      return `<li class="popular-card js-card" data-id=${_id}>
                    <div class="popular-box">
                      <div class="popular-card-img-wrap">
                          <img src="${img}" alt="${name}" width="56" height="56" loading="lazy"/>
                      </div>
                      <div class="card-info-box">
                      
                        <h3 class="popular-name">${name}</h3>
                      
                      <ul class="popular-info-list">
                          <li class="info-style">Category:
                          <span>${category.replace('_', ' ')}</span></li>
                          <div class="popular-info-wraper">
                          <li class="info-style">Size: <span>${size}</span></li>
                          <li class="info-style">Popularity: <span>${popularity}</span></li>
                      </ul>
                      </div>
                    </div>

                    <div class="card-bottom">
                      
                      <button class="card-btn js-cart" type="button">
                          <svg class="icon" width="18" height="18">
                              <use href="${svg_sprite}#cart"></use>
                          </svg>
                      </button>
                    </div>
                </li>`;
    })
    .join('');
}

function onPopularList(event) {
  event.preventDefault();

  if (event.target.closest('.js-cart')) {
    addToCard(event);
  }

  if (event.target.classList.contains('js-info')) {
    const { id } = event.target.closest('.js-card').dataset;
    console.log(id);
  }
}

async function addToCard(event) {
  const { id } = event.target.closest('.js-card').dataset;

  console.log(event.target.closest('.js-card'));
  console.log({ id });

  event.target.closest(
    '.js-cart'
  ).innerHTML = `<button class="btn-check" type="button">
  <svg class="icon-check" width="18" height="18">
                              <use href="${svg_sprite}#check"></use>
                          </svg>
                          </button>`;
  console.dir(event.target);
}

console.dir();

// <div class="product-card" id="productCard">
//   <img src="зображення.jpg" alt="Зображення продукту">
//   <h2>Назва продукту</h2>
//   <p>Категорія: <span id="category">Категорія продукту</span></p>
//   <p>Розмір пакування: <span id="packageSize">Розмір</span></p>
//   <p>Популярність: <span id="popularity">Показник популярності</span></p>
//   <button id="addToCartButton" onclick="addToCart()">Додати до кошика</button>
// </div>

// Функція для додавання продукту до кошика
// function addToLocalStorage() {
//   // Отримуємо інформацію про продукт
//   const productName = document.querySelector('.popular-name').textContent;
//   console.log(productName);
//   // var productCategory = document.querySelector('#category').textContent;
//   // var productSize = document.querySelector('#packageSize').textContent;

//     // Перевіряємо, чи вже є продукт у кошику
//     var cart = JSON.parse(localStorage.getItem('cart')) || [];
//     var isProductInCart = cart.some(function(item) {
//       return item.name === productName && item.category === productCategory && item.size === productSize;
//     });

//     if (!isProductInCart) {
//       // Додаємо продукт до кошика
//       var product = {
//         name: productName,
//         category: productCategory,
//         size: productSize
//       };
//       cart.push(product);

//       // Оновлюємо інформацію у localStorage
//       localStorage.setItem('cart', JSON.stringify(cart));

//       // Змінюємо кнопку на ✓, щоб вказати, що продукт додано
//       document.querySelector('#addToCartButton').innerHTML = '✓ Додано до кошика';
//       document.querySelector('#addToCartButton').disabled = true; // Деактивуємо кнопку
//     }
// }
