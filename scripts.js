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
    cartasUsuario.push(`
    <ul class="card img${count}" onclick="clickCarta(this)">
        <li class="back-face face"><img src="/img/0.png"></li>
        <li class="front-face face"><img src="${img[count]}"></li>
    </ul>
    `)
    cartasUsuario.push(`
    <ul class="card img${count}" onclick="clickCarta(this)">
        <li class="back-face face"><img src="/img/0.png"></li>
        <li class="front-face face"><img src="${img[count]}"></li>
    </ul>
    `)
    count++
}

cartasUsuario.sort(comparador)

for(let i = 0; i < qtdCartas; i++){
    cartas = document.querySelector(".main");
    cartas.innerHTML += cartasUsuario[i]
}

function comparador() { 
	return Math.random() - 0.5; 
}

let carta1, carta2;
function clickCarta (seletor){
    if(carta1 === undefined){
        seletor.classList.add("virada")
        carta1 = seletor;
    }
    else if(carta2 === undefined){
        seletor.classList.add("virada")
        carta2 = seletor;
        setTimeout(id, 2000)
    }
}

function id (){
    let cartaA = carta1.classList.value;
    let cartaB = carta2.classList.value;
    if (cartaA !== cartaB){
        carta1.classList.remove("virada")
        carta2.classList.remove("virada")
    }

    carta1 = undefined;
    carta2 = undefined;
}
