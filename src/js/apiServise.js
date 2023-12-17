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






export { getCategories };
