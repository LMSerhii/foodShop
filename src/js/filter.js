import axios from 'axios';
import common  from './common';
import {getCategories} from './apiServise'; //доп задание

const filterForm = document.getElementById('filterForm');
const wordInput = document.getElementById('wordInput');
const searchButton = document.getElementById('searchButton');
const categorySelect = document.getElementById('categorySelect');
// const sortProducts = document.getElementById('sortProducts'); доп задание

// получаем данные Keyword
filterForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const wordInput = document.getElementById('wordInput');
    const inputValue = wordInput.value;
  
    inputKeyword(inputValue);
  });
  


  async function inputKeyword(keyword) {
    try {
      const data = await axios.get(`${common.BASE_URL}/products?page=${common.filters.page}&limit=${common.filters.limit}&keyword=${keyword}`);
  
      console.log('inputKeyword:', data.data.results);
    return Response.data;
    } catch (error) {
      console.error('Error making server request:', error.message);
   
    }
  }
  