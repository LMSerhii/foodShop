import { load, save, remove } from './storage';
import { common } from './common';
import { createOrder } from './api_service';
import { renderCart, onClose } from './cart';
import { openModalFooter } from './modal';
import { succesOrder } from './helpers/modalMarkups';

const orderCart = load(common.LOCAL_CART_KEY) ?? [];
orderCart.forEach(product => {
  product.amount = 1;
});
save(common.ORDER, orderCart);
console.log(orderCart);

// Функція для обробки замовлення
async function handleOrder() {
  // Збір інформації з форми
  const userEmail = document.getElementById('user-email').value;

  // Завантаження або створення кошика
  const orderCart = load(common.LOCAL_CART_KEY) ?? [];

  // Встановлення кількості для кожного продукту
  orderCart.forEach(product => {
    product.amount = 1;
  });

  // Збереження зміненого кошика
  save(common.ORDER, orderCart);
  console.log(orderCart);

  // Перетворення структури даних для відповідності вимогам сервера
  const formattedOrderCart = orderCart.map(product => {
    return {
      productId: product._id,
      amount: product.amount,
    };
  });

  try {
    // Виклик функції createOrder з оновленими даними з orderCart
    const orderResponse = await createOrder(userEmail, formattedOrderCart);
    console.log('Відповідь на замовлення:', orderResponse);
    console.log(userEmail, formattedOrderCart);

    const markup = succesOrder(orderCart);

    openModalFooter(orderBtn, markup);

    // Чекаємо, наприклад, 5 секунд перед очищенням сторінки

    setTimeout(() => {
      // Очистка сховища для cart і order
      save(common.LOCAL_CART_KEY, []);
      save(common.ORDER, []);

      // Перезавантаження сторінки
      location.reload();
    }, 5000);

    console.log('Відповідь на замовлення:', orderResponse);
    // Очистити форму або виконати інші дії після успішного замовлення
  } catch (error) {
    // Обробка помилки
    console.error('Помилка при замовленні:', error);
  }
}

const checkoutButton = document.getElementById('checkoutButton');

// Обробник події для кнопки
const orderBtn = document.getElementById('checkoutButton');

orderBtn.addEventListener('click', function (event) {
  event.preventDefault();

  // Виклик функції для обробки замовлення
  handleOrder();
});

export { orderCart };
