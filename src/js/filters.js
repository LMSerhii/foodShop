import axios from 'axios';
import { common } from './common';
import './api_service';
import { getData, fetchData, render, createMarkup, queryParams } from './products';
const filterForm = document.getElementById('filterForm');




document.getElementById('sortProducts').addEventListener('click', () => {
    document.getElementById('sortBProductsList').classList.toggle('show');
});
document.getElementById('categorySelect').addEventListener('click', () => {
    document.getElementById('categoryBProductsList').classList.toggle('show');
});




document.addEventListener('DOMContentLoaded', function () {

    // Функция для получения элемента по его ID
    const getById = (id) => document.getElementById(id);

    // Функция для скрытия списка при клике вне элемента списка или триггера
    const hideList = (listElement, triggerElement) => (event) => {
        if (!listElement.contains(event.target) && event.target !== triggerElement) {
            listElement.classList.remove('show');
        }
    };

    // Функция для обработки клика по категории или сортировке
    const handleCategoryClick = (event, listElement, triggerElement) => {
        if (event.target.classList.contains('category-item')) {
            let selectedCategory = event.target.getAttribute('data-value');

            console.log('Выбранная категория:', selectedCategory);

            // Обновление текста кнопки
            triggerElement.textContent = event.target.textContent;

            // Присвоение выбранной категории сортировки к элементу
            triggerElement.setAttribute('data-selected-category', selectedCategory);

            // Закрытие списка после выбора категории
            listElement.classList.remove('show');

            // Получаем значение ключевого слова
            const keywordInput = getById('keywordInput');
            const inputValue = keywordInput.value;

            // Создаем объект с параметрами запроса
            const queryParams = {
                category: selectedCategory,
                keyword: inputValue, 
               
            };

            // Вызываем функцию render с параметрами запроса
            render(queryParams);
        }
    };

    const sortTriggerElement = getById('sortProducts');
    const sortList = getById('sortBProductsList');
    const categoryTriggerElement = getById('categorySelect');
    const categoryList = getById('categoryBProductsList');

    // Добавление слушателей событий
    document.addEventListener('click', hideList(sortList, sortTriggerElement));
    document.addEventListener('click', hideList(categoryList, categoryTriggerElement));

    // Передача параметров в функцию обработки клика
    categoryList.addEventListener('click', (event) => handleCategoryClick(event, categoryList, categoryTriggerElement));
    sortList.addEventListener('click', (event) => handleCategoryClick(event, sortList, sortTriggerElement));

    // Добавление слушателя для формы фильтрации
    const filterForm = getById('filterForm');
    filterForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const keywordInput = getById('keywordInput');
        const inputValue = keywordInput.value;

        if (!inputValue.trim()) {
            console.log('Пожалуйста, введите ключевое слово перед отправкой.');
            return;
        }

        try {
            // Получаем выбранную категорию сортировки
            const selectedCategory = categoryTriggerElement.getAttribute('data-selected-category');

            // Создаем объект с параметрами запроса
            const queryParams = {
                category: selectedCategory,
                keyword: inputValue, // Добавляем ключевое слово в запрос

                // Другие параметры запроса, если необходимо
            };

            // Вызываем функцию render с параметрами запроса
            render(queryParams);
        } catch (error) {
            console.error(error);
        }
    });
});

// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byABC=false
// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byABC=true
// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byPrice=true
// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byPrice=false
// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byPopularity=false
// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byPopularity=true

