let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ productName, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = ''; // Clear existing items

  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `<p>${item.productName} - $${item.price.toFixed(2)}</p>`;
    cartItemsDiv.appendChild(itemDiv);
  });

  document.getElementById('total').textContent = total.toFixed(2);
}

function searchProducts() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  alert(`Searching for: ${searchTerm}`);
}
