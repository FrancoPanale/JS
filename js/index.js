
// TIENDA DE INDUMENTARIA

function ingresarUsuario(){
    alert("Bienvenido a Ragnar Indumentaria")
    
    let  usuario = prompt("Ingrese su usuario:")
    let  contraseña = prompt("Ingrese su contraseña:")  
    
    while (usuario === "" || usuario === null || contraseña === "" || contraseña === null) {
        
        usuario = prompt("Ingrese su usuario:");
        contraseña = prompt("Ingrese su contraseña:");
    }
}


function elegirIndumentaria(){
    
    let item;
    
    do{
        item = prompt("Que desea comprar? \nRemera \nBuzo  \nCampera \nZapatillas?");
    } while(item != "remera" && item != "buzo" && item != "campera" && item != "zapatillas");
    
    switch(item){
        case "remera":
            return "remera"
        
        case "buzo":
            return "buzo"

        case "campera":
            return "campera"

        case "zapatillas":
            return "zapatillas"    
        }
    
}

function precioInd(prenda) {
    if(prenda === "remera"){
        return 5000
    }else if (prenda === "buzo"){
        return 13200
    }else if (prenda === "campera"){
        return 25500
    }else { 
        return 53000
    }
}

function cobrar(producto,precio){
    alert("Estas a punto de comprar lo siguiente:" + " " + producto + "$" + precio);
}

ingresarUsuario()
let verItem = elegirIndumentaria()
let pagar = precioInd(verItem)
cobrar(verItem,pagar)

let  credito = prompt("Como desea pagar? \nEfectivo \nTarjeta")


if(credito == "efectivo"){
        var  billete = parseInt(prompt("Con cuanto abonas?"));
    }else if (credito == "tarjeta"){
        var cuotas = parseInt(prompt("En cuantas cuotas lo hacemos?"));
    }else{
        alert("No aceptamos ese metodo de pago! ⛔️")
    }
    
if(cuotas > 1 || billete === null){
    alert("Te quedaria en" + " " + cuotas + " " + "cuotas de" + " " + "$" + (pagar / cuotas) + " "+"Gracias por confiar en Ragnar Indumentaria." );
}else if (cuotas == 1 || billete === null){
    alert("Lo hacemos en un pago entonces, gracias por comprar en Ragnar Indumentaria.")

}else if(billete > pagar || cuotas === null){
    alert("Gracias tu vuelto es de" + " " + "$" + (billete - pagar));
    
}else if (billete == pagar || cuotas === null){
    alert("Gracias por comprar en Ragnar Indumentaria.")
    }else{
    alert("No te alcanza la plata, volve mas tarde!")
}




//  LISTADO DE PRODUCTOS


const IVA = 1.21

class Producto{
    
    constructor (nombre , precio , stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    precioConIVA () {
        let precioFinal = this.precio * IVA;
        return "$" + precioFinal;
    };
    
    restarStock (unidades) {
        this.stock = this.stock - unidades;
    };
}

const prod1 = new Producto ("Remera Trasher" , 5000 , 15)
const prod2 = new Producto ("Buzo Trasher" , 14000 , 6)
const prod3 = new Producto ("Jean" , 13700 , 10)
const prod4 = new Producto ("Nike Air Max" , 25000 , 20)
const prod5 = new Producto ("Campera Nike Reversible" , 29999 , 4)






















































































/*if(credito == "efectivo"){
    pagoEfectivo = parseInt(prompt("Con cuanto vas a abonar?"))
}else{
    pagoTarjeta = parseInt(prompt("En cuantas cuotas lo hacemos?"))
}

while (pagoEfectivo > pagar || pagoEfectivo == pagar || pagoEfectivo < pagar){
    if (pagoEfectivo > pagar){
        alert("Gracias, tu vuelto es" + pagoEfectivo - pagar)
        break
    }else if (pagoEfectivo == pagar){
        alert("Gracias por comprar en Ragnar Indumentaria")
        break
    }else {
        alert("No te alcanza la plata, volve pronto")
    }
}
*/


















/*function metodoPago1(){
    
    let credito = prompt("Como desea pagar? \nEfectivo \nTarjeta")
debugger
    while(credito == "efectivo" || credito == "tarjeta") {
            //alert("Vamos a ver con que me pagas")
    
            if(credito == "efectivo"){
                let pagoEfectivo = parseInt(prompt("Con cuanto me pagas?"));
                break
            } else if (credito == "tarjeta") {
                let pagoTarjeta = parseInt(prompt("En cuantas cuotas lo hacemos?"));
                break
            } else {
                alert ("Elegi el metodo de pago correspondiente.")
            }
        }
}*/