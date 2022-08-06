//  LISTADO DE PRODUCTOS

const IVA = 1.21

class Producto{
    
    constructor (id , nombre , precio , stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
// ARRAY DE LA MERCADERIA 
const prod1 = new Producto (1234 , "Remera Trasher" , 5000 , 15);
const prod2 = new Producto (2134 , "Buzo Trasher" , 14000 , 6);
const prod3 = new Producto (6324 , "Jean" , 13700 , 10);
const prod4 = new Producto (9235 , "Nike Air Max" , 25000 , 20);
const prod5 = new Producto (1335 , "Campera Nike Reversible" , 29999 , 4);

const mercaderia = [prod1 , prod2 , prod3 , prod4 , prod5];
const agregarMercaderia = [ ];

ingresandoProducto()
console.table(mercaderia)
console.table(agregarMercaderia)

function creoID() { return parseInt(Math.random() * 100000) }

function agregarProductos() {
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del Producto:")
    let precio = parseInt(prompt("Ingresa el importe:"))
    let stock = parseInt(prompt("Cuanto stock hay?"))
    agregarMercaderia.push(new Producto(id, nombre, precio , stock))
        console.table(agregarMercaderia)
}

function ingresandoProducto (){
    agregarMercaderia.push(new Producto(4567 , "Camisa Levis" , 12500 , 5));
    agregarMercaderia.push(new Producto(4467 , "Camisa Lacoste" , 13000 , 5));
    agregarMercaderia.push(new Producto(4367 , "Campera Deportiva" , 20000 , 5));
    agregarMercaderia.push(new Producto(4267 , "Zapatos de Vestir" , 14000 , 5));
    agregarMercaderia.push(new Producto(4167 , "Bufanda" , 2990 , 5));
}












function ingresarUsuario(){
    alert("Bienvenido a Ragnar Indumentaria")
    
    let  usuario = prompt("Ingrese su usuario:")
    let  contraseña = prompt("Ingrese su contraseña:")  
    
    while (usuario === "" || usuario === null || contraseña === "" || contraseña === null) {
        
        usuario = prompt("Ingrese su usuario:");
        contraseña = prompt("Ingrese su contraseña:");
    }
}

function elegirProducto(){
    let item;
    do{
        item = prompt("Que desea comprar? \nRemera \nBuzo  \nCampera \nZapatillas \nJean?");
    } while(item != "remera" && item != "buzo" && item != "campera" && item != "zapatillas" && item != "jean");
    
    switch(item){
        case "remera":
            return prod1
        
        case "buzo":
            return prod2

        case "campera":
            return prod5

        case "zapatillas":
            return prod4    
        
        case "jean":
            return prod3
    }
}


ingresarUsuario()
let verProducto = elegirProducto()
let precioFinal = (verProducto.precio * IVA)

// PRECIO SUMADO CON EL IVA

alert("Estas a punto de comprar" + " " + verProducto.nombre + " " + "a $" + precioFinal )


//METODO DE PAGO

let  carrito = prompt("Como desea pagar? \nEfectivo \nTarjeta")
        
        

        if(carrito == "efectivo"){
            var  billete = parseInt(prompt("Con cuanto abonas?"));
            
        }else if (carrito == "tarjeta"){
        
            var  cuotas = parseInt(prompt("En cuantas cuotas lo hacemos?"))
        }else{
        
            alert("No aceptamos ese metodo de pago! ⛔️")
        
        }

if(cuotas > 1 || billete === null){ 
        alert("Te quedaria en" + " " + cuotas + " " + "cuotas de" + " " + "$" + (precioFinal / cuotas) + " " +"Gracias por confiar en Ragnar Indumentaria." );
    }else if (cuotas == 1 || billete === null){
        
        alert("Lo hacemos en un pago entonces, gracias por comprar en Ragnar Indumentaria.")
    }else if(billete > precioFinal || cuotas === null){

        alert("Gracias tu vuelto es de" + " " + "$" + (billete - precioFinal));
    }else if(billete == precioFinal || cuotas === null){
        
        alert("Gracias por comprar en Ragnar Indumentaria.")
    
    }else{

        alert("No te alcanza la plata, volve mas tarde!")
    
    }




//CONTROLANDO STOCK


let controlStock = (verProducto.stock - 1)
console.log("Te quedan" + " " + controlStock + " " + verProducto.nombre)





