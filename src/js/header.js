// временная заглушка для счетчика продуктов в корзине
const itemsInCart = 0;

const cartTextElement = document.querySelector('.cart-text');

const counter = cartTextElement.querySelector('#cartCount');

counter.textContent = itemsInCart;
