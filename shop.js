// let ArrProducts=[
//     {
//         id: 1,
//         name: "Apple 14 pro Max", 
//         image: "Apple 14 pro Max 6.7 6G RAM+128GB ROM.png",
//         price: 5000, 
//         rating: 5,
//     },   
//     {
//         id: 2,
//         name: "Apple Iphone 13 pro Max", 
//         image: "Apple Iphone 13 pro Max 6.7 Super Retina XDR Display with pro motion(6GB RAM+512GBROM) IOS 15 GREEN.png",
//         price: "2000", 
//         rating: 5,
//     },
//     {
//         id: 3,
//         name: "Apple Iphone 12 pro Max", 
//         image: "Apple Iphone 12 pro Max-6.7-inch-128GB ROM 6GB RAM.png",
//         price: "3000", 
//         rating: 4,
//     },
//     {
//         id: 4,
//         name: "Apple Iphone 11 pro Max", 
//         image: "Apple Iphone 11 pro Max-6.5--4GBRAM 256GB ROM-Space grey.png",
//         price: "4000", 
//         rating: 5,
//     },
//     {
//         id: 5,
//         name: "Apple Iphone 15 pro Max", 
//         Image: "Apple Iphone 15 pro Max 512gb-Nano Sim-Natural Titanium.png",
//         price: "5000", 
//         rating: 5,
//     },
//     {
//         id: 6,
//         name: "Apple Iphone XR-6.1", 
//         image: "Apple Iphone XR-6.1-64GB ROM 3GB RAM 2942mAh-Coral.png",
//         price: "6000", 
//         rating: 4,
//     },
//     {
//         id: 7,
//         name: "Apple Iphone Xs Max-6.5", 
//         image: "Apple Iphone Xs Max-6.5 64GB ROM 4GB RAM 3174mAh-Gold.png",
//         price: "6000", 
//         rating: 5,
//     },
//     {
//         id: 8,
//         name: "Samsung Galaxy S24", 
//        image: "Samsung Galaxy S24-6.2-256Gb Rom-8gb Ram-4000mah-Gray.png",
//         price: "77889", 
//         rating: 4,
//     },
//     {
//         id: 9,
//         name: "Samsung Galaxy S10", 
//         image: "Samsung Galaxy S10-6.1 128GB ROM-8GB ROM-8GB RAM.png",
//         price: "6000", 
//         rating: 5,
//     },
//     {
//         id: 9,
//         name: "Samsung Galaxy A15", 
//         image: "Samsung Galaxy A15 6.5GB RAM 128GB ROM ANDROID 14-Light blue.png",
//         price: "6000", 
//         rating: 5,
//     },    

// ]

// const body = document.querySelector("body");
// var products = document.querySelector(".products");
// var shoppingBasket = document.querySelector('.shoppingBasket');
// var closeCart = document.querySelector('.close');
// var productlist =document.querySelector('.productlist');
// var quantity = document.querySelector(".quantity");
// var total = document.querySelector(".total");

// let checkOutList= [];

// shoppingBasket.onclick =()=> {
//     body.classList.add("active");
// };
// closeCart.onclick =()=> {
//     body.classList.remove("active");
// };



// function onInIt() {
//     ArrProducts.forEach ((item, key) => {
//        let div = document.createElement("div");
//        div.classList.add("item");

//        let star = "";
//        for (i = 0; i < item.rating; i++ ) {
//         star +=`<i class="fa-regular fa-star"></i>`;
//        }



//        div.innerHTML = `       
//        <img src="assets/${item.image}">
//        <div class="name">${item.name}</div>
//        <div>${star}</div>
//        <div class="price"><small><i class="fa-solid fa-naira-sign"></i></small> ${item.price}</div>
//        <button onclick="addToCart(${key})"><i class="fa-duotone fa-solid fa-cart-plus"></i>Add to Cart</button>
//        `;
//        products.appendChild(div)
//     })
// }
// onInIt();

// function addToCart(Id) {
//     if (checkOutList[Id] == null) {
//         checkOutList[Id] = ArrProducts[Id];
//         checkOutList[Id].quantity = 1;
//     }else{
//         checkOutList[Id].quantity+=1;
//     }
//     reloadCart();
// }

// function reloadCart(){
//     productlist.innerHTML = "";

//     let count = 0;
//     let totalPrice = 0;


//     checkOutList.forEach((item, key) => {
//         totalPrice+=parseInt(item.price*item.quantity)
//         count+=item.quantity;
//         let li = document.createElement("li");
//         li.innerHTML = `
//         <img src="assets/${item.image}"/>
//         <div>${item.name}</div>
//         <div>${item.price}</div>
//         <div>
//         <button onclick="changeQuantity(${key}, ${item.quantity-1})>-</button>
//         <div class="count">${item.quantity}</div>
//         <div>0</div>
//         <button onclick="changeQuantity(${key}, ${item.quantity+1})>>-</button>
//         </div>
//         `;
        
     
//         productlist.appendChild(li);
//     });

//     total.innerHTML = `<small>SubTotal (${count} items)#</small>` +totalPrice;
//     quantity.innerHTML = count;
// }

// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete checkOutList[key];
//     }
//     else{
//         checkOutList[key].quantity = quantity;
//     }
//     reloadCart()
// }


// Image data array
// const images = [
//     { url: 'img (1).png', description: 'This is image 1' },
//     { url: 'img (2).png', description: 'This is image 2' },
//     { url: 'img (3).png', description: 'This is image 3' }
//   ];

//   // Get the image list and description container elements
// const imageList = document.getElementById('image-list');
// const descriptionContainer = document.getElementById('description-container');

// // Function to generate image items
// function createImageItem(image) {
//   const img = document.createElement('img');
//   img.src = image.url;
//   img.className = 'image-item';
//   img.addEventListener('click', () => {
//     const description = document.createElement('div');
//     description.innerHTML = image.description;
//     descriptionContainer.innerHTML = '';
//     descriptionContainer.appendChild(description);
//   });
//   imageList.appendChild(img);
// }

// // Generate image items
// images.forEach((image) => {
//   createImageItem(image);
// });






const products = [
    {
        id: 1,
        image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
        description: 'nokia 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
        price: 1898000,
        // rating: 5,
    },
    {
      id: 1,
      image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
      description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
      price: 1898000
  },
  {
    id: 1,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 2,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 3,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'samsung 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 4,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 5,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 6,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 7,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 8,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 9,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 10,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 11,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 12,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 13,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },
  {
    id: 14,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },{
    id: 15,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  
  },{
    id: 16,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },{
    id: 17,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },{
    id: 18,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },{
    id: 19,
    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127',
    description: 'Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium <br> Brand: Apple | Similar products from Apple <br> ₦ 1,898,000 ₦ 3,300,000 42% <br> In stock <br> + shipping from ₦500 to every state in Nigeria <br> 5 out of 5 <br> (1 verified rating)',
    price: 1898000
  },{
    id: 20,
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






