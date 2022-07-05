let incremento = document.getElementById("incremento");
let decremento = document.getElementById("decremento");
let dado = document.getElementById("contador");

let contador = 0 ;

function incrementar() {
    dado.innerHTML = contador++
    contador > 20? contador = 20 : false
    contador > 10? dado.style.color = "#57f129" : false
    console.log(contador)
}

function decrementar() {
    dado.innerText = contador--
    contador < 0? contador = 0 : false
    contador < 10? dado.style.color = "white" : false
    console.log(contador)
}

incremento.addEventListener("click", incrementar);
decremento.addEventListener("click", decrementar);

