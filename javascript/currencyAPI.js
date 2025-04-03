// Пример работы с API для получения данных о валюте
const fetchCurrencyData = async () => {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); // Пример API для курса валют
    const data = await response.json();
    return data;
  };
  
  // Использование данных
  fetchCurrencyData().then(data => {
    console.log('Курсы валют:', data.rates);
    // Можно обновить цены товаров в каталоге с учетом валют
  });
  