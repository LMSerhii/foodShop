import { load, save, remove } from './storage';
import { common } from './common';
import { producCartMarkup } from './markupFunctions';
import { refs } from './refs';

const cart = load(common.LOCAL_CART_KEY) ?? [];

const renderItemCount = () => {
  const itemCount = cart.length;
  console.log(`Item Count: ${itemCount}`);
  refs.productsCount.textContent = `(${itemCount})`;
};

const validClose = productId => {
  const index = cart.findIndex(({ _id }) => _id === productId);

  console.log(index);

  cart.splice(index, 1);

  remove(common.LOCAL_CART_KEY);

  save(common.LOCAL_CART_KEY, cart);

  refs.cartList.innerHTML = producCartMarkup(cart);
  renderTotalAmount(); // Оновлення суми при видаленні товару
  renderItemCount();
};

const onClose = evt => {
  if (evt.currentTarget === evt.target) {
    return;
  }

  const id = evt.target.closest('.js-card').dataset.id;
  console.log(evt.target);

  if (evt.target.classList.contains('js-close')) {
    validClose(id);
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

const renderCart = () => {
  if (cart.length > 3) {
    // Застосування вертикального скролу
    refs.cartList.classList.add('scrollable');
  }

  refs.cartList.innerHTML = producCartMarkup(cart);
  refs.cartList.addEventListener('click', onClose);
  renderTotalAmount();
};

renderItemCount();
renderCart();

// Додавання обробника подій для кнопки "Delete all"
refs.deleteAllButton.addEventListener('click', clearCartLocalStorage);
