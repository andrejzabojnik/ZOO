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

/*Validacia Formularu*/

/*Funkcia pre kontrolu jednolivych policok */


function kontrola(){

    /*Nacitanie elemntov policok do premmenych */
    let meno = document.getElementById("meno").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("tel").value;
    let suhlasim = document.getElementById("suhlasim");
    let sprava = document.getElementById("sprava").value;
    /*Premenna pre vypis chyb */
    let vypis = ""
    /*Premenna na kontrolu */
    p = 0;

    /*Podmienky pre validaciu chyb */
    if(meno == ""){
        vypis += "Zadajte meno\n"
        p = 1;
    }

    if(telefon.length < 9){
        vypis += "Telefone čislo musi obsahovať aspon 9 čislic\n"
        p = 1;
    }

    if(telefon.match(/^[0-9]+$/) == false){
        vypis += "Telefone čislo nesmie obsahovať znaky\n"
        p = 1;

    }

    if(email == ""){
        vypis +="Email je prazdny\n"
        p = 1;
    }

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
        vypis += "Nespravný tvar emailu\n"
        p = 1;
    }

    if(sprava == ""){
        vypis += "Správa nesmie byť prázdna\n"


    }

    if(suhlasim.checked == false){
        vypis += "Zaškrtnite suhlasim s podmienkami\n"
        p = 1;
    }

    /*Presmerovanie na stranku thank_you alebo vypis chyb */
    if(p == 0){
        window.location.href = "thank_you.html"
    }
    else{
        alert(vypis);
    }
}

/*Listener pre submit button */
let formular = document.getElementById("odoslat");
formular.addEventListener("click",kontrola);



/*AKORDEON*/

/*Nacitanie akordeonu do premenej */
var acc = document.getElementsByClassName("accordion");

/*Cyklus na pridanie listeneru na každy box akordeonu */
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    /*Premena a podmienky na zobrazenie vysuvacieho textu*/
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
