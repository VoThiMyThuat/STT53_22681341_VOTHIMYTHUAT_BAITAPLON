// Dữ liệu sản phẩm mẫu
const products = [
    { id: 1, name: "Sản phẩm 1", price: 100000 },
    { id: 2, name: "Sản phẩm 2", price: 150000 },
    { id: 3, name: "Sản phẩm 3", price: 200000 }
];

// Giỏ hàng ban đầu
let cart = [
    { productId: 1, quantity: 2 },
    { productId: 2, quantity: 1 }
];

// Hàm hiển thị các sản phẩm trong giỏ hàng
function displayCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsElement.innerHTML = ''; // Xóa giỏ hàng hiện tại

    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        const itemTotal = product.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price} VND</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.productId}, this.value)">
            </td>
            <td>${itemTotal} VND</td>
            <td><button onclick="removeItem(${item.productId})">Xóa</button></td>
        `;
        cartItemsElement.appendChild(row);
    });

    totalPriceElement.textContent = total + ' VND';
}

// Hàm cập nhật số lượng sản phẩm
function updateQuantity(productId, quantity) {
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
        cartItem.quantity = parseInt(quantity, 10);
        displayCart();
    }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeItem(productId) {
    cart = cart.filter(item => item.productId !== productId);
    displayCart();
}

// Hiển thị giỏ hàng khi tải trang
displayCart();

// Thanh toán (thêm chức năng nếu cần)
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Cảm ơn bạn đã mua hàng!');
});
