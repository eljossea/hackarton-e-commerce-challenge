const products = [
  {
      id: 1,
      image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
      description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
      price: 1898000
  },
  // Add more product objects here
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');
const productImage = document.getElementById('product-image');
const productDescription = document.getElementById('product-description');
const cartDiv = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const totalQuantityElement = document.getElementById('total-quantity');
const checkoutDiv = document.getElementById('checkout');
const checkoutItems = document.getElementById('checkout-items');
const checkoutTotalPriceElement = document.getElementById('checkout-total-price');
const checkoutTotalQuantityElement = document.getElementById('checkout-total-quantity');
const checkoutForm = document.getElementById('checkout-form');

let currentProduct;

function renderProductList() {
  productList.innerHTML = '';
  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
          <img src="${product.image}" alt="Product Image" onclick="showProductDetails(${product.id})">
          <p>${product.description.split('<br>')[0]}</p>
      `;
      productList.appendChild(productDiv);
  });
}

function showProductDetails(productId) {
  currentProduct = products.find(p => p.id === productId);
  productImage.src = currentProduct.image;
  productDescription.innerHTML = currentProduct.description;
  productList.style.display = 'none';
  productDetails.style.display = 'flex';
}

function showProductList() {
  productList.style.display = 'flex';
  productDetails.style.display = 'none';
  cartDiv.style.display = 'none';
  checkoutDiv.style.display = 'none';
}

function addToCart() {
  const cartItem = cart.find(item => item.id === currentProduct.id);
  if (cartItem) {
      cartItem.quantity += 1;
  } else {
      cart.push({ ...currentProduct, quantity: 1 });
  }
  updateCartSummary();
  saveCart();
  alert('Product added to cart!');
}

function showCart() {
  cartItems.innerHTML = '';
  cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
          <img src="${item.image}" alt="Product Image">
          <p>${item.description.split('<br>')[0]}</p>
          <p>Price: ₦${item.price}</p>
          <p>Quantity: <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)"></p>
          <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartItems.appendChild(cartItem);
  });
  productList.style.display = 'none';
  productDetails.style.display = 'none';
  cartDiv.style.display = 'flex';
}

function hideCart() {
  cartDiv.style.display = 'none';
  productList.style.display = 'flex';
}

function updateQuantity(productId, quantity) {
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
      cartItem.quantity = parseInt(quantity);
      updateCartSummary();
      saveCart();
  }
}

function removeFromCart(productId) {
  const cartIndex = cart.findIndex(item => item.id === productId);
  if (cartIndex > -1) {
      cart.splice(cartIndex, 1);
      showCart();
      updateCartSummary();
      saveCart();
  }
}

function updateCartSummary() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  totalQuantityElement.textContent = totalQuantity;
  totalPriceElement.textContent = totalPrice;
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function showCheckout() {
  checkoutItems.innerHTML = '';
  cart.forEach(item => {
      const checkoutItem = document.createElement('div');
      checkoutItem.className = 'checkout-item';
      checkoutItem.innerHTML = `
          <img src="${item.image}" alt="Product Image">
          <p>${item.description.split('<br>')[0]}</p>
          <p>Price: ₦${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
      `;
      checkoutItems.appendChild(checkoutItem);
  });

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  checkoutTotalQuantityElement.textContent = totalQuantity;
  checkoutTotalPriceElement.textContent = totalPrice;

  cartDiv.style.display = 'none';
  checkoutDiv.style.display = 'flex';
}

function hideCheckout() {
  checkoutDiv.style.display = 'none';
  cartDiv.style.display = 'flex';
}

checkoutForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Order placed successfully!');
  cart.length = 0; // Clear the cart
  updateCartSummary();
  saveCart();
  showProductList();
});

renderProductList();
updateCartSummary();

