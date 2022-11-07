// VARIAVEIS
const botao = document.querySelectorAll(".manualBotao");
const carrossel = document.querySelector(".carrossel");
let contador = 0;


// LOOP
for (let i = 0; i < botao.length; i++) {
  botao[i].addEventListener("click", ()=>{
  carrossel.style.backgroundImage = `url(./${i}.jpg)`
  })
  
}
setInterval(()=>{
  contador = contador%3;
  carrossel.style.backgroundImage = `url(./${contador}.jpg)`
  contador++;}
,2000);


