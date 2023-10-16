localStorage.setItem('cart', JSON.stringify([]))

const cart = []

/* verificamos si existe un carrito en localstorage */
const cartFromLocalStorage = localStorage.getItem('cart')

if(cartFromLocalStorage){
    console.log('existe mi carrito')
    /* si existe voy a guardar cada item en mi cart */
    const carrtitoFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
    for(let item of carritoFromLocalStorage){
        cart.push(item)
    } 
}
else{
    /* si no existe, creo uno guardando un array vacio */
    console.log('no existe mi carrito')
}localStorage.setItem('cart', JSON.stringify([]))

const Productos = [
    {
        nombre: 'Manta Silla',
        precio: 3600,
        tamano: '40 x 40',
        id: 0
    },
    {
        nombre: 'Manta Cama',
        precio: 4000,
        tamano: '80 x 80',
        id: 1
    },   
    {   
        nombre: 'Manta sofa',
        precio: 3000,
        tamano: '20 x 20',
        id: 2
    }
]


let direccionDeBusqueda = window.location.search

console.log(direccionDeBusqueda)

const urlSearchParams = new urlSearchParams
console.log(urlSearchParam.get('productId'))
const productHtml =document.getElementById(products)



/* buscar un producto por Id */

const productFound = products.find(product => product.id == productId)

const resultHTML =document.getElementById('result')
const renderProductDetail =() => {
    let controls = `<button id= 'btn-comprar'>comprar</button>`
}
/* si ya esta comprado el producto */
if(cart.some(product => product.id == productFound.id)){
    controls = `
        <div>
        <button id eliminar producto>-</button>
        <span>1</span>
        <button id agregar producto>+</button>
        </div>
    `
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