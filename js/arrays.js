
class Producto{
    
    constructor (id , nombre , precio , stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const productos = [];

// AGREGANDO PRODUCTOS A LA TIENDA

function creoId() {
    return parseInt(Math.random() * 1000)
}

function mercaderia(){
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del Producto:")
    let precio = parseInt(prompt("Ingresa el importe:"))
        productos.push(new Producto(id, nombre, precio))
        console.table(productos)
}