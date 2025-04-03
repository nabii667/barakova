// Динамическое добавление товаров на главную страницу
const products = [
    { id: 1, name: "Игровой компьютер", description: "Идеальный выбор для игр и работы.", price: "50000 KZT", image: "images/product1.jpg" },
    { id: 2, name: "Бюджетный ПК", description: "Для работы и учебы.", price: "25000 KZT", image: "images/product2.jpg" }
];

function displayProducts(products) {
    const productsContainer = document.querySelector('.products');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button class="add-to-cart" data-id="${product.id}">Добавить в корзину</button>
        `;
        productsContainer.appendChild(productCard);
    });

    // Обработчик событий для кнопок "Добавить в корзину"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(button.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Функция для добавления товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} добавлен в корзину!`);
    }
}

// Загрузка товаров при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
});
