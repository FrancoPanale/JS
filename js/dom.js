const subTitulo = document.getElementById("subtitulo")
const subTitulo2 = document.getElementById("subtitulo2")
const parrafo = document.getElementsByClassName("horario")
const ACrear = document.getElementById("parrafoACrear")

function cambiarTexto(){
    subTitulo.innerText = "Cambiamos desde DOM en js"
    subTitulo2.innerText = "Cambiamos el otro Subtitulo desde DOM en js"
    horario.innerText = "Horario de atencion es de lunes a viernes de 8 a 13hs y 15 a 20hs"
}

function agregarParrafo(){
    ACrear.innerHTML = "<p>Agregamos un Parrafo desde DOM en JS</p>"
}