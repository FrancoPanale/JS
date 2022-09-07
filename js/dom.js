//USO DE LIBRERIA SWEET ALERT

const alertSweet = (mensaje, icono) => {
    Swal.fire({
        icon: icono,
        toast: true,
        title: mensaje,
        showConfirmButton: false,
        timer: 750,
    })
}

//INGRESANDO USUARIO

function loginSweet() {
    Swal.fire({
        title: 'Login',
        html:
            '<input type= "email" id="swal-input1" class="swal2-input">' +
            '<input type = "password" id="swal-input2" class="swal2-input">',


    })
}
let usuario = document.querySelector(".login").addEventListener("click", () => {
    loginSweet()
})

//FETCH

const aplicandoFetch = async ()=>{
        await fetch(URL)
            .then((response)=> response.json())
            .then((data)=> {
                productos = data
                productos.forEach(contenido => {
                    contenidoHTML += mostrandoContenido(contenido)
                })
                seccion.innerHTML = contenidoHTML
            })
            .catch(error =>{
                seccion.innerHTML = errorCarga()
            })
            agregarBtn()
}
aplicandoFetch()
const mostrandoContenido = (contenido) =>{
    const{id, nombre, precio, img} = contenido
    return `<div class="card" style="width: 18rem;">
    <img src="${contenido.img}" class="card-img-top" alt="${contenido.nombre}">
    <div class="card-body">
    <h5 class="card-title" padding= "25px">${contenido.nombre} $${contenido.precio} </h5>
                <button class="btn btn-dark" id="agregarZ${contenido.id}">Agregar al Carrito</button></div>
                </div>`
}
const errorCarga = ()=> {
    return `<div>
                <h2>Hubo un error al cargar</h2>
            </div>`
}

function agregarBtn() {
    productos.forEach((prod) => {
        document.querySelector(`#agregarZ${prod.id}`)
            .addEventListener("click", () => {
                agregarAlCarrito(prod)
                alertSweet("Agregaste al Carrito", "info")
            })
    });
}


function agregarAlCarrito(prod) {
    let cantidad = carrito.some((Stock) => Stock.id === prod.id)
    if (cantidad === false) {
        prod.prodStock = 1;
        carrito.push(prod);
    } else {
        let save = carrito.find((prodSave) => prodSave.id === prod.id)
        save.prodStock++
    }
    console.log(carrito);
    mostrarCarrito()
}

function mostrarCarrito() {
    verCarrito.innerHTML = "";
    carrito.forEach((prod) => {
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


function eliminarProd() {
    carrito.forEach((prod) => {
        document.querySelector(`#eliminarZ${prod.id}`)
            .addEventListener("click", () => {
                carrito = carrito.filter((prodElim) => prodElim.id !== prod.id)
                mostrarCarrito()
                alertSweet("Eliminado del carrito", "error")
            })
    });
}

/*function sumaTotal(){
    totalAPagar.innerHTML = `<h5>El total es:</h5>
                                <p class"precioTotal">0.00</p>`
    let sumatoria = document.querySelector(".precioTotal")
    sumatoria = carrito + prod.precio
}*/

function btnNavCart() {
    btnCart.addEventListener("click", (prod) => {
        section = document.querySelector("#section")
        seccion.innerHTML = ``
        seccion.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p>Cantidad: ${prod.prodStock} Precio: $${prod.precio}</p>
            <button class="btn btn-dark" id="eliminarZ${prod.id}">Eliminar del Carrito</button></div>
        </div>            
        <div class="pagarTotal">
            <p> Su total a pagar es: $ </p>
        </div>
    
        `
    })
}

function sendForm() {
    btnContact.addEventListener("click", () => {
        section.innerHTML = `<div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>`
    })
}
function inputNews() {
    btnSend.addEventListener("click", () => {
        console.log("click");
        if (inputFooter === "" || inputFooter === null) {
            alertSweet("Debe ingresar su e-mail correctamente", "warning")
        } else {
            alertSweet("Gracias por suscribirse.", "success")
        }

    })

}





//ingresarUsuario()
//Listado()
mostrarCarrito()
btnNavCart()
inputNews()
