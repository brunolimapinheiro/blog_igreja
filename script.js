const box= document.querySelector(".conteiner");
const imagens= document.querySelectorAll(".conteiner img");
let contador=0;
function slider(){
    contador++;
    if(contador > 1){
    contador=0;
    box.style.transform=`translateX(0)`;
}
   else{
        box.style.transform=`translateX(${-contador*720}px)`;
   }


}
setInterval(slider, 2000);