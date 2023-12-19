import axios from 'axios';
async function fetchData() {
  const apiUrl = 'https://food-boutique.b.goit.study/api/products/popular';
  const params = { limit: '6' };
  try {
    const response = await axios.get(apiUrl, { params });
    console.log(response.data);
  } catch (error) {
    console.error(`Помилка: ${error.message}`);
  }
}
fetchData();
