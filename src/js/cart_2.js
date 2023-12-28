import { load, save, remove } from './storage';
import { common } from './common';
import emty_cart from '../img/yellow_shopping_basket.png';

const refs = {
  cartList: document.querySelector('.cart-list'),
  deleteAll: document.querySelector('.cart-delete-all'),
  orderBox: document.querySelector('.order-box'),
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
                            <use href="./img/sprite.svg#close"></use>
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
                        <div class="cart-content-bottom-addition"></div>
                    </div>
                </div>
            </li>
        `;
  });
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

  refs.cartList.innerHTML = markup;
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

refs.cartList.addEventListener('click', onCartListClick);

refs.deleteAll.addEventListener('click', onDeleteAll);

cartCount();
renderCartList();
