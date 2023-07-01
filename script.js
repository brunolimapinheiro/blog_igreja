const box= document.querySelector(".conteiner"); 
const imagens= document.querySelectorAll(".conteiner img");
const selecao = document.querySelector(".sobre");  // variaveis para manipular as divs
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
} // função para criar meu slider

setInterval(slider, 2000); // intervalo quando as fotos aparecerem


