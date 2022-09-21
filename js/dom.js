//USO DE LIBRERIA SWEET ALERT

const alertSweet = (mensaje, icono) => {
    Swal.fire({
        icon: icono,
        toast: true,
        title: mensaje,
        showConfirmButton: false,
        position: 'top-end',
        timer: 750,
        timerProgressBar: true,
    });
};



const compraSweet = (mensaje , icono) =>{
    Swal.fire({
        title: mensaje,
        showConfirmButton: false,
        imageUrl: './img/logo-axe.png',
        imageWidth: 250,
        imageHeight: 200,
        imageAlt: 'Paisaje vikingo',
        icon: icono,
        timerProgressBar: true,
        timer:1000,
    });
};

//INGRESANDO USUARIO
function login (){
    const { value: email } = Swal.fire({
        title: 'Ingresa con tu E-mail',
        input: 'email',
        inputLabel: 'Ingresa tu E-mail',
        inputPlaceholder: 'Enter your email address'
        })
        
        if (email) {
        Swal.fire(`Hola,${email}`)
        }
}

let usuario = document.querySelector(".login").addEventListener("click", () => {login();});

//FETCH

const aplicandoFetch = async () => {
    await fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            productos = data;
            productos.forEach((contenido) => {
                contenidoHTML += mostrandoContenido(contenido);
            });
            seccionProd.innerHTML = contenidoHTML;
        })
        .catch((error) => {
            seccion.innerHTML = errorCarga();
        });
    agregarBtn();
};


const mostrandoProductos = () => {
    btnAddProd.addEventListener("click", () => {
        return aplicandoFetch()
    })
}




const mostrandoContenido = (contenido) => {
    const { id, nombre, precio, img } = contenido; 
    return `<div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="${nombre}">
    <div class="card-body"> 
    <h5 class="card-title" padding= "25px">${nombre} $${precio} </h5>
                <button class="btn btn-dark" id="agregar${id}">Agregar al Carrito</button></div>
                </div>`;
};
const errorCarga = () => {
    return `<div>
                <h2>Hubo un error al cargar</h2>
            </div>`;
};

function agregarBtn() {
    productos.forEach((prod) => {
        document
            .querySelector(`#agregar${prod.id}`)
            .addEventListener("click", () => {
                agregarAlCarrito(prod);
                alertSweet("Agregaste al Carrito", "info");
            });
    });
}


function agregarAlCarrito(prod) {
    let cantidad = carrito.some((Stock) => Stock.id === prod.id);
    if (cantidad === false) {
        prod.prodStock = 1;
        carrito.push(prod);
    } else {
        let save = carrito.find((prodSave) => prodSave.id === prod.id);
        save.prodStock++;
    }
    mostrarCarrito();
}

function mostrarCarrito() {
    verCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        verCarrito.innerHTML += `<div class="card" style="width: 25%;">
        <div class="card-body">
        <h5 class="card-title">${prod.nombre}</h5>
        <p>Cantidad: ${prod.prodStock} Precio: $${prod.precio*prod.prodStock}</p>
        <button class="btn btn-dark" id="eliminar${prod.id}">Eliminar del Carrito</button></div>
                    </div>
    
                    `;
    const cartTotal = (carrito).reduce((acc, {prodStock, precio}) => acc + prodStock * precio, 0)
    precioTotal.innerText = cartTotal
    
});
btnVaciar.addEventListener("click", ()=>{
    vaciarCarrito(carrito)
    compraSweet("Vaciaste el Carrito", "error")
    mostrarCarrito()
    
})
btnComprar.addEventListener("click", ()=> {
    vaciarCarrito(carrito)
    compraSweet("Compra Realizada con exito", "success");
    mostrarCarrito()
})
    localStorage.setItem("carrito", JSON.stringify(carrito));
    eliminarProd();
    acumulador.innerText = carrito.length;
}

function eliminarProd() {
    carrito.forEach((prod) => {
        document
            .querySelector(`#eliminar${prod.id}`)
            .addEventListener("click", () => {
                carrito = carrito.filter((prodElim) => prodElim.id !== prod.id);
                mostrarCarrito();
                alertSweet("Eliminado del carrito", "error");
            });
        });
        
}

function vaciarCarrito(carrito){
    carrito.length = 0;
    precioTotal.innerText = 0;
}

function inputNews() {
    btnSend.addEventListener("click", () => {
        console.log("click");
        if (inputFooter === "" || inputFooter === null) {
            compraSweet("Debe ingresar su e-mail correctamente", "warning");
        } else {
            compraSweet("Gracias por suscribirse.", "success");
        }
    });
}


// PAGINA DE CONTACTO
btnContact.addEventListener("click", ()=> {crearFormulario()})
function crearFormulario(){
    ingresarFormulario.innerHTML = `<h1>Contactanos</h1>
    <div class="mb-3 w-100 container-fluid">
        <label for="exampleFormControlInput1" class="form-label">Ingresa tu E-mail:</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3 w-100 container-fluid">
        <label for="exampleFormControlTextarea1" class="form-label">Dejanos un comentario:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button class="btn btn-dark btn-send">Enviar</button>
        </div>`
    btnForm = document.querySelector(".btn-send")
    .addEventListener("click",() =>{
        compraSweet("Te responderemos a la brevedad", "success")
    })
}


// FILTRO DE CATEGORIAS

function verCategoriasRemera(){
    const remeraCategoria  = document.querySelector(".remera");
        remeraCategoria.addEventListener("click", ()=> {
        catRemera = productos.filter((prodRemera)=>prodRemera.categoria === "remera")
        seccionProd.innerHTML = ``;
            catRemera.forEach ((prod) =>{
                seccionProd.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${prod.img}" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body"> 
            <h5 class="card-title" padding= "25px">${prod.nombre} $${prod.precio} </h5>
                        <button class="btn btn-dark" id="agregar${prod.id}">Agregar al Carrito</button></div>
                        </div>
            `
        })
        localStorage.setItem("carrito", JSON.stringify(carrito));
    })
}

function verCategoriasPantalon (){
    const jeanCategoria  = document.querySelector(".jean");
        jeanCategoria.addEventListener("click", ()=> {
        catJean = productos.filter((prodJean)=>prodJean.categoria === "pantalon")
        seccionProd.innerHTML = ``;
            catJean.forEach ((prod) =>{
                seccionProd.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${prod.img}" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body"> 
            <h5 class="card-title" padding= "25px">${prod.nombre} $${prod.precio} </h5>
                        <button class="btn btn-dark" id="agregar${prod.id}">Agregar al Carrito</button></div>
                        </div>
            `
        })
        
        localStorage.setItem("carrito", JSON.stringify(carrito));
    })
}
function verCategoriasBuzo (){
    const buzoCategoria  = document.querySelector(".buzo");
        buzoCategoria.addEventListener("click", ()=> {
        catBuzo = productos.filter((prodBuzo)=>prodBuzo.categoria === "buzo")
        seccionProd.innerHTML = ``;
            catBuzo.forEach ((prod) =>{
                seccionProd.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${prod.img}" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body"> 
            <h5 class="card-title" padding= "25px">${prod.nombre} $${prod.precio} </h5>
                        <button class="btn btn-dark" id="agregar${prod.id}">Agregar al Carrito</button></div>
                        </div>
            `
        })
        localStorage.setItem("carrito", JSON.stringify(carrito));
        eliminarProd();
    })
}
function verCategoriasCampera (){
    const camperaCategoria  = document.querySelector(".campera");
        camperaCategoria.addEventListener("click", ()=> {
        catCampera = productos.filter((prodCampera)=>prodCampera.categoria === "campera")
        seccionProd.innerHTML = ``;
            catCampera.forEach ((prod) =>{
                seccionProd.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${prod.img}" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body"> 
            <h5 class="card-title" padding= "25px">${prod.nombre} $${prod.precio} </h5>
                        <button class="btn btn-dark" id="agregar${prod.id}">Agregar al Carrito</button></div>
                        </div>
            `
        })
        localStorage.setItem("carrito", JSON.stringify(carrito));
        eliminarProd();
        

    })
}
function verCategoriasZapatilla (){
    const zapaCategoria  = document.querySelector(".zapatillas");
        zapaCategoria.addEventListener("click", ()=> {
        catZapa = productos.filter((prodJean)=>prodJean.categoria === "zapatillas")
        seccionProd.innerHTML = ``;
            catZapa.forEach ((prod) =>{
                seccionProd.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${prod.img}" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body"> 
            <h5 class="card-title" padding= "25px">${prod.nombre} $${prod.precio} </h5>
                        <button class="btn btn-dark" id="agregar${prod.id}">Agregar al Carrito</button></div>
                        </div>
            `
        })
        localStorage.setItem("carrito", JSON.stringify(carrito));
        eliminarProd();
    })
}

mostrandoProductos();
inputNews();
verCategoriasRemera();
verCategoriasPantalon();
verCategoriasBuzo();
verCategoriasCampera();
verCategoriasZapatilla();