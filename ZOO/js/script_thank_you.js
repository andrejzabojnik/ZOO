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