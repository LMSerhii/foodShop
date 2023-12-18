import {inputKeyword} from './apiServise'; 

// Навешиваем обработчик события на отправку формы
filterForm.addEventListener('submit', async function (event) {
    event.preventDefault(); 
    const wordInput = document.getElementById('wordInput');
    const inputValue = wordInput.value;
    if (!inputValue.trim()) {
        console.log('Please enter a keyword before submitting.');
        return;
    }
    try {
        const data = await inputKeyword(inputValue);
        const results = data.data.results;
    
        // Очищаем предыдущие результаты перед добавлением новых
        const productList = document.querySelector('.product__list');
        productList.innerHTML = '';
        const productsMarkup = results.map(result => {
            // Создаем элемент списка для каждого продукта
            const listItem = document.createElement('li');
        
            // Создаем элемент изображения
            const imgElement = document.createElement('img');
            imgElement.src = result.img;
            listItem.appendChild(imgElement);
        
            // Создаем элементы для отображения дополнительных данных
            const nameElement = document.createElement('p');
            nameElement.textContent = `Name: ${result.name}`;
            // Добавляем класс к элементу
            nameElement.classList.add('classsss');
            listItem.appendChild(nameElement);
        
            const categoryElement = document.createElement('p');
            categoryElement.textContent = `Category: ${result.category}`;
            listItem.appendChild(categoryElement);
        
            const sizeElement = document.createElement('p');
            sizeElement.textContent = `Size: ${result.size}`;
            listItem.appendChild(sizeElement);
        
            const popularityElement = document.createElement('p');
            popularityElement.textContent = `Popularity: ${result.popularity}`;
            listItem.appendChild(popularityElement);
        
            const priceElement = document.createElement('p');
            priceElement.textContent = `Price: ${result.price}`;
            listItem.appendChild(priceElement);
        
            // Создаем кнопку
            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'buy'; // Set the button text
            // Добавляем обработчик события для кнопки (замените 'handleButtonClick' на ваш обработчик)
            buttonElement.addEventListener('click', handleButtonClick);
            listItem.appendChild(buttonElement);
        
            return listItem.outerHTML;
        });
        
        // обработчик события для кнопки
        function handleButtonClick() {
            
            console.log('Button clicked!');
        }
        
        // Добавляем сгенерированный HTML в элемент списка продуктов
        productList.innerHTML = productsMarkup.join('');
    } catch (error) {
        // Обработка ошибки
        console.error('Error fetching or rendering data:', error);
    }
    
  
});
