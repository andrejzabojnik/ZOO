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



/*KREATIVNY BOD! - LIGHT BOX GALERIA */

//Pridavame elementy do premennych
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");
animals = ["Lev Africký","Tiger Džunglovy","Jaguár Americky","Slon Africký","Medveď Grizly","Nosorožec Tuponosý", "Šimpanz Učenlivý","Koala Medvedíková","Lemur Kata"]
//Cyklus sa spusti po načitani stranky
window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        let newIndex = i; //Dame hodnotu i do premenej
        let clickedImgIndex; //Vytvorime premenu
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //dame do premenej index kliknuteho obrazka
            function preview(){
                currentImg.textContent = animals[newIndex]; //Nacitame meno zvierata
                let imageURL = gallery[newIndex].querySelector("img").src; //ziskame adresu URL obrazka na ktoru použivatel klikol
                previewImg.src = imageURL; //prechádzajúci používateľ klikol na adresu URL obrázka v náhľade obrázka
            }
            preview(); //zavolame funckiu

            //Do premenych priradime ovladacie šipky
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //ak sa hodnota indexu rovná 0, potom sa skryje začinajuca šipka
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //ak je hodnota indexu väčšia a rovná sa dĺžke galérie o -1, potom sa skryje konečna šipka
                nextBtn.style.display = "none"; 
            }
            /*Nastavime spustenie funkcii pri kliknuti */
            prevBtn.onclick = ()=>{ 
                newIndex--; //index klesne
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //index zraste
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }

            //pridame na body overflox hidden štyl
            document.querySelector("body").style.overflow = "hidden";
            //pridame klasu ktora spusti otvorenie okna
            previewBox.classList.add("show"); 
            //temne pozadie na stranke po otvoreni obrazku
            shadow.style.display = "block"; 
            // pre zatvorenie okna
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //priradenie indexu obrázkov, na ktorý používateľ prvýkrát klikol, novému indexu
                // priradime na tlačitka display block
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                //zmažeme klasu tym sa zatvori okno
                previewBox.classList.remove("show");
                //tmave pozadie zmizne
                shadow.style.display = "none";
                //dame overflox scroll na body
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    }
}