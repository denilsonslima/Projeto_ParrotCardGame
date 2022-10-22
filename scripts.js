let count = 1;
let cartas = "";
const cartasUsuario = [];
const img = ["./img/0.png", "./img/1.gif", 
"./img/2.gif", "./img/3.gif", 
"./img/4.gif", "./img/5.gif",
"./img/6.gif", "./img/7.gif"]

let qtdCartas = prompt("ESCOLHA O NÚMERO DE CARTAS:\nMínimo: 4        Máximo: 14        OBS . : Valores Pares");

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0){
    qtdCartas = prompt("INSIRA UM VALOR VÁLIDO:\nMínimo: 4        Máximo: 14        OBS . : Valores Pares");
}

for(let i = 0; i < qtdCartas; i+=2){
    cartas = document.querySelector(".main");
    cartas.innerHTML += `
    <ul class="card" onclick="clickCarta(this)">
        <li class="back-face face"><img src="/img/0.png"></li>
        <li class="front-face face"><img src="${img[count]}"></li>
    </ul>`
    cartas.innerHTML += `
    <ul class="card" onclick="clickCarta(this)">
        <li class="back-face face"><img src="/img/0.png"></li>
        <li class="front-face face"><img src="${img[count]}"></li>
    </ul>`
    count++
}

function clickCarta (seletor){
    seletor.classList.toggle("virada")
}