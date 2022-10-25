// v   VARIAVEIS
let count = 1;
let cartas = "";
let cartasUsuario = [];
let contador = 0;
let carta1, carta2;
let qtdCartas = 0;
const img = [ 
"bobrossparrot.gif",
"explodyparrot.gif",
"fiestaparrot.gif",
"metalparrot.gif",
"revertitparrot.gif",
"tripletsparrot.gif",
"unicornparrot.gif",
]

img.sort(comparador);

function iniciar (){
    while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0){
        qtdCartas = Number(prompt("INSIRA UM VALOR VÁLIDO:\nMínimo: 4        Máximo: 14        OBS . : Valores Pares"));
    }
    
    for(let i = 0; i < (qtdCartas/2); i++){
        cartasUsuario.push(`
        <ul class="card" onclick="clickCarta(this)">
            <li class="back-face face"><img src="/img/back.png"></li>
            <li class="front-face face"><img src="./img/${img[i]}"></li>
        </ul>
        `)
        cartasUsuario.push(`
        <ul class="card" onclick="clickCarta(this)">
            <li class="back-face face"><img src="/img/back.png"></li>
            <li class="front-face face"><img src="./img/${img[i]}"></li>
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
    if(seletor.classList.contains("virada")){
        return;
    }

    if (carta1 === undefined || carta2 === undefined){
        contador++
        seletor.classList.add("virada")
        if (carta1 === undefined){
            carta1 = seletor;
        } 
        else if(carta2 === undefined){
            carta2 = seletor;
            setTimeout(id, 1000)
        } 
    }
      
}

function id (){
    if (carta1.innerHTML !== carta2.innerHTML){
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
            setTimeout(() => {
                window.location.reload()
            }, 1000);
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