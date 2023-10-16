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



const productos = [
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
    },
    {
        nombre: 'atrapasueno Ama',
        precio: 2400,
        id: 3
    },
    {
        nombre: 'atrapasueno Vive',
        precio: 2400,
        id: 4
    },
    {
        nombre: 'atrapasueno Espera',
        precio: 2800,
        id: 5
    },
    {
        nombre: 'atrapasueno Arcoiris Rosa',
        precio: 2600,
        id: 6
    },
    {
        nombre: 'Corazones',
        precio: 1800,
        id: 7
    },
    {
        nombre: 'atrapasueno Love',
        precio: 2800,
        id: 8
    }
]
