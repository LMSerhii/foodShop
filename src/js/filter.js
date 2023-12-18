import axios from 'axios';
import common from './common';
import { getCategories } from './apiServise'; //доп задание

const categorySelect = document.getElementById('categorySelect');
const sortProducts = document.getElementById('sortProducts');

let selectedCategory;

async function ggetCategories() {
  try {
    const data = await axios.get(`${common.BASE_URL}/products/categories`);
    const categories = data.data;

    // Создаем элемент select
    const selectElement = document.createElement('select');
    selectElement.id = 'categorySelect';

    // Создаем и добавляем плейсхолдер "Categories"
    const placeholderOption = document.createElement('option');
    placeholderOption.value = ''; // Устанавливаем значение null
    placeholderOption.textContent = 'Categories';
    selectElement.appendChild(placeholderOption);

    // Создаем и добавляем опции для каждой категории
    categories.forEach(category => {
      const optionElement = document.createElement('option');
      optionElement.value = category;
      optionElement.textContent = category;
      selectElement.appendChild(optionElement);
    });

    // Создаем и добавляем опцию "Show All" в конец
    const showAllOption = document.createElement('option');
    showAllOption.value = ''; // Устанавливаем значение null
    showAllOption.textContent = 'Show All';
    selectElement.appendChild(showAllOption);

    // Находим элемент div с идентификатором 'categoriesSelectContainer'
    const containerDiv = document.getElementById('categoriesSelectContainer');

    // Проверяем, что div существует, прежде чем добавить select
    if (containerDiv) {
      // Добавляем созданный select внутрь div
      containerDiv.appendChild(selectElement);

      // Добавляем слушатель события изменения значения select
      selectElement.addEventListener('change', function () {
        // Обновляем значение глобальной переменной при изменении значения select
        selectedCategory = selectElement.value;

        // Скрываем плейсхолдер "Categories" при выборе другого значения
        placeholderOption.style.display = selectedCategory ? 'none' : 'block';
      });

      // Добавляем слушатель события клика для удаления плейсхолдера при фокусе на селекте
      selectElement.addEventListener('focus', function () {
        // Скрываем плейсхолдер "Categories" при фокусе на селекте
        placeholderOption.style.display = 'none';
      });
    } else {
      console.error(
        'Div с идентификатором "categoriesSelectContainer" не найден.'
      );
    }

    return categories;
  } catch (error) {
    console.error('Ошибка получения запроса:', error.message);
  }
}

ggetCategories();

export { selectedCategory };
