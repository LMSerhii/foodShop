import axios from 'axios';
import svg_sprite from '../css/images/sprite.svg';
import empty_basket from '../css/images/yellow shopping basket.png';

const BASE_URL = 'https://food-boutique.b.goit.study/api';


async function fetchData(params) {
  try {
    const response = await axios({
      url: `${BASE_URL}/products`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}

async function init() {
  const productList = document.querySelector('.product-list');
  const deleteAllButton = document.getElementById('deleteAllButton');

  try {
    const data = await fetchData();
    productList.insertAdjacentHTML("beforeend", createMarkup(data.results));
    initCounters();
    toggleScrollableClass(data.results.length);
  } catch (error) {
    console.error("Error", error);
  }

  function createMarkup(array) {
    return array.map(({ _id, name, img, category, price, size }) => {
      return `
        <li class="product-card" data-product-id="${_id}">
          <img class="product-card-img" src="${img}" alt="${name}">
  
          <div class="product-container"> 
            <div class="product-title">
              <h2 class="product-name">${name}</h2>
              <button type="button" class="btn-del-product" data-product-id="${_id}">
                <svg class="delete-icon" width="18" height="18">
                  <use href="${svg_sprite}#icon-ion_close-sharp"></use>
                </svg>
              </button>
            </div>
  
            <div class="product-category">
              <p class="product-info"><span class="info-style">Category:</span> ${category.replace('_', ' ')} <span class="info-style info-space">Size:</span> ${size}</p>
            </div>
  
            <div class="counter">
              <p class="product-price product-name m">$${price}</p>
              <div class="btn-counter">
                <button class="decrement" type="button" data-action="decrement" data-product-id="${_id}">
                  <svg class="icon-minus" width="14" height="14">
                    <use href="${svg_sprite}#icon-minus"></use>
                  </svg>
                </button>
  
                <span class="counter-value">0</span>
  
                <button class="increment" type="button" data-action="increment" data-product-id="${_id}">
                  <svg class="icon-plus" width="14" height="14">
                    <use href="${svg_sprite}#icon-plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
      `;
    }).join('');
  }

  //  Ініціалізація лічильника на кожній картці з продуктом
  function initCounters() {
    const decrementButtons = document.querySelectorAll('.decrement');
    const incrementButtons = document.querySelectorAll('.increment');
    const deleteButtons = document.querySelectorAll('.btn-del-product');
      // лічильник +
    decrementButtons.forEach(button => {
      button.addEventListener('click', function () {
        const productId = this.getAttribute('data-product-id');
        const counter = document.querySelector(`.product-card[data-product-id="${productId}"] .counter-value`);
        counter.textContent = Math.max(Number(counter.textContent) - 1, 0);
      });
    });
      //  лічильник -
    incrementButtons.forEach(button => {
      button.addEventListener('click', function () {
        const productId = this.getAttribute('data-product-id');
        const counter = document.querySelector(`.product-card[data-product-id="${productId}"] .counter-value`);
        counter.textContent = Number(counter.textContent) + 1;
      });
    });
      // видалення продукту за ID
    deleteButtons.forEach(button => {
      button.addEventListener('click', async function () {
        const productId = this.getAttribute('data-product-id');
        await deleteProduct(productId);
      });
    });
  }
    // Функція видалення продукту за ID
  async function deleteProduct(productId) {
    const productElement = document.querySelector(`.product-card[data-product-id="${productId}"]`);

    if (productElement) {
      productElement.remove();
      checkEmptyCart();  // перевірка чи порожній кошик(якщо видалив всі продукти щоб з'явилась заглушка)
    }
  }
    // Функція перевірки стану кошику(чи порожній)
  function checkEmptyCart() {
    const orderCart = document.querySelector('.order-container');
      // відмальвую розмітку заглушки за умови що кошик порожній
    if (productList.childElementCount === 0) {
      productList.innerHTML = `
        <div class="empty-cart">
          <img class="empty-basket" src="${empty_basket}"></img>
          <p class="product-name">Your basket is <span>empty...</span></p>
          <p class="empt-text">Go to the main page to select your favorite products and add them to the cart.</p>
        </div>
      `;
      productList.style.display = 'block';
      orderCart.style.display = 'none';
      deleteAllButton.style.display = 'none';
    }
  }
  // Функція появи/зникнення скролу в залежності від кількості продуктів у кошику
  function toggleScrollableClass(productCount) {
    productList.classList.toggle('scrollable', productCount > 3);
  }

  deleteAllButton.addEventListener('click', async function () {
    await deleteAllProducts();  // очищення кошику при кліку на кнопку
  });
  // Функція очищення всього кошику при кліку на кнопку очищення
  async function deleteAllProducts() {
    productList.innerHTML = '';
    checkEmptyCart();
  }
}

init();





























// коммент
// document.addEventListener('DOMContentLoaded', async function () {
//   const productList = document.querySelector('.product-list');

//   try {
//     const response = await axios.get(`${BASE_URL}/products`);
//     const data = response.data;

//     productList.insertAdjacentHTML("beforeend", createMarkup(data.results));
//     initCounters(); // Додаємо ініціалізацію лічильників після вставки розмітки

//     if (data.results.length > 3) {
//       productList.classList.add('scrollable');
//     } else {
//       productList.classList.remove('scrollable');
//     }
//   } catch (error) {
//     console.error("Error", error);
//   }

//   function createMarkup(array) {
//     return array.map(({ _id, name, img, category, price, size }) => {
//       return `
//         <li class="product-card" data-product-id="${_id}">
//           <img class="product-card-img" src="${img}" alt="${name}">
  
//           <div class="product-container"> 
//             <div class="product-title">
//               <h2 class="product-name">${name}</h2>
//               <button type="button" class="btn-del-product" data-product-id="${_id}">
//                 <svg class="delete-icon" width="18" height="18">
//                   <use href="${svg_sprite}#icon-ion_close-sharp"></use>
//                 </svg>
//               </button>
//             </div>
  
//             <div class="product-category">
//               <p class="product-info"><span class="info-style">Category:</span> ${category.replace('_', ' ')} <span class="info-style info-space">Size:</span> ${size}</p>
//             </div>
  
//             <div class="counter">
//               <p class="product-price product-name m">$${price}</p>
//               <div class="btn-counter">
//                 <button class="decrement" type="button" data-action="decrement" data-product-id="${_id}">
//                   <svg class="icon-minus" width="14" height="14">
//                     <use href="${svg_sprite}#icon-minus"></use>
//                   </svg>
//                 </button>
  
//                 <span class="counter-value">0</span>
  
//                 <button class="increment" type="button" data-action="increment" data-product-id="${_id}">
//                   <svg class="icon-plus" width="14" height="14">
//                     <use href="${svg_sprite}#icon-plus"></use>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </li>
//       `;
//     }).join('');
//   }
//   // ЛІЧИЛЬНИК ТОВАРІВ У КОШИКУ
//   function initCounters() {
//     const decrementButtons = document.querySelectorAll('.decrement');
//     const incrementButtons = document.querySelectorAll('.increment');
//     const deleteButtons = document.querySelectorAll('.btn-del-product');
  
//     decrementButtons.forEach(button => {
//       button.addEventListener('click', function () {
//         const productId = this.getAttribute('data-product-id');
//         const counter = document.querySelector(`.product-card[data-product-id="${productId}"] .counter-value`);
//         counter.textContent = Math.max(Number(counter.textContent) - 1, 0);
//       });
//     });
  
//     incrementButtons.forEach(button => {
//       button.addEventListener('click', function () {
//         const productId = this.getAttribute('data-product-id');
//         const counter = document.querySelector(`.product-card[data-product-id="${productId}"] .counter-value`);
//         counter.textContent = Number(counter.textContent) + 1;
//       });
//     });

//   // Видалення продукту
//     deleteButtons.forEach(button => {
//       button.addEventListener('click', function () {
//         const productId = this.getAttribute('data-product-id');
//         deleteProduct(productId);
//       });
//     });
//   }
  
//   // Функція видалення продукту
//   function deleteProduct(productId) {
//     const productElement = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  
//     if (productElement) {
//       productElement.remove();
//       checkEmptyCart();
//     }
//   }
  
//   // Перевірка на пустий кошик
//   function checkEmptyCart() {
//     const products = document.querySelectorAll('.product-card');
//     const orderCart = document.querySelector('.order-container');
  
//     if (productList.childElementCount === 0) {
//       // Якщо порожній, відображую блок "empty-cart" і ховаю блок замовлення
//       productList.innerHTML = `
//         <div class="empty-cart">
//           <img class="empty-basket" src="${empty_basket}"></img>
//           <p class="product-name">Your basket is <span>empty...</span></p>
//           <p class="empt-text">Go to the main page to select your favorite products and add them to the cart.</p>
//         </div>
//       `;
//       productList.style.display = 'block';
//       orderCart.style.display = 'none';
//       deleteAllButton.style.display = 'none';
//     } 
//   }
// // Очищення кошика
//   document.addEventListener('DOMContentLoaded', function () {
//     const deleteAllButton = document.getElementById('deleteAllButton');
//     deleteAllButton.addEventListener('click', function () {
//       deleteAllProducts();
//     });
//   });

//   // Функція очищення кошика 
//   function deleteAllProducts() {
//     productList.innerHTML = ''; // Очистимо вміст кошика
//     checkEmptyCart();
//   }
//   deleteAllButton.addEventListener('click', function () {
//     deleteAllProducts();
//   });
  
// });

// аж до сюда





/**
  |============================
  | Видалення продукту з кошика
  |============================
*/
// document.addEventListener('click', function (event) {
//   // Перевірка, чи клік був на іконці видалення
//   if (event.target.classList.contains('delete-icon')) {
//     // Отримання id продукту з даних атрибуту
//     const productId = event.target.getAttribute('data-product-id');
    
//     // Виклик функції для видалення продукту
//     deleteProduct(productId);
//   }
// });

// function deleteProduct(productId) {
//     const productElement = document.querySelector(`.product-card[data-product-id="${productId}"]`);

//   // Видаліть елемент продукту з DOM
//   if (productElement) {
//     productElement.remove();
    
//     // Перевірка, чи список продуктів порожній
//     checkEmptyCart();
//   }
// }

// Створення розмітки порожнього кошика
// function checkEmptyCart() {
//   const productList = document.querySelector('.product-list');
//     const orderCart = document.querySelector('.order-container');

//   // Перевірте, чи список продуктів порожній
//   if (productList.childElementCount === 0) {
//     // Якщо порожній, відображую блок "empty-cart" і ховаю блок замовлення
//     productList.innerHTML = `
//       <div class="empty-cart">
//         <img class="empty-basket" src="${empty_basket}"></img>
//         <p class="product-name">Your basket is <span>empty...</span></p>
//         <p class="empt-text">Go to the main page to select your favorite products and add them to the cart.</p>
//       </div>
//     `;
//     productList.style.display = 'block';
//     orderCart.style.display = 'none';
//     deleteAllButton.style.display = 'none';
//   } 
// }



/**
  |============================
  | Функція очищення кошика 
  |============================
*/ 
// document.addEventListener('DOMContentLoaded', function () {
//   const deleteAllButton = document.getElementById('deleteAllButton');
//   deleteAllButton.addEventListener('click', function () {
//     deleteAllProducts();
//   });
// });

// function deleteAllProducts() {
//   const productList = document.querySelector('.product-list');
//   // Видалення всіх елементів списку продуктів
//   productList.innerHTML = '';

//   // Перевірка, чи список продуктів порожній
//   checkEmptyCart();
// }




