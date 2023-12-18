import axios from 'axios';
import common from './common';



async function getCategories() {
  try {
    const data = await axios.get(`${common.BASE_URL}/products/categories`);

    console.log(data.data);
    return Response.data;
  } catch (error) {
    console.error('Ошибка получения запроса:', error.maesage);
  }
}


async function inputKeyword(keyword) {
    try {
        const data = await axios.get(`${common.BASE_URL}/products?page=${common.filters.page}&limit=${common.filters.limit}&keyword=${keyword}`);
        // console.log('inputKeyword:', data.data.results);
        return data;
    } catch (error) {
        console.error('Ошибка при запросе к серверу:', error.message);
        throw error; 
    }
}




export { getCategories, inputKeyword };
