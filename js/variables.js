const URL = "js/productos.json" //archivo fetch
let productos = []; //array de los productos
let contenidoHTML = [];
const btnAddProd = document.querySelector(".verProductos");
const seccionProd = document.querySelector(".productos1");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const inputFooter = document.querySelector(".newsLetter");
const btnSend = document.querySelector("#btnSubmit");
const btnCart = document.querySelector(".addToCart");
const btnContact = document.querySelector(".contacto");
let verFormulario = document.querySelector(".seccion");
let precioTotal = document.querySelector(".total");
let btnComprar = document.querySelector(".comprar-carrito");
let btnVaciar = document.querySelector(".vaciar-carrito");
let acumulador = document.querySelector(".contador");
let verCarrito = document.querySelector(".mostrar-carrito")
let ingresarFormulario = document.querySelector(".formulario-contacto")