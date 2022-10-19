let qtdCartas = prompt("ESCOLHA O NÚMERO DE CARTAS:\nMínimo: 4        Máximo: 14        OBS . : Valores Pares");

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0){
    qtdCartas = prompt("INSIRA UM VALOR VÁLIDO:\nMínimo: 4        Máximo: 14        OBS . : Valores Pares");
}

for(let i = qtdCartas/2; i > 1; i--){
    let cartas = document.querySelector(".main .coluna-superior");
    cartas.innerHTML += `<div class="cartas"><img src="./img/papagaio.png"></div>`
    let cartas1 = document.querySelector(".main .coluna-inferior");
    cartas1.innerHTML += `<div class="cartas"><img src="./img/papagaio.png"></div>`
}