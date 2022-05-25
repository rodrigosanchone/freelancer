
const menu = document.querySelector('.hamburguesa svg')
const nav=   document.querySelector('.nav-bg')
const titulo=   document.querySelector('.titulo')
menu.addEventListener('click', mostrarMenu);


function mostrarMenu(){
    //alert('hola menu')
    nav.classList.toggle('mostrar-menu')
}

function mostrarTexto(){
    nav.classList.add('texto-aparecer')
}