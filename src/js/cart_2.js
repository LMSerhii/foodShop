import * as EmailValidator from 'email-validator';
import iziToast from 'izitoast';
import '../../node_modules/izitoast/dist/css/iziToast.min.css';
import { load, save, remove } from './storage';
import { common } from './common';
import emty_cart from '../img/yellow_shopping_basket.png';
import { createOrder } from './api_service';
import svg_sprite from '../img/sprite.svg';
import { onEmailEnter } from './footer';

const refs = {
  cartList: document.querySelector('.cart-list'),
  deleteAll: document.querySelector('.cart-delete-all'),
  orderBox: document.querySelector('.order-box'),
  orderForm: document.querySelector('.order-form'),
  totalSum: document.querySelector('.order-box-total-price-var'),
  footerForm: document.querySelector('.subscribe-form'),
};

const createCartListMarkup = arrey => {
  if (!arrey.length) {
    return `<li class="emty-cart">
                    <img src="${emty_cart}" alt="Emty Cart" class="emty-cart-img" width="132" height="114" />
                    <p class="emty-cart-title">
                        Your basket is <span class="accent">empty...</span>
                    </p>
                    <p class="emty-cart-text">
                        Go to the main page to select your favorite products and add them to the
                        cart.
                    </p>
            </li>`;
  }

  return arrey.map(({ _id, img, name, category, size, price }) => {
    return `<li class="cart-item js-card" data-id="${_id}">
                    <button class="cart-product-delete js-product-cart-delete">
                        <svg class="cart-product-delete-icon" width="18" height="18">
                            <use href="${svg_sprite}#close"></use>
                        </svg>
                    </button>

                <img src="${img}" alt="${name}" class="cart-img" />
                <div class="cart-content">
                    <p class="cart-content-title">${name}</p>
                    <ul class="cart-content-list">
                        <li class="cart-content-item">
                        Category:
                        <span class="cart-content-item-var">${category}</span>
                        </li>
                        <li class="cart-content-item">
                        Size:
                        <span class="cart-content-item-var">${size}</span>
                        </li>
                    </ul>
                    <div class="cart-content-bottom">   
                        <p class="cart-content-price">$${price}</p>
                      

                        <div class="cart-content-bottom-addition">
                        <button class="cart-content-bottom" type="button" aria-label="subtraction">
                          <svg class="minus-icon" width="18" height="18" aria-label="minus">
                            <use class="cart-minus-svg" href="${svg_sprite}#minus"></use>
                          </svg>
                        </button>

                        <span class="quantity">1</span>

                        <button class="cart-content-bottom" type="button" aria-label="addition">
                          <svg class="plus-icon" width="18" height="18" aria-label="plus">
                            <use class="cart-plus-svg" href="${svg_sprite}#plus"></use>
                          </svg>
                        </button>
                      </div>

                        
                    </div>
                </div>
            </li>
        `;
  });
};

const totalAmount = () => {
  const currCart = load(common.LOCAL_CART_KEY) ?? [];

  if (!currCart.length) {
    return;
  }

  const count = 1;

  return currCart
    .reduce((acc, product) => acc + product.price * count, 0)
    .toFixed(2);
};

const renderCartList = () => {
  const currentCartList = load(common.LOCAL_CART_KEY) ?? [];

  if (!currentCartList.length) {
    refs.deleteAll.style.display = 'none';
    refs.orderBox.style.display = 'none';
    const markup = createCartListMarkup(currentCartList);
    refs.cartList.innerHTML = markup;
    return;
  }

  refs.deleteAll.style.display = 'flex';
  refs.orderBox.style.display = 'block';

  const markup = createCartListMarkup(currentCartList);
  const total = totalAmount();
  refs.cartList.innerHTML = markup;
  refs.totalSum.innerHTML = `$${total}`;
};

const cartCount = () => {
  const cartCounter = document.querySelector('#product-count-cart');
  const currValue = load(common.LOCAL_CART_KEY) ?? [];
  cartCounter.innerHTML = `(${currValue.length})`;
};

const onDeleteAll = () => {
  save(common.LOCAL_CART_KEY, []);
  renderCartList();
};

const onCartListClick = evt => {
  if (evt.currentTarget === evt.target) {
    return;
  }

  if (evt.target.closest('.js-product-cart-delete')) {
    const { id } = evt.target.closest('.js-card').dataset;

    const currentCart = load(common.LOCAL_CART_KEY) ?? [];

    const index = currentCart.findIndex(({ _id }) => _id === id);

    currentCart.splice(index, 1);

    remove(common.LOCAL_CART_KEY);

    save(common.LOCAL_CART_KEY, currentCart);

    // headerCount();

    cartCount();
    renderCartList();
  }
};

const onOrderForm = evt => {
  evt.preventDefault();
  const email = document.querySelector('.order-box-input').value;

  if (!EmailValidator.validate(email)) {
    iziToast.warning({
      title: 'Caution',
      message: 'Check your email address',
    });
    return;
  }

  const currCart = load(common.LOCAL_CART_KEY) ?? [];

  let orderList = [];

  currCart.map(element => {
    orderList.push({
      productId: element._id,
      amount: 1,
    });
  });

  const data = JSON.stringify({
    email: email,
    products: orderList,
  });

  evt.target.reset();
  createOrder(data);
};

refs.orderForm.addEventListener('submit', onOrderForm);

refs.cartList.addEventListener('click', onCartListClick);

refs.deleteAll.addEventListener('click', onDeleteAll);

refs.footerForm.addEventListener('submit', onEmailEnter);

cartCount();
renderCartList();
