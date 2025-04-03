// Загрузка товаров из localStorage и обновление корзины
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';  // Очищаем контейнер перед рендерингом товаров

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button class="remove-from-cart" data-id="${item.id}">Удалить</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Обработчик событий для кнопок "Удалить"
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(button.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();  // Перерисовываем корзину после удаления товара
}

// Загрузка корзины при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateCart();
});

// Функция для подсчёта итоговой суммы в корзине
function calculateTotal() {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace(' KZT', '')), 0);
}

// Обновление корзины с отображением итоговой суммы
function updateCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';  // Очищаем контейнер перед рендерингом товаров

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button class="remove-from-cart" data-id="${item.id}">Удалить</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Отображение итоговой суммы
    const total = calculateTotal();
    const totalElement = document.createElement('div');
    totalElement.classList.add('cart-total');
    totalElement.innerHTML = `<h3>Итоговая сумма: ${total} KZT</h3>`;
    cartContainer.appendChild(totalElement);

    // Обработчик событий для кнопок "Удалить"
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(button.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}
