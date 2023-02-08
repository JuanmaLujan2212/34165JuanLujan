//Contructor de objetos
class Producto {
    constructor(id, nombre, cantidad, precio, imageProd) {
        this.id  = id;
        this.nombre  = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.imageProd = imageProd;
    }
    
}

let costoTotal = 0;

//Funciones
function FinalizarCompra(){
    for (const producto of carrito) {
        costoTotal += (producto.cantidad * producto.precio);  
        producto.cantidad = 0;     
    }
    alert("El total a pagar es: $" + costoTotal +" Gracias por comprar en nuestra pagina");

    //Limpieza del carrito
    costoTotal=0;
    Actualizar();
    ActualizaResumen();
    guardar();
    
}

function guardar(){
    guardarLocal("listaProductos", JSON.stringify(carrito));
}

function Actualizar(){
    cantidad.innerText = producto1.cantidad;
    cantidad2.innerText = producto2.cantidad;
    cantidad3.innerText = producto3.cantidad;
    cantidad4.innerText = producto4.cantidad;
    cantidad5.innerText = producto5.cantidad;
}

function ActualizaResumen(){
    Prod1.textContent = producto1.nombre + ' (' + producto1.cantidad + ') ' +"$"+producto1.cantidad * producto1.precio;
    Prod2.textContent = producto2.nombre + ' (' + producto2.cantidad + ') ' +"$"+producto2.cantidad * producto2.precio;
    Prod3.textContent = producto3.nombre + ' (' + producto3.cantidad + ') ' +"$"+producto3.cantidad * producto3.precio;
    Prod4.textContent = producto4.nombre + ' (' + producto4.cantidad + ') ' +"$"+producto4.cantidad * producto4.precio;
    Prod5.textContent = producto5.nombre + ' (' + producto5.cantidad + ') ' +"$"+producto5.cantidad * producto5.precio;
}


function AgregarProd(evt){
    evt.currentTarget.myParam.cantidad += 1;
    ActualizaResumen();
    Actualizar();
    guardar();
    
    
} 

function QuitarProd(evt){
    if (evt.currentTarget.myParam.cantidad>0){
        evt.currentTarget.myParam.cantidad -= 1;
        ActualizaResumen();
        Actualizar();
        guardar();
    }else{

    }
    
} 

//Creacion de objetos 

const producto1 = new Producto(1, "Zapatos", 0, 3000, "Assets/Calzado3.jfif");
const producto2 = new Producto(2, "Pantalon", 0, 1200, "Assets/Calzado3.jfif");
const producto3 = new Producto(3, "Camiseta", 0, 500, "Assets/Calzado3.jfif");
const producto4 = new Producto(4, "Pantalon", 0, 1000, "Assets/Calzado3.jfif");
const producto5 = new Producto(5, "Campera", 0,2000, "Assets/Calzado3.jfif")

const carrito = [producto1, producto2, producto3, producto4, producto5];



//Almacemaniento de datosLocales
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };



////Aqui es donde el codigo se torna repetitivo hasta la linea 140

let botonQ = document.getElementById("btnQuitar1");
botonQ.addEventListener("click", QuitarProd, false);
botonQ.myParam = producto1;

let botonA = document.getElementById("btnAgregar1");
botonA.addEventListener('click', AgregarProd, false);
botonA.myParam = producto1;

let cantidad = document.getElementById("DisplayCantidad1");
cantidad.innerText = producto1.cantidad;

/////

let botonQ2 = document.getElementById("btnQuitar2");
botonQ2.addEventListener("click", QuitarProd, false);
botonQ2.myParam = producto2;

let botonA2 = document.getElementById("btnAgregar2");
botonA2.addEventListener('click', AgregarProd, false);
botonA2.myParam = producto2;

let cantidad2 = document.getElementById("DisplayCantidad2");
cantidad2.innerText = producto2.cantidad;

/////

let botonQ3 = document.getElementById("btnQuitar3");
botonQ3.addEventListener("click", QuitarProd, false);
botonQ3.myParam = producto3;

let botonA3 = document.getElementById("btnAgregar3");
botonA3.addEventListener('click', AgregarProd, false);
botonA3.myParam = producto3;

let cantidad3 = document.getElementById("DisplayCantidad3");
cantidad3.innerText = producto3.cantidad;

/////

let botonQ4 = document.getElementById("btnQuitar4");
botonQ4.addEventListener("click", QuitarProd, false);
botonQ4.myParam = producto4;

let botonA4 = document.getElementById("btnAgregar4");
botonA4.addEventListener('click', AgregarProd, false);
botonA4.myParam = producto4;

let cantidad4 = document.getElementById("DisplayCantidad4");
cantidad4.innerText = producto4.cantidad;

/////

let botonQ5 = document.getElementById("btnQuitar5");
botonQ5.addEventListener("click", QuitarProd, false);
botonQ5.myParam = producto5;

let botonA5 = document.getElementById("btnAgregar5");
botonA5.addEventListener('click', AgregarProd, false);
botonA5.myParam = producto5;

let cantidad5 = document.getElementById("DisplayCantidad5");
cantidad5.innerText = producto5.cantidad;

/////

let ResumenCompra = document.getElementById("MostrarProd");
let Prod1 = document.createElement('p');
let Prod2 = document.createElement('p');
let Prod3 = document.createElement('p');
let Prod4 = document.createElement('p');
let Prod5 = document.createElement('p');
ActualizaResumen();


ResumenCompra.appendChild(Prod1);
ResumenCompra.appendChild(Prod2);
ResumenCompra.appendChild(Prod3);
ResumenCompra.appendChild(Prod4);
ResumenCompra.appendChild(Prod5);

let botonFinalizar = document.getElementById("btnFinalizar");
botonFinalizar.addEventListener("click", FinalizarCompra);



 









