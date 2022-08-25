
//INGRESANDO USUARIO

function ingresarUsuario(){
    alert("Bienvenido a Ragnar Indumentaria")
    
    let  usuario = prompt("Ingrese su usuario:")
    let  contraseña = prompt("Ingrese su contraseña:")  
    
    while (usuario === "" || usuario === null || contraseña === "" || contraseña === null) {
        
        usuario = prompt("Ingrese su usuario:");
        contraseña = prompt("Ingrese su contraseña:");
    }
}




                    // ARRAY DE ZAPATILLAS

const zapasNike = [ {id:9234 , nombre:"Nike Air Max" , precio:45000, img:"./img/airMax.jpg"},

                    {id:9235 , nombre:"Nike Travis Scott" , precio:55000, img:"./img/nikeTravisScott.jpg"},

                    {id:9236 , nombre:"Nike Sb Safari" , precio:50000, img:"./img/nikeSbSafari.jpg"},]


                    //ARRAY DE ROPA

const prendas = [   {id:1234 , nombre:"Remera Trasher" , precio:5000, img:"./img/remeraTrasher1.jpg"},
                    
                    {id:2134 , nombre:"Buzo Trasher" , precio:14500, img:"./img/buzoTrasher1.jpg"},

                    {id:6324 , nombre:"Jean" , precio:13700, img:"./img/jean1.jpg"},

                    {id:1335 , nombre:"Campera Nike " , precio:29999, img:"./img/camperaNike.jpg"},]


const zapatillas = document.querySelector(".productos1");
const ropa = document.querySelector(".productos2");
const verCarrito = document.querySelector(".cart");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const inputFooter = document.querySelector(".newsLetter")
const send = document.querySelector("#btnSubmit")
const totalAPagar = document.querySelector(".total")

function Listado(){
    zapasNike.forEach((prod) => {
        zapatillas.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${prod.img}" class="card-img-top" alt="Zapatillas">
        <div class="card-body">
        <h5 class="card-title">${prod.nombre} $${prod.precio}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                    <button class="btn btn-dark" id="agregarZ${prod.id}">Agregar al Carrito</button></div>
                    </div>`
    })
    


    prendas.forEach((prod) => {
        ropa.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${prod.img}" class="card-img-top" alt="Ropa">
        <div class="card-body">
            <h5 class="card-title">${prod.nombre} $${prod.precio}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
                <button class="btn btn-dark" id="agregarR${prod.id}">Agregar al Carrito</button>
                </div>
            </div>
    `})
    agregarBtn()
}



function agregarBtn(){
    zapasNike.forEach( (prod) =>{
        document.querySelector(`#agregarZ${prod.id}`)
        .addEventListener("click", ()=>{
            agregarAlCarrito(prod)
        })
    });
    prendas.forEach( (prod) =>{
        document.querySelector(`#agregarR${prod.id}`)
        .addEventListener("click", ()=>{
            agregarAlCarrito(prod)
        })
    });

}


function agregarAlCarrito(prod){
    let cantidad = carrito.some((Stock) => Stock.id === prod.id)
    if(cantidad === false){
        prod.prodStock = 1;
        carrito.push(prod);
    }else{
        let save = carrito.find((prodSave)=> prodSave.id === prod.id)
        save.prodStock ++
    }
    console.log(carrito);
    mostrarCarrito()
}

function mostrarCarrito(){
    verCarrito.innerHTML = "";
    carrito.forEach((prod) =>{
        verCarrito.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${prod.nombre}</h5>
        <p>Cantidad: ${prod.prodStock} Precio: $${prod.precio}</p>
        <button class="btn btn-dark" id="eliminarZ${prod.id}">Eliminar del Carrito</button></div>
                    </div>
    
    `})
    localStorage.setItem("carrito", JSON.stringify(carrito));
    eliminarProd()
}


function eliminarProd(){
    carrito.forEach( (prod) =>{
        document.querySelector(`#eliminarZ${prod.id}`)
        .addEventListener("click", ()=>{
            carrito = carrito.filter((prodElim) => prodElim.id !== prod.id)
            mostrarCarrito()
        })
    });
}

/*function sumaTotal{
    totalAPagar.innerHTML = `<h5>El total es:</h5>
                                <p class"precioTotal">0.00</p>`
    let sumatoria = document.querySelector(".precioTotal")
    sumatoria = carrito + prod.precio
}*/

function inputNews(){
    send.addEventListener("click",()=>{
        console.log("click");
        if (inputFooter === "" ) {
            alert("Debe ingresar su e-mail correctamente")
        }else{
            alert("Gracias por suscribirse al newsletter de Ragnar Indumentaria.")
        }

    })

}

ingresarUsuario()
Listado()
mostrarCarrito()
inputNews()
