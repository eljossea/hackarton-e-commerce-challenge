let ArrProducts=[
    {
        id: 1,
        name: "Apple 14 pro Max", 
        image: "Apple 14 pro Max 6.7 6G RAM+128GB ROM.png",
        price: 5000, 
        rating: 5,
    },   
    {
        id: 2,
        name: "Apple Iphone 13 pro Max", 
        image: "Apple Iphone 13 pro Max 6.7 Super Retina XDR Display with pro motion(6GB RAM+512GBROM) IOS 15 GREEN.png",
        price: "2000", 
        rating: 5,
    },
    {
        id: 3,
        name: "Apple Iphone 12 pro Max", 
        image: "Apple Iphone 12 pro Max-6.7-inch-128GB ROM 6GB RAM.png",
        price: "3000", 
        rating: 4,
    },
    {
        id: 4,
        name: "Apple Iphone 11 pro Max", 
        image: "Apple Iphone 11 pro Max-6.5--4GBRAM 256GB ROM-Space grey.png",
        price: "4000", 
        rating: 5,
    },
    {
        id: 5,
        name: "Apple Iphone 15 pro Max", 
        Image: "Apple Iphone 15 pro Max 512gb-Nano Sim-Natural Titanium.png",
        price: "5000", 
        rating: 5,
    },
    {
        id: 6,
        name: "Apple Iphone XR-6.1", 
        image: "Apple Iphone XR-6.1-64GB ROM 3GB RAM 2942mAh-Coral.png",
        price: "6000", 
        rating: 4,
    },
    {
        id: 7,
        name: "Apple Iphone Xs Max-6.5", 
        image: "Apple Iphone Xs Max-6.5 64GB ROM 4GB RAM 3174mAh-Gold.png",
        price: "6000", 
        rating: 5,
    },
    {
        id: 8,
        name: "Samsung Galaxy S24", 
       image: "Samsung Galaxy S24-6.2-256Gb Rom-8gb Ram-4000mah-Gray.png",
        price: "77889", 
        rating: 4,
    },
    {
        id: 9,
        name: "Samsung Galaxy S10", 
        image: "Samsung Galaxy S10-6.1 128GB ROM-8GB ROM-8GB RAM.png",
        price: "6000", 
        rating: 5,
    },
    {
        id: 9,
        name: "Samsung Galaxy A15", 
        image: "Samsung Galaxy A15 6.5GB RAM 128GB ROM ANDROID 14-Light blue.png",
        price: "6000", 
        rating: 5,
    },    

]

const body = document.querySelector("body");
var products = document.querySelector(".products");
var shoppingBasket = document.querySelector('.shoppingBasket');
var closeCart = document.querySelector('.close');
var productlist =document.querySelector('.productlist');
var quantity = document.querySelector(".quantity");
var total = document.querySelector(".total");

let checkOutList= [];

shoppingBasket.onclick =()=> {
    body.classList.add("active");
};
closeCart.onclick =()=> {
    body.classList.remove("active");
};



function onInIt() {
    ArrProducts.forEach ((item, key) => {
       let div = document.createElement("div");
       div.classList.add("item");

       let star = "";
       for (i = 0; i < item.rating; i++ ) {
        star +=`<i class="fa-regular fa-star"></i>`;
       }



       div.innerHTML = `       
       <img src="assets/${item.image}">
       <div class="name">${item.name}</div>
       <div>${star}</div>
       <div class="price"><small><i class="fa-solid fa-naira-sign"></i></small> ${item.price}</div>
       <button onclick="addToCart(${key})"><i class="fa-duotone fa-solid fa-cart-plus"></i>Add to Cart</button>
       `;
       products.appendChild(div)
    })
}
onInIt();

function addToCart(Id) {
    if (checkOutList[Id] == null) {
        checkOutList[Id] = ArrProducts[Id];
        checkOutList[Id].quantity = 1;
    }else{
        checkOutList[Id].quantity+=1;
    }
    reloadCart();
}

function reloadCart(){
    productlist.innerHTML = "";

    let count = 0;
    let totalPrice = 0;


    checkOutList.forEach((item, key) => {
        totalPrice+=parseInt(item.price*item.quantity)
        count+=item.quantity;
        let li = document.createElement("li");
        li.innerHTML = `
        <img src="assets/${item.image}"/>
        <div>${item.name}</div>
        <div>${item.price}</div>
        <div>
        <button onclick="changeQuantity(${key}, ${item.quantity-1})>-</button>
        <div class="count">${item.quantity}</div>
        <div>0</div>
        <button onclick="changeQuantity(${key}, ${item.quantity+1})>>-</button>
        </div>
        `;
        
     
        productlist.appendChild(li);
    });

    total.innerHTML = `<small>SubTotal (${count} items)#</small>` +totalPrice;
    quantity.innerHTML = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete checkOutList[key];
    }
    else{
        checkOutList[key].quantity = quantity;
    }
    reloadCart()
}
