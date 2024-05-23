// Variable que permite obtener los productos del localstorage y permite que los mismos se muestren en la pagina principal.
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

contenedorCarritoProductos.innerHTML = "";

// Variables que permiten obtener cada uno de los elementos del HTML para trabajarlos dentro del carrito.
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

// Funcion que nos permite cargar todos los productos que se han seleccionado. 
function cargarProductosCarrito() {
    if(productosEnCarrito && productosEnCarrito.length > 0) {
        
        contenedorCarritoProductos.innerHTML = "";
        
        // Agregamos y quitamos nuevos nombres de clase a los que se habian puesto en el HTML
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

            // Se obtienen todos los elementos juntos con las etiquetas de las clases
            contenedorCarritoProductos.innerHTML = "";
            // Declaramos la variable para pode obtener cada productos y trabajarlo en la tarjeta. 
            productosEnCarrito.forEach(producto => {
            // Se obtienen cada uno de los productos seleccionados y se muestra su informacion.
            const div = document.createElement("div");
            div.classList.add("carrito-producto")
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>
                `;
            // Agregamos a la variable div la estructura de elementos que acabamos de crear. 
            contenedorCarritoProductos.append(div);
        })
            
    // Agregamos y quitamos nuevas clases a las etiquetas que ya hemos creado anteriormente. 
    } else {
    
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    // Hacemos el llamado de las funciones. 
    actualizarBotonesEliminar();
    actualizarTotal();
}
cargarProductosCarrito();


// Se crea una funcion que permita actualizar cada uno de los botones eliminar un producto del carrito. 
function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrio);
    });
}
// Funcion que permite eliminar producto del carrito.
function eliminarDelCarrio(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Funcion que permite vaciar el carrito y dejarlo sin productos. 
botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

// Funcion que permite actualziar el total de los valores de los productos. 
function actualizarTotal() {
    total.innerText = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
}

// creamos la variable que permita comprar en el carrito y de igualmanera hacemos la funcion que permita llevar acabo la compra. 
botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();

        // Agregados y quitamos classes de las etiquetas de productos creadas anteriormente. 
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.remove("disabled");
}
