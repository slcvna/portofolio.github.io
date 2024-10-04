/** creating button click show hide navbar **/
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed=new Typed(".input",{
    strings:["Data Engineer","AI Engineer","Backend Developer"],
    typedSpeed:70,
    backSpeed:80,
    loop:true
})