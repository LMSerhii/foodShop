import axios from 'axios';

function emptyCart(product) {
  const emptyCartContainer = document.querySelector('.empty-cart');
  document.body.classList.add('empty-cart-background');

  const img = document.createElement('img');
  img.src = '../css/images/yellow shopping basket.png';
  img.alt = 'Жовтий порожній кошик';

  const paragraph = document.createElement('p');
  const span = document.createElement('span');
  span.className = 'span';
  span.textContent = 'empty....';
  paragraph.textContent = 'Your basket is ';
  paragraph.appendChild(span);
  
  const paragraph_2 = document.createElement('p');
  paragraph_2.textContent =
    'Go to the main page to select your favorite products and add them to the cart.';

  emptyCartContainer.appendChild(img);
  emptyCartContainer.appendChild(paragraph);
  // emptyCartContainer.appendChild(span);
  emptyCartContainer.appendChild(paragraph_2);
  
}

emptyCart();
