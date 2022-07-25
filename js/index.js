
confirm("Estas por Ingresar al primer Desafio Complementario, ¿Desea Continuar?")

//debugger

let nombre = ""
nombre = nombre.toLocaleLowerCase()

let contraseña = ""
let = login = false

// While


while(login === false){
    nombre = prompt("Ingrese su nombre")
    contraseña = prompt("Ingrese su clave")
    if(nombre === "franco" && contraseña === "desafio1"){
        console.log("Bienvenido al Desafio Complementario" + " " + nombre)
        login = true
    }else{
        alert(" ⛔️⛔️Ingrese bien su nombre y contraseña⛔️⛔️")
    }
}


// SENTENCIA for

let numero = parseInt(prompt("Ingrese un numero"))
let limite = numero * 2

for (let i = numero; i <= limite; i++){
    console.log("Repeticion de Numero:" , i)
}
