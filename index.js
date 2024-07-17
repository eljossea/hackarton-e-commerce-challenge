
let productImg = document.getElementById("productImg")
let btn = document.getElementsByClassName("btnA");

btnA[0].onclick = function(){
    productImg.src = "assests/bg-phone.png"
    for(bt of btnA){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btnA[1].onclick = function(){
    productImg.src = "assets/cart.jpeg"
    for(bt of btnA){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}





