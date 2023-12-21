import axios from 'axios';
import { common } from './common';
// get a list of all products

async function fetchData(params) {
  const response = await axios({
    url: `${common.BASE_URL}/products`,
    method: 'GET',
    header: {
      'Content-Type': 'aplication/json',
    },
    params,
  });
  return response.data;
}

async function getData(params) {
  try {
    return await fetchData(params);
  } catch (error) {
    // errorMarkup(error.response.status);
    console.log(error);
  }
}

// get an object by ID

async function fetchDataId(id) {
  const response = await axios({
    url: `${common.BASE_URL}/products/${id}`,
    method: 'GET',
    header: {
      'Content-Type': 'aplication/json',
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

// get a list of popular products

async function fetchPopular() {
  const response = await axios({
    url: `${common.BASE_URL}/products/popular`,
    method: 'GET',
    header: {
      'Content-Type': 'aplication/json',
    },
  });
  return response.data;
}

async function getPopular() {
  try {
    return await fetchPopular();
  } catch (error) {
    errorMarkup(error.response.status);
  }
}

// get a list of products with a discount

async function fetchDiscount() {
  const response = await axios({
    url: `${common.BASE_URL}/products/discount`,
    method: 'GET',
    header: {
      'Content-Type': 'aplication/json',
    },
  });
  return response.data;
}

async function getDiscount() {
  try {
    return await fetchDiscount();
  } catch (error) {
    errorMarkup(error.response.status);
  }
}

// get categories

async function fetchCategories() {
  const response = await axios({
    url: `${common.BASE_URL}/products/categories`,
    method: 'GET',
    header: {
      'Content-Type': 'aplication/json',
    },
  });
  return response.data;
}

async function getCategories() {
  try {
    return await fetchCategories();
  } catch (error) {
    errorMarkup(error.response.status);
  }
}

// request to create a new order

async function new_order(id) {
  const response = await axios({
    url: `${common.BASE_URL}/products/${id}`,
    method: 'POST',
    header: {
      'Content-Type': 'aplication/json',
    },
  });
  return response.data;
}

async function order(id) {
  try {
    return await fetchDataId(id);
  } catch (error) {
    // errorMarkup(error.response.status);
    console.log(error);
  }
}

// request a subscription

async function subscription(email) {
  const response = await axios.post({
    // url: `${common.BASE_URL}/subscription`,
    url: 'https://food-boutique.b.goit.study/api/subscription',
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      email: email,
    }),
  });
  return response;
}

async function post_sub(email) {
  try {
    const result = await subscription(email);
    console.log(result);
  } catch (error) {
    // errorMarkup(error.response.status);
    console.log(error);
  }
}

export { post_sub, subscription };
