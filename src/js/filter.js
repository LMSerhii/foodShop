import axios from 'axios';
import common  from './common';
import {getCategories} from './apiServise'; //доп задание

const filterForm = document.getElementById('filterForm');
const searchButton = document.getElementById('searchButton');
const categorySelect = document.getElementById('categorySelect');
// const sortProducts = document.getElementById('sortProducts'); доп задание
    
  // Навешиваем обработчик события на отправку формы
filterForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)

    // Получаем значение введенного ключевого слова
    const wordInput = document.getElementById('wordInput');
    const inputValue = wordInput.value;

    try {
        // Выполняем асинхронный запрос к серверу с использованием ключевого слова
        const data = await inputKeyword(inputValue);

        // Проверяем, есть ли результаты в данных
        if (data && data.data && data.data.results) {
            const results = data.data.results;

            // Итерируем по результатам
            results.forEach(result => {
                // Проверяем, есть ли свойство 'img' в результате
                if (result.img) {
                    // Предполагаем, что 'img' содержит URL изображения

                    // Создаем элемент изображения
                    const imgElement = document.createElement('img');
                    imgElement.src = result.img;

                    // Добавляем изображение в тело документа или другой контейнер
                    document.body.appendChild(imgElement);
                }
            });
        }
    } catch (error) {
        console.error('Ошибка при запросе к серверу:', error.message);
    }
});

// Асинхронная функция для выполнения запроса к серверу
async function inputKeyword(keyword) {
    try {
        // Используем библиотеку axios для выполнения GET-запроса
        const data = await axios.get(`${common.BASE_URL}/products?page=${common.filters.page}&limit=${common.filters.limit}&keyword=${keyword}`);
        console.log('inputKeyword:', data.data.results);
        return data;
    } catch (error) {
        console.error('Ошибка при запросе к серверу:', error.message);
        throw error; // Повторно выбрасываем ошибку для передачи ее вызывающей функции
    }
}


//   async function inputKeyword(keyword) {
//     try {
//       const data = await axios.get(`${common.BASE_URL}/products?page=${common.filters.page}&limit=${common.filters.limit}&keyword=${keyword}`);
  
//       console.log('inputKeyword:', data.data.results);
      
//     return data;
//     } catch (error) {
//       console.error('Error making server request:', error.message);
   
//     }
//   }
  
