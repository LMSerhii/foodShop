import axios from 'axios';

function createProductCard(product) {
    const productContainer = document.getElementById('productContainer');

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.name;

    const h3 = document.createElement('h3');
    h3.textContent = product.name;

    const p = document.createElement('p');
    p.textContent = product.description;

    const span = document.createElement('span');
    span.classList.add('price');
    span.textContent = `$${product.price}`;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';

    productCard.appendChild(img);
    productCard.appendChild(h3);
    productCard.appendChild(p);
    productCard.appendChild(span);
    productCard.appendChild(button);

    productContainer.appendChild(productCard);
  }

  function fetchProducts() {
    const productContainer = document.getElementById('productContainer');
    const productLimit = 3;
    productContainer.innerHTML = ''; // Очищаємо контейнер перед новими продуктами

    // Виконуємо запит за допомогою Axios або іншої бібліотеки
    axios.get('https://food-boutique.b.goit.study/api/products/popular')
      .then(response => {
        // Обробляємо відповідь від сервера
        const products = response.data.slice(0, productLimit);
        products.forEach(product => {
          createProductCard(product);
        });

        // Додаємо клас "scrollable", якщо кількість продуктів більше 3
        if (products.length > 3) {
          productContainer.classList.add('scrollable');
        } else {
          productContainer.classList.remove('scrollable');
        }
      })
      .catch(error => {
        // Обробляємо помилку, якщо виникла
        console.error('Помилка запиту:', error);
      });
  }

  // Викликаємо fetchProducts після повного завантаження сторінки
  document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', fetchProducts);
  });