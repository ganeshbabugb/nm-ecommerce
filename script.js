let cart = [];
let cartTotal = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    cartTotal += productPrice;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotalDisplay = document.getElementById("cart-total");

    cartItemsList.innerHTML = "";
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });

    cartTotalDisplay.textContent = cartTotal.toFixed(2);
}