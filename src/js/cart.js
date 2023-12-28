import { load, save, remove } from './storage';
import { common } from './common';
import { producCartMarkup } from './markupFunctions';
import { orderCart } from './orderCart';
import { refs } from './refs';
import empty_basket from '../img/yellow_shopping_basket.png';

const cart = load(common.LOCAL_CART_KEY) ?? [];

const orderContainer = document.querySelector('.order-container');

const renderItemCount = () => {
  const itemCount = cart.length;

  refs.productsCount.textContent = `(${itemCount})`;
  refs.productsCountHeader.textContent = `(${itemCount})`;
};

const validClose = productId => {
  const index = cart.findIndex(({ _id }) => _id === productId);

  cart.splice(index, 1);
  remove(common.LOCAL_CART_KEY);
  save(common.LOCAL_CART_KEY, cart);

  refs.cartList.innerHTML = producCartMarkup(cart);
  renderTotalAmount(); // Оновлення суми при видаленні товару
  renderItemCount();
};

const onClose = evt => {
  const closeButton = evt.target.closest('.js-close');
  if (!closeButton) {
    return;
  }

  const id = evt.target.closest('.js-card').dataset.id;
  console.log(evt.target);

  if (evt.target.classList.contains('js-close')) {
    validClose(id);
    // orderContainer.innerHTML = '';
    refs.deleteAllButton.innerHTML = '';
  }
};

const renderTotalAmount = () => {
  const totalAmount = cart
    .reduce((acc, product) => acc + product.price, 0)
    .toFixed(2);
  refs.totalAmountDisplay.textContent = `$${totalAmount}`;
};

// Функція для очищення значення ключа "cart" у локальному сховищі
const clearCartLocalStorage = () => {
  localStorage.setItem('cart', '[]');
  location.reload();
};

const notFound = () => {
  refs.cartList.innerHTML = `<li><img class="basket-img" src="${empty_basket}" alt="Yellow empty basket">
  <div class="basket-text">
      <p class="empty-text"> Your basket is <span>empty...</span></p>
      <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
  </div></li>`;
  // orderContainer.innerHTML = '';
  refs.deleteAllButton.innerHTML = '';
};

const renderCart = () => {
  if (cart.length > 3) {
    // Застосування вертикального скролу
    refs.cartList.classList.add('scrollable');
  }

  if (!cart.length) {
    notFound();
    return;
  }

  refs.cartList.innerHTML = producCartMarkup(cart);
  refs.cartList.addEventListener('click', onClose);
  renderTotalAmount();
};
renderItemCount();
renderCart();


// Додавання обробника подій для кнопки "Delete all"
refs.deleteAllButton.addEventListener('click', clearCartLocalStorage);

export { clearCartLocalStorage, renderCart, onClose };
