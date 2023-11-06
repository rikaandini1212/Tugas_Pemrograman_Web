// Daftar produk
const products = [
    { name: "Produk 1", price: 10 },
    { name: "Produk 2", price: 20 },
    { name: "Produk 3", price: 30 }
];

function addToCart(productName, price) {
    let cart = getCart();

    // Periksa apakah produk sudah ada di keranjang belanja
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    saveCart(cart);
    alert('Produk berhasil ditambahkan ke keranjang belanja!');
}

function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderProductList() {
    const productList = document.getElementById("product-list");

    products.forEach(function (product) {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Harga: $${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Tambahkan ke Keranjang</button>
        `;
        productList.appendChild(productElement);
    });
}

window.addEventListener('DOMContentLoaded', function () {
    renderProductList();
});