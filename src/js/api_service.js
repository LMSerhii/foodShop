import axios from 'axios';
import { common } from './common';

// get a list of all products
async function getData(query) {
  // return object {page, perPage, results[], totalPages}
  try {
    const response = await axios({
      url: `${common.BASE_URL}/products`,
      method: 'GET',
      header: {
        'Content-Type': 'aplication/json',
      },

      params: query,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

// get an object by ID
async function getDataId(id) {
  // returns the card object
  try {
    const response = await axios({
      url: `${common.BASE_URL}/products/${id}`,
      method: 'GET',
      header: {
        'Content-Type': 'aplication/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// get a list of popular products
async function getPopular(limit) {
  // returns an array of data
  try {
    let query = null;

    if (limit) {
      query = { limit: limit };
    }
    const response = await axios({
      url: `${common.BASE_URL}/products/popular`,
      method: 'GET',
      header: {
        'Content-Type': 'aplication/json',
      },

      params: query,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

// get a list of products with a discount
async function getDiscount() {
  // returns an array of data
  try {
    const response = await axios({
      url: `${common.BASE_URL}/products/discount`,
      method: 'GET',
      header: {
        'Content-Type': 'aplication/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

// get categories
async function getCategories() {
  // returns an array of data
  try {
    const response = await axios({
      url: `${common.BASE_URL}/products/categories`,
      method: 'GET',
      header: {
        'Content-Type': 'aplication/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

// request to create a new order
async function createOrder(email, productList) {
  // returns an object
  try {
    const response = await axios({
      url: 'https://food-boutique.b.goit.study/api/orders',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: email,
        products: productList,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

// request a subscription
async function createSubscription(email) {
  // returns an object
  try {
    const response = await axios({
      url: `${common.BASE_URL}/subscription`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: email,
      },
    });

    return response.status;
  } catch (error) {
    return error.response.status;
  }
}

export {
  getData,
  getDataId,
  getPopular,
  getDiscount,
  getCategories,
  createOrder,
  createSubscription,
};
