// LISTADO DE PRODUCTOS

const IVA = 1.21 //Constante del iva

//FUNCION CONTRUCTORA

/*function Productos (nombre , precio , stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
        
    //METODO PRECIO CON IVA
    
    this.precioConIVA = function (){
        let precioFinal = this.precio * IVA
            return "$" + precioFinal
    }

    // METODO PARA RESTAR EL STOCK

    this.restarStock = function (unidades){
        this.stock = this.stock - unidades
    }

}*/

// PRODUCTOS SELECCIONADOS


// CONVERTIDA EN DECLARACION DE CLASE(MAS ACTUAL)

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        
    }
    //METODOS SIN NECESIDAD DE TENER FUNCTION Y ESTAR DENTRO DEL CONSTRUCTOR
    //METODO PRECIO CON IVA
    precioConIVA () {
            let precioFinal = this.precio * IVA;
            return "$" + precioFinal;
        };
        
        // METODO PARA RESTAR EL STOCK
        restarStock (unidades) {
            this.stock = this.stock - unidades;
        };
        
        
    }
    
    const prod1 = new Producto ("Remera Trasher Negra" , 5000 , 50);
    const prod2 = new Productos ("Jean Negro" , 15000 , 10);
    const prod3 = new Productos ("Nike Air Max" , 50000 , 5);
    



    function generadorAutomatico() {
        productos.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
        productos.push(new Producto(2345, "MACBOOK AIR 13", 249900))
        productos.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
        productos.push(new Producto(4567, "IPAD PRO 12", 219890))
        productos.push(new Producto(5678, "LENOVO GAMER 15", 409090))
        productos.push(new Producto(6789, "MACBOOK PRO 15", 459000))
        productos.push(new Producto(7890, "ASUS GAMING PRO 17", 679800))
        productos.push(new Producto(8901, "IPAD MINI 7.9", 189900))
    }
    
    function generarCarrito() {
        carrito.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
        carrito.push(new Producto(2345, "MACBOOK AIR 13", 249900))
        carrito.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
    }
    