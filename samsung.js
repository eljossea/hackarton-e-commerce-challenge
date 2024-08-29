
const products = [
    // {
    //   id: 1,
    //   image: 'assets/Apple Iphone 15 pro Max 512gb-Nano Sim-Natural Titanium.png',
    //   description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    //   price: 1898000
    // },
    // {
    //   id: 2,
    //   image: 'assets/Apple 14 pro Max 6.7 6G RAM+128GB ROM.png',
    //   description: 'Apple IPhone 14 Pro Max 6.7 6G RAM+128GB ROM - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    //   price: 1898000
    // },
    // {
    //   id: 3,
    //   image: 'assets/Apple Iphone 13 pro Max 6.7 Super Retina XDR Display with pro motion(6GB RAM+512GBROM) IOS 15 GREEN.png',
    //   description: 'Apple Iphone 13 pro Max 6.7 Super Retina XDR Display with pro motion(6GB RAM+512GBROM) IOS 15 GREEN',
    //   price: 1898000
    // },
    // {
    //   id: 4,
    //   image: 'assets/Apple Iphone 12 pro Max-6.7-inch-128GB ROM 6GB RAM.png',
    //   description: 'Apple IPhone 12 Pro Max - 6.7-Inch - 128GB ROM, 6GB RAM - 2815mAh <br> Brand: Apple | Similar products from Apple <br>  3 units left <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 880,000'
    // },
    // {
    //   id: 5,
    //   image: 'assets/Apple Iphone 11 pro Max-6.5--4GBRAM 256GB ROM-Space grey.png',
    //   description: 'Apple IPhone 11 Pro Max - 6.5" - 4GB RAM, 64GB ROM - Gold <br> Brand: Apple | Similar products from Apple <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 760,000'
    // },
    // {
    //   id: 6,
    //   image: 'assets/Apple Iphone XR-6.1-64GB ROM 3GB RAM 2942mAh-Coral.png',
    //   description: 'Apple IPhone XR - 6.1" - 64GB ROM, 3GB RAM, 2942mAh <br> Brand: Apple | Similar products from Apple <br>  + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 760,000'
    // },
    // {
    //   id: 7,
    //   image: 'assets/Apple Iphone Xs Max-6.5 64GB ROM 4GB RAM 3174mAh-Gold.png',
    //   description: 'Apple IPhone XS Max 256GB Gold, + Power Bank <br> Brand: Apple | Similar products from Apple <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 495,000'
    // },
    {
      id: 8,
      image: 'assets/samsung_fold.png',
      description: 'Samsung Galaxy Z Fold 4 1 SIM - 12GB RAM, 512GB - Black <br> Brand: Samsung | Similar products from Samsung <br>  + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
      price: '₦ 1,000,000'
    },
    {
      id: 9,
      image: 'assets/Samsung Galaxy S24-6.2-256Gb Rom-8gb Ram-4000mah-Gray.png',
      description: 'Samsung Galaxy S24 Ultra 5G - 6.8" (1TB/12GB) 5000mAh - Grey <br> Brand: Samsung | Similar products from Samsung <br>  + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
      price: '₦ 2,880,000'
    },
    {
      id: 10,
      image: 'assets/Samsung Galaxy S21 Ultra.png',
      description: 'Samsung Galaxy S21 Ultra 5G - 6.8, 256GB / 12GB, Single Sim -Black <br> Brand: Samsung | Similar products from Samsung <br>  + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)', 
      price: '₦ 740,000'
    },
    {
      id: 11,
      image: 'assets/Samsung Galaxy S10-6.1 128GB ROM-8GB ROM-8GB RAM.png',
      description: 'Samsung Galaxy S10 6.1" Single Sim 128gb/8gb <br> Brand: Samsung | Similar products from Samsung <br>  + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
      price: '₦ 275,000'
    },
    {
      id: 12,
      image: 'assets/samsung-galaxy-s10-5g-600x600.png',
      description: 'Samsung Galaxy S10 5G 8gb Ram 256GB Rom Single Sim Black <br> Brand: Samsung | Similar products from Samsung <br>  + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
      price: '₦ 430,000'
    },
    {
      id: 13,
      image: 'assets/Samsung Galaxy A33.png',
      description: 'Samsung Galaxy A33 5G, 6GB/128GB Memory - Black <br> Brand: Samsung | Similar products from Samsung <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
      price: '₦ 493,500'
    },
    {
      id: 14,
      image: 'assets/Samsung Galaxy A22.png',
      description: 'Samsung Galaxy A22 5G, 4GB/62GB Memory - Black <br> Brand: Samsung | Similar products from Samsung <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
      price: '₦ 300,500'
    },
    {
      id: 15,
      image: 'assets/Samsung Galaxy A17.png',
      description: 'Samsung Galaxy A17, 4GB/62GB Memory <br> Brand: Samsung | Similar products from Samsung <br> + shipping from ₦ 600 to LEKKI-AJAH',
      price: '₦ 250,000'
    
    },
    {
      id: 16,
      image: 'assets/Samsung Galaxy A15 6.5GB RAM 128GB ROM ANDROID 14-Light blue.png',
      description: 'Samsung Galaxy A15, 4GB/62GB Memory - Black <br> Brand: Samsung | Similar products from Samsung <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
      price: '₦ 200,000'
    },
    {
      id: 17,
      image: 'assets/Samsung+Galaxy+A15+Blue+Black+Hero - Copy.png',
      description: 'Samsung Galaxy A22 5G, 4GB/62GB Memory - Black <br> Brand: Samsung | Similar products from Samsung <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
      price: '₦ 210,000'
    },
    // {
    //   id: 18,
    //   image: 'assets/Nokia C31.png',
    //   description: 'Nokia C31 - 6.75" HD+ - 3GB/32GB MEMORY- 4G LTE- 5050mAh- Charcoal  <br> Brand: Nokia | Similar products from Nokia  <br> Few units left <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 81,990'
    // },
    // {
    //   id: 19,
    //   image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    //   description: 'Nokia C30 6.82" HD+ 3GB RAM/64GB ROM Android 11 - Green Brand: Nokia | Similar products from Nokia  3 units left <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 81,990'
    // },
    // {
    //   id: 20,
    //   image: 'assets/Nokia G10.png',
    //   description: 'Nokia G10, 6.5" HD+ (4GB RAM, 64GB ROM) Android 11 (13/2/2)MP + 8MP Selfie - 4G - 5050mAh - Fingerprint- Dark Blue <br> Brand: Nokia | Similar products from Nokia  <br> In stock <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 97,900'
    // },
    // {
    //   id: 21,
    //   image: 'assets/Nokia T20.png',
    //   description: 'Nokia T20 -10.4” 4GB/64GB, 8MP Camera, LTE - 8200mAh - Ocean Blue <br> Brand: Nokia | Similar products from Nokia <br>  9 units left <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 177,990'
    // },
    // {
    //   id: 22,
    //   image: 'assets/Nokia C12.png',
    //   description: 'Nokia C12 - 6.3 2GB RAM, 64GB ROM 8MP Dual SIM - Light Mint <br> Brand: Nokia | Similar products from Nokia <br>  1 units left <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 79,490'
    // },
    // {
    //   id: 23,
    //   image: 'assets/Nokia C22.png',
    //   description: 'Nokia C22 - 6.5" 2+64GB Memory, 13/8/2MP 4G - Charcoal <br> Brand: Nokia | Similar products from Nokia <br>  1 units left <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 148,500'
    // },
    // {
    //   id: 24,
    //   image: 'assets/Nokia G11.png',
    //   description: 'Nokia G11 PLUS TA-1421 DS 3/64 GREY < br> Brand: Nokia | Similar products from Nokia <br>  2 units left <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 159,999'
    // },
    // {
    //   id: 25,
    //   image: 'assets/Nokia X30.png',
    //   description: 'Nokia X30 - Snapdragon 5G - 6.43" (8GB RAM, 256GB ROM) Android 12 (50/13)MP + 16MP Selfie - Dual Sim - 4200mAh - Cloudy Blue <br> Brand: Nokia | Similar products from Nokia  <br> + shipping from ₦ 600 to LEKKI-AJAH (SANGOTEDO)',
    //   price: '₦ 769,999'
    // },
    
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
    // var shoppingBasket = document.querySelector('.shoppingBasket');
    
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
    
    
  
  
  
  
  // Add event listener to search input
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', filterProducts);
  
  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
      product.description.toLowerCase().includes(searchTerm)
    );
    renderProductList(filteredProducts);
  }
  
  function renderProductList(filteredProducts = products) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="Product Image" onclick="showProductDetails(${product.id})">
            <p>${product.description.split('<br>')[0]}</p>
        `;
        productList.appendChild(productDiv);
    });
  }
  
  
  function openWhatsApp() {
    window.open('https://wa.me/+2347041668088', '_blank');
}
  
  
  
  