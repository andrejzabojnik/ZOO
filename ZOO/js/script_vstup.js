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



/* KREATIVNY BOD! Datum a hodiny s realnym časom a ukazatelom otvorenia alebo zatvorenia ZOO*/

//funkcia na aktualizaciu hodin a datumu
function updateClock(){
    //Načitanie aktualneho datumu do premeny
    var now = new Date();
    /*Načitame všetky protrebne hodnoty do kolekcie dname*/
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "PM";
    //Načitame element na vypis zatovorenia alebo otvorenia   
    var doba = document.querySelector(".doba")

    //Podmienky pre vypis zatvorenia alebo otvorenia  
        if(dname == "1"){
            if(8 <= hou && hou < 16){
                doba.innerHTML = "OTVORENÉ"
                doba.style.color = "green"
            }else{
                doba.innerHTML = "ZATVORENÉ"
                doba.style.color = "red" 
            }          
        }
        if(dname == "2"){
            if(9 <= hou && hou < 18){
                doba.innerHTML = "OTVORENÉ"
                doba.style.color = "green"
            }else{
                doba.innerHTML = "ZATVORENÉ"
                doba.style.color = "red" 
            }            
        }
        if(dname == "3"){
            if(9 <= hou && hou < 19){
                doba.innerHTML = "OTVORENÉ"
                doba.style.color = "green"
            }else{
                doba.innerHTML = "ZATVORENÉ"
                doba.style.color = "red" 
            }            
        }
        if(dname == "4"){
            if(9 <= hou && hou < 18){
                doba.innerHTML = "OTVORENÉ"
                doba.style.color = "green"
            }else{
                doba.innerHTML = "ZATVORENÉ"
                doba.style.color = "red" 
            }             
        }
        if(dname == "5"){
            if(9 <= hou && hou < 17){
                doba.innerHTML = "OTVORENÉ"
                doba.style.color = "green"
            }else{
                doba.innerHTML = "ZATVORENÉ"
                doba.style.color = "red" 
            }             
        }
        if(dname == "6"){
            if(10 <= hou && hou < 15){
                doba.innerHTML = "OTVORENÉ"
                doba.style.color = "green"
            }else{
                doba.innerHTML = "ZATVORENÉ"
                doba.style.color = "red" 
            }            
        }
        if(dname == "0"){
            doba.innerHTML = "ZATVORENÉ"
            doba.style.color = "red"
                    
        }
    
     
       

        //Funkcia pre načitanie datumu a hodin
        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }
        //Zoznamy s mesiacmi dnami a ID elementov
        var months = ["Január", "Február", "Marec", "April", "Maj", "Jún", "Júl", "August", "September", "Oktober", "November", "December"];
        var week = ["Nedela", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds",];
        //Vložene hodnot do elemntov
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
          document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
  //Funkcia na opakovany interval
  function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
  }

//Funkcia sa spusti po otvoreni okna
  window.addEventListener("load", initClock());
