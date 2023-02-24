const contenedorCarrito = document.getElementById('ContenedorCarrito');
const precioTotal = document.getElementById('PrecioTotal')

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        ActualizarCarrito()
    }
})

const eliminarDelCarrito = (prodId) => {
    const prodCarrito = carrito.find((prod)=> prod.id === prodId)
    const indice = carrito.indexOf(prodCarrito)
    carrito.splice(indice, 1)
    ActualizarCarrito()
}

const RestarProducto = (prodId) => {
    const prodCarrito = carrito.find((prod)=> prod.id === prodId)
    prodCarrito.cantidad--
    ActualizarCarrito()
}

const SumarProducto = (prodId) => {
    const prodCarrito = carrito.find((prod)=> prod.id === prodId)
    prodCarrito.cantidad++
    ActualizarCarrito()
}

const ActualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    
    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito')
        div.innerHTML = `  
        <div class="ImgProdCart">
        <img src=${prod.img} alt= "">
        </div>
        <div class="InfoProdCart">
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>

        
        <div class="CantProd">
        <div class="ControlCantidad">
        <button onclick="RestarProducto(${prod.id})" id="restar${prod.id}" class="btnSumar">-</button>
        <span id="cantProd">${prod.cantidad}</span>
        <button onclick="SumarProducto(${prod.id})" id="sumar${prod.id}" class="btnRestar">+</button>
        </div>
        <button onclick="eliminarDelCarrito(${prod.id})" class="BtnEliminar"></button>
        </div>
        `
        contenedorCarrito.appendChild(div)
    })
    localStorage.setItem('carrito', JSON.stringify(carrito))
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + (prod.cantidad * prod.precio), 0)
}

