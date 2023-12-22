import axios from 'axios';
const basketImg = '../css/images/yellow shopping basket.png'
const productList = document.querySelector('.product-list');
const underline = "http://www.w3.org/2000/svg";
import svg_sprite from '../css/images/sprite.svg';
const productLimit = 3;


const BASE_URL = 'https://food-boutique.b.goit.study/api';

async function fetchData(params) {
  try {
    const response = await axios({
      url: `${BASE_URL}/products`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.log("Error", error);
    throw error; // Обов'язково прокидайте помилку, щоб її можна було обробляти вище
  }
}

fetchData()

  .then(data => {
    productList.insertAdjacentHTML("beforeend", createMarkup(data.results));
    // console.log(data.results.length);
    if (data.results.length > 3) {
      productList.classList.add('scrollable');
    } else {
      productList.classList.remove('scrollable');
    }
  })
  .catch(error => {
    // Обробка помилки при виклику fetchData
    console.log("Error", error);
  });


function createMarkup(array) {
  return array.map(({ _id, name, img, category, price, size }) => {
    
    return `
      <li class="product-card">
        <img class="product-card-img" src="${img}" alt="${name}">

        <div class="product-container"> 
          <div class="product-title">
            <h2 class="product-name">${name}</h2>
            <svg width="18" height="18">
              <use href="${svg_sprite}#icon-ion_close-sharp"></use>
            </svg>
          </div>


          <div class="product-category">
            <p class="product-info"><span class="info-style">Category:</span> ${category.replace('_',' ')} <span class="info-style info-space">Size:</span> ${size}</p>
          </div>
          <p class="product-price product-name">$${price}</p>
        </div>
        
      </li>
    `
  }).join('');
}

// FETCH
async function getData(params) {
  try {
    return await fetchData(params);
  } catch (error) {
    // errorMarkup(error.response.status);
    console.log(error);
  }
}

async function fetchDataId(id) {
  const response = await axios({
    url: `${BASE_URL}/products/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

async function getDataId(id) {
  try {
    return await fetchDataId(id);
  } catch (error) {
    // errorMarkup(error.response.status);
    console.log(error);
  }
}




// // STORAGE
// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// };
// ​
// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };



/**
  |============================
  | ORDER PART
  |============================
*/
const orderContainer = document.querySelector('.order-container');



