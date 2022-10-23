// v   VARIAVEIS
let count = 1;
let cartas = "";
let cartasUsuario = [];
let contador = 0;
let carta1, carta2;
let qtdCartas = 0;
const img = ["./img/0.png", "./img/1.gif", 
"./img/2.gif", "./img/3.gif", 
"./img/4.gif", "./img/5.gif",
"./img/6.gif", "./img/7.gif"]

function iniciar (){
    while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0){
        qtdCartas = Number(prompt("INSIRA UM VALOR VÁLIDO:\nMínimo: 4        Máximo: 14        OBS . : Valores Pares"));
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
}


function comparador() { 
	return Math.random() - 0.5; 
}

function clickCarta (seletor){
    contador++
    if(seletor.classList.contains("virada") === true){
        seletor.classList.remove("virada")
        carta1 = undefined;
    }
    else if (carta1 === undefined){
        seletor.classList.add("virada")
        carta1 = seletor;
    } 
    else if(carta2 === undefined){
        seletor.classList.add("virada")
        carta2 = seletor;
        setTimeout(id, 1000)
    }   
}

function id (){
    let cartaA = carta1.classList.value;
    let cartaB = carta2.classList.value;
    if (cartaA !== cartaB){
        carta1.classList.remove("virada")
        carta2.classList.remove("virada")
    } else {
        fim()
    }

    carta1 = undefined;
    carta2 = undefined;
}

function fim (){
    let fim = document.querySelectorAll(".virada")
    if (fim.length === qtdCartas){
        alert(`Você ganhou em ${contador} jogadas!  🥳🎉`)
        let continuar = prompt("DESEJA JOGAR NOVAMENTE?\nContinuar: sim        Cancelar: não")
        console.log(typeof(continuar))
        while (continuar !== "sim" && continuar !== "não"){
            continuar = prompt(`VALOR INVÁLIDO! TENTE NOVAMENTE\nContinuar: sim        Cancelar: não`)
        }

        if (continuar === "sim"){
            count = 1;
            contador = 0;
            qtdCartas = 0;
            cartas.innerHTML = "";
            cartasUsuario = [];
            setTimeout(iniciar, 500)
        } else {
            const a = document.querySelector(".final")
            a.classList.add("finalClicado")
        }
    }
}

function finall(seletor){
    seletor.classList.remove("vermelha")
    seletor.classList.add("click")
    setTimeout(enviar, 500)
}

function enviar (){
    let mensagem = encodeURIComponent(`SALVE 🤙🏻`)
    window.open("http://wa.me/5598984358019?text=" + mensagem)
}

iniciar()