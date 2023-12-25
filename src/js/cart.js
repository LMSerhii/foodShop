
import { load, save, remove } from './storage';
import { common } from './common';
import { producCartMarkup } from './markupFunctions';


const cartList = document.querySelector('.cart-product-list');



const cart = load(common.LOCAL_CART_KEY) ?? [];

console.log(cart.length);
console.log(cart);

/**
  |============================
  | 
  |============================
*/
const validClose = productId => {
  // Знаходимо індекс елемента за _id
  const index = cart.findIndex(({ _id }) => _id === productId);

  console.log('Index:', index);

  // Перевірка, чи елемент знайдено за вказаним _id
  if (index !== -1) {
    // Отримуємо об'єкт за індексом
    const product = cart[index];

    // Отримуємо ціну з об'єкта
    const price = product.price;

    console.log('Price:', price);
    const summary = {};
    // Видалення елемента за індексом
    cart.splice(index, 1);
  

    // Оновлення локального сховища
    remove(common.LOCAL_CART_KEY);
    save(common.LOCAL_CART_KEY, cart);

    // Оновлення відображення кошика
    cartList.innerHTML = producCartMarkup(cart);
  } else {
    console.log('Product not found.');
  }
};

/**
  |============================
  | 
  |============================
*/

// const validClose = productId => {
//   const index = cart.findIndex(({ _id }) => _id === productId);

//   console.log(index);

//   cart.splice(index, 1);

//   remove(common.LOCAL_CART_KEY);

//   save(common.LOCAL_CART_KEY, cart);

//   cartList.innerHTML = producCartMarkup(cart);
// };

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



const deleteAllButton = document.getElementById('deleteAllButton');

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
};

renderCart();


