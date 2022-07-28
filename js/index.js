

let usuario = ""
usuario = usuario.toLocaleLowerCase()

let contraseña = ""
let = login = false


while(login === false){
    usuario = prompt("Ingrese su nombre")
    contraseña = prompt("Ingrese su clave")
    if(usuario != "franco" && contraseña != "franco"){
        console.log("Bienvenido", usuario)
        login = true
    }else{
        alert(" Ingrese un usuario y/o contraseña correcta! ⛔️")
    }
}
    
debugger


let = producto = prompt("Que desea comprar? remera, buzo o campera?")
    producto = producto.toLocaleLowerCase()
let = cantidad = parseInt(prompt("cuantas prendas queres?"))

    switch (producto) {
        case "remera":
            console.log("elegiste", cantidad, "remera y/o remeras con valor de ", '3000'*cantidad)
            
            break
        
        case "buzo":
            console.log("elegiste", cantidad, "buzo y/o buzos con valor de", '5000'*cantidad)

            break

        case "campera":
            console.log("elegiste", cantidad, "campera y/o camperas con valor de", 10000*cantidad)

            break
    
        default:
            console.warn("Elegi una prenda correspondiente.")
            alert("Elegi una prenda correspondiente.")
    
    }





    
    
    
    
    

    

