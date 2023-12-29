import { load, save, remove } from './storage';
import { common } from './common';
import emty_cart from '../img/yellow_shopping_basket.png';
import { createOrder } from './api_service';
import svg_sprite from '../img/sprite.svg';

const refs = {
  cartList: document.querySelector('.cart-list'),
  deleteAll: document.querySelector('.cart-delete-all'),
  orderBox: document.querySelector('.order-box'),
  orderForm: document.querySelector('.order-form'),
  totalSum: document.querySelector('.order-box-total-price-var'),



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

  return arrey.map(({ _id, img, name, category, size, price, quantity }) => {
    return `<li class="cart-item js-card" data-id="${_id}">
                    <button class="cart-product-delete js-product-cart-delete">
                        <svg class="cart-product-delete-icon" width="18" height="18">
                            <use href="${svg_sprite}#close"></use>
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
                      

                        <div class="cart-content-bottom-addition">
                        <button class="cart-content-bottom-minus" type="button" aria-label="subtraction">
                          <svg class="minus-icon" width="18" height="18" aria-label="minus">
                            <use class="cart-minus-svg" href="${svg_sprite}#minus"></use>
                          </svg>
                        </button>

                        <span class="quantity">${quantity}</span>

                        <button class="cart-content-bottom-plus" type="button" aria-label="addition">
                          <svg class="plus-icon" width="18" height="18" aria-label="plus">
                            <use class="cart-plus-svg" href="${svg_sprite}#plus"></use>
                          </svg>
                        </button>
                      </div>

                        
                    </div>
                </div>
            </li>
        `;
  });
};

// const btnMinus = document.querySelector('.cart-content-bottom');
// console.log(btnMinus);



const totalAmount = () => {
  const currCart = load(common.LOCAL_CART_KEY) ?? [];

  if (!currCart.length) {
    return;
  }

  const count = 1;

  return currCart
    .reduce((acc, product) => acc + product.price * count, 0)
    .toFixed(2);
};

const renderCartList = () => {
  const currentCartList = load(common.LOCAL_CART_KEY) ?? [];
  const updatedCartList = currentCartList.map(item => {

    const itemId = item._id;

    const storedItem = currentCartList.find(item => item._id === itemId);


    let quantity = 1;

    if (storedItem && storedItem.quantity !== null && storedItem.quantity !== undefined) {

      quantity = storedItem.quantity > 0 ? storedItem.quantity : 1;
    }

    return {
      ...item,
      quantity: quantity,
    };
  });

  save(common.LOCAL_CART_KEY, updatedCartList);


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
  const total = totalAmount();
  refs.cartList.innerHTML = markup;
  refs.totalSum.innerHTML = `$${total}`;
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

const onOrderForm = evt => {
  evt.preventDefault();
  const email = document.querySelector('.order-box-input').value;

  if (!email) {
    alert('blank space');
    return;
  }

  const testEmail = 'goodemail@gmail.com';

  const currCart = load(common.LOCAL_CART_KEY) ?? [];

  let orderList = [];

  currCart.map(element => {
    orderList.push({
      productId: element._id,
      amount: 1,
    });
  });

  const data = JSON.stringify({
    email: testEmail,
    products: orderList,
  });

  createOrder(data);
};

refs.orderForm.addEventListener('submit', onOrderForm);

refs.cartList.addEventListener('click', onCartListClick);

refs.deleteAll.addEventListener('click', onDeleteAll);

cartCount();
renderCartList();


const buttonElementMinus = document.querySelector('.cart-content-bottom-minus');
const buttonElementPlus = document.querySelector('.cart-content-bottom-plus');
const quantity = document.querySelector('.quantity');
const cartItem = document.querySelector('.cart-item');
const cartList = document.querySelector('.cart-list');

let cart = load(common.LOCAL_CART_KEY) ?? [];
console.log(cart);

function updateCartQuantity(itemId, delta) {
  const currentCartList = load(common.LOCAL_CART_KEY) || [];
  const listItem = document.querySelector(`.cart-item[data-id="${itemId}"]`);

  const itemToUpdate = currentCartList.find(item => item._id === itemId);

  if (itemToUpdate) {

    itemToUpdate.quantity = Math.max(1, itemToUpdate.quantity + delta);


    const newPrice = itemToUpdate.quantity * itemToUpdate.price;

    if (listItem) {

      const quantitySpan = listItem.querySelector('.quantity');
      if (quantitySpan) {
        quantitySpan.textContent = itemToUpdate.quantity;
      }


      const priceElement = listItem.querySelector('.cart-content-price');
      if (priceElement) {
        priceElement.textContent = `$${newPrice.toFixed(2)}`;
      }


      const totalPriceElement = document.querySelector('.order-box-total-price-var');
      if (totalPriceElement) {

        const totalCartPrice = currentCartList.reduce((total, item) => total + item.quantity * item.price, 0);
        totalPriceElement.textContent = `$${totalCartPrice.toFixed(2)}`;
      }
    }

    save(common.LOCAL_CART_KEY, currentCartList);
  }
}



function plus() {
  const buttonElementsPlus = document.querySelectorAll('.cart-content-bottom-plus');

  buttonElementsPlus.forEach(buttonElementPlus => {
    buttonElementPlus.addEventListener('click', (event) => {
      const listItem = event.target.closest('.cart-item');
      const itemId = listItem ? listItem.dataset.id : null;
      updateCartQuantity(itemId, 1);
    });
  });
}

function minus() {
  const buttonElementsMinus = document.querySelectorAll('.cart-content-bottom-minus');

  buttonElementsMinus.forEach(buttonElementMinus => {
    buttonElementMinus.addEventListener('click', (event) => {
      const listItem = event.target.closest('.cart-item');
      const itemId = listItem ? listItem.dataset.id : null;
      updateCartQuantity(itemId, -1);
    });
  });
}

plus();
minus();





