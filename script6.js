localStorage.setItem('cart', JSON.stringify([]))

const cart = []

/* verificamos si existe un carrito en localstorage */
const cartFromLocalStorage = localStorage.getItem('cart')

if(cartFromLocalStorage){
    /* si existe voy a guardar cada item en mi cart */
    const carrtitoFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
    for(let item of carritoFromLocalStorage){
        cart.push(item)
    } 
}
localStorage.setItem('cart', JSON.stringify([]))


const productos = [
{
    nombre: 'Corazones',
    precio: 1800,
    id: 7
}
]   



let direccionDeBusqueda = window.location.search


const urlSearchParams = new urlSearchParams(window.location.search)

const productId = urlSearchParams. get(productId)
const productHtml = document.getElementById('products')



/* buscar un producto por Id */

const productFound = products.find(product => product.id == productId)

const resultHTML = document.getElementById('result')
let controls = `<button id= 'btn-comprar'>comprar</button>`
const renderProductDetail =() => {

}

if(cart.some(product => product.id == productFound.id)){
    controls = 
        `<button id = 'btn-comprar'>comprar</button>
}`
/* si ya esta comprado el producto */
if(cart.some(product => productId == productFound.id)){
    controls = `<div>
    <button id eliminar producto> - </button>
    <span> 1 </span>
    <button id agregar producto> + </button>
    </div>`
}
}


resultHTML.innerHTML = `
    <h2>${productFound.nombre}</h2>
    <div>Precio: $${productFound.precio}</div>
    <div>${productFound.categoria}</div>
    <p>${productFound.description}</p>
    ${controls}
`


const btnComprar = document.getElementById('btn-comprar')

btnComprar.addEventListener('click', () =>{
    /* accion de darle click al boton comprar */
    cart.push(productFound)
    localStorage.setItem('cart', JSON.stringify(cart))
})

const elementoCarrito = document.querySelector('.productos')

elementoCarrito.innerText = cart.join(', ')

function agregarProducto() {
cart.push('producto')
localStorage.setItem('cart', JSON.stringify(cart))
}

const botonAgregarProducto = document.querySelector('.boton-agregar')

botonAgregarProducto.addEventListener('click', agregarProducto)