
import { load, save, remove } from './storage';
import { common } from './common';
import { producCartMarkup } from './markupFunctions';

const totalAmountDisplay = document.querySelector('.total-amount');
const cartList = document.querySelector('.cart-product-list');
const deleteAllButton = document.getElementById('deleteAllButton');
const productsCount = document.getElementById('product-count');
const productsCountHeader = document.getElementById('product-count-header');
const cart = load(common.LOCAL_CART_KEY) ?? [];



const renderItemCount = () => {
  const itemCount = cart.length;
  console.log(`Item Count: ${itemCount}`);
  productsCount.textContent = `(${itemCount})`;
  productsCountHeader.textContent = `(${itemCount})`;
};
renderItemCount();

const validClose = productId => {
  const index = cart.findIndex(({ _id }) => _id === productId);

  console.log(index);

  cart.splice(index, 1);

  remove(common.LOCAL_CART_KEY);

  save(common.LOCAL_CART_KEY, cart);

  cartList.innerHTML = producCartMarkup(cart);
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
  const totalAmount = cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);
  totalAmountDisplay.textContent = `$${totalAmount}`;
};


// Функція для очищення значення ключа "cart" у локальному сховищі
function clearCartLocalStorage() {
  localStorage.setItem('cart', '[]');
  location.reload();
}

// Додавання обробника подій для кнопки "Delete all"
deleteAllButton.addEventListener('click', clearCartLocalStorage);



const renderCart = () => {

  if (cart.length > 3) {
    // Застосування вертикального скролу
    cartList.classList.add('scrollable');
  }

  cartList.innerHTML = producCartMarkup(cart);
  cartList.addEventListener('click', onClose);
  renderTotalAmount();
};

renderCart();


