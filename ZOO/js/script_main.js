/*Navbar and hamburger */

/*Načitanie elementov do premennych*/ 
let btn = document.querySelector(".btn");
let collection = document.getElementsByClassName("items");
let list = document.querySelector("ul li")

/*Listener pre kliknutie na hamburger a funkcia ktora pridá pomocou cyklu foreach clasu na zobrezanie pre všetky prvky*/
btn.addEventListener("click",function(){
	Array.from(collection).forEach(function(element) {
		element.classList.toggle("show");
	});
})


/*Slide show*/

/*Načitanie elementov do premennych*/ 
var slide = document.getElementById("slider");
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

/*Na každe tlačitko vložime funkciu pre zobrazenie jednotlivych obrazkov
Obrazky posuvame pomocov transform po osy X*/
btn1.onclick = function () {
    slide.style.transform = "translateX(0px)";
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
};
btn2.onclick = function () {
    slide.style.transform = "translateX(-100%)";
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
};
btn3.onclick = function () {
    slide.style.transform = "translateX(-200%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    btn4.classList.remove('active');
};
btn4.onclick = function () {
    slide.style.transform = "translateX(-300%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.add('active');
};


/*KREATIVNY BOD POOPUP*/

/*Nastavenie vyskaconieho okna po 1000milisekund po otvoreni stranky*/
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});

/*Listener pre tlačitko X na zatvorenie okna*/
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});