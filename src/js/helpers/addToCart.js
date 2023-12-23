import iziToast from 'izitoast';
import '../../../node_modules/izitoast/dist/css/iziToast.min.css';
import svg_sprite from '../../img/sprite.svg';

const addToCart = evt => {
  const { id } = evt.target.closest('.js-card').dataset;

  // Додавання товару до локального сховища
  addToLocalStorage(id);

  evt.target.closest(
    '.js-cart'
  ).innerHTML = ` <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${svg_sprite}#check"></use>
                    </svg>`;

  iziToast.success({
    message: 'Successfully added to cart',
  });
};

// Функція для додавання товару до локального сховища
const addToLocalStorage = id => {
  // Отримання поточного вмісту локального сховища (якщо є)
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Перевірка, чи товар вже присутній у кошику
  const existingItemIndex = cartItems.findIndex(item => item.id === id);

  if (existingItemIndex !== -1) {
    // Якщо товар вже є у кошику, збільшуємо кількість
    cartItems[existingItemIndex].quantity += 1;
  } else {
    // Якщо товару немає у кошику, додаємо його з кількістю 1
    cartItems.push({ id, quantity: 1 });
  }

  // Оновлюємо локальне сховище
  localStorage.setItem('cart', JSON.stringify(cartItems));
  
};







export { addToCart };
