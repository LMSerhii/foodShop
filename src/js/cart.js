import axios from 'axios';
import svg_sprite from '../img/sprite.svg';
import empty_basket from '../img/yellow shopping basket.png';
import { common } from './common';
import { refs } from './refs';
import { getData } from './api_service';
import { save, load } from './storage';
import { addToCart } from './helpers/addToCart';
import { productMarkup, notFoundMarkup } from './markupFunctions';

const BASE_URL = 'https://food-boutique.b.goit.study/api';


// Ваша функція для завантаження даних
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



// Основна функція ініціалізації
async function init() {
  const productList = document.querySelector('.product-list');

  try {
    const data = await fetchData();
    const cartItems = getCartItems();
      
    productList.innerHTML = createMarkup(data.results, cartItems);
    
  } catch (error) {
    console.error('Error', error);
  }


  function createMarkup(array, cartItems) {
    return array
      .filter(({ _id }) => cartItems.some(item => item.id === _id))
      .map(({ _id, name, img, category, price, size }) => {
        const cartItem = cartItems.find(item => item.id === _id);
        const quantity = cartItem ? cartItem.quantity : 0;

        return `
          <li class="product-card" data-product-id="${_id}">
            <img class="product-card-img" src="${img}" alt="${name}">
            
            <div class="product-container"> 
              <div class="product-title">
                <h2 class="product-name">${name}</h2>
                <button type="button" id="test" class="btn-del-product" data-product-id="${_id}">
                  <svg class="delete-icon" width="18" height="18">
                    <use href="${svg_sprite}#close"></use>
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
                      <use href="${svg_sprite}#minus"></use>
                    </svg>
                  </button>

                  <span class="counter-value">${quantity}</span>

                  <button class="increment" type="button" data-action="increment" data-product-id="${_id}">
                    <svg class="icon-plus" width="14" height="14">
                      <use href="${svg_sprite}#plus"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>
        `;
      })
      .join('');
  }
  console.log(getCartItems());

  


  // Функція отримує товари з локального сховища
  function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
}



init();

