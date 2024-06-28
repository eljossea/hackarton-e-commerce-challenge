
let productImg = document.getElementById("productImg")
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "assets/image1.jpg"
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    productImg.src = "assets/image2.jpg"
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}