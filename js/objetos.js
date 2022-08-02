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
    
    const prod1 = new Productos ("Remera Trasher Negra" , 5000 , 50);
    const prod2 = new Productos ("Jean Negro" , 15000 , 10);
    const prod3 = new Productos ("Nike Air Max" , 50000 , 5);
    