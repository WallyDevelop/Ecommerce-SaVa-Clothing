// Productos que de van a ofrecer en la tienda.

const productos = [
    //Polo Caballeros
{
    id:"polo-amarillo",
    titulo:"Polo Amarillo Fuerte",
    imagen:"./img/Polo_Caballeros/01.jpg",
    categoria:{ 
        nombre:"polo_caballeros",
        id:"polo_caballero"
    },
    precio: 30000
},
{
    id:"polo-azul_rey",
    titulo:"Polo Azul Rey",
    imagen:"./img/Polo_Caballeros/02.jpg",
    categoria:{ 
        nombre:"polo_caballeros",
        id:"polo_caballero"
    },
    precio: 30000
},
{
    id:"polo-jaspe",
    titulo:"Polo Jaspe",
    imagen:"./img/Polo_Caballeros/03.jpg",
    categoria:{ 
        nombre:"polo_caballeros",
        id:"polo_caballero"
    },
    precio: 30000
},
{
    id:"polo-rojo",
    titulo:"Polo Rojo",
    imagen:"./img/Polo_Caballeros/04.jpg",
    categoria:{ 
        nombre:"polo_caballeros",
        id:"polo_caballero"
    },
    precio: 30000
},
{
    id:"polo-rosado",
    titulo:"Polo Rosado",
    imagen:"./img/Polo_Caballeros/05.jpg",
    categoria:{ 
        nombre:"polo_caballeros",
        id:"polo_caballero"
    },
    precio: 30000
},
{
    id:"polo-turquesa",
    titulo:"Polo Turquesa",
    imagen:"./img/Polo_Caballeros/06.jpg",
    categoria:{ 
        nombre:"polo_caballeros",
        id:"polo_caballero"
    },
    precio: 30000
},
//Polo Damas
{
    id:"polo-agua_marina",
    titulo:"Polo Agua Marina",
    imagen:"./img/Polo_Damas/01.jpg",
    categoria:{ 
        nombre:"polo_damas",
        id:"polo_dama"
    },
    precio: 30000
},
{
    id:"polo-azul",
    titulo:"Polo Azul Rey",
    imagen:"./img/Polo_Damas/02.jpg",
    categoria:{ 
        nombre:"polo_damas",
        id:"polo_dama"
    },
    precio: 30000
},
{
    id:"polo-fucsia",
    titulo:"Polo Fucsia",
    imagen:"./img/Polo_Damas/03.jpg",
    categoria:{ 
        nombre:"polo_damas",
        id:"polo_dama"
    },
    precio: 30000
},
{
    id:"polo-gris_oscuro",
    titulo:"Polo Gris Oscuro",
    imagen:"./img/Polo_Damas/04.jpg",
    categoria:{ 
        nombre:"polo_damas",
        id:"polo_dama"
    },
    precio: 30000
},
{
    id:"polo-rojo",
    titulo:"Polo Rojo",
    imagen:"./img/Polo_Damas/05.jpg",
    categoria:{ 
        nombre:"polo_damas",
        id:"polo_dama"
    },
    precio: 30000
},
{
    id:"polo-verde_oscuro",
    titulo:"Polo Verde Oscuro",
    imagen:"./img/Polo_Damas/06.jpg",
    categoria:{ 
        nombre:"polo_damas",
        id:"polo_dama"
    },
    precio: 30000
},
//Pantalones
{
    id:"pantalon-kaki",
    titulo:"Pantalón Kaki",
    imagen:"./img/Pantalones/01.jpg",
    categoria:{ 
        nombre:"pantalones",
        id:"pantalone"
    },
    precio: 45000
},
{
    id:"pantalon-azul_claro",
    titulo:"Pantalón Azul Clro",
    imagen:"./img/Pantalones/02.jpg",
    categoria:{ 
        nombre:"pantalones",
        id:"pantalone"
    },
    precio: 45000
},
//Mochos_Bermudas
{
    id:"Bermuda-kaki",
    titulo:"Bemuda Kaki",
    imagen:"./img/Bermudas/01.jpg",
    categoria:{ 
        nombre:"bermudas",
        id:"bermuda"
    },
    precio: 40000
},
{
    id:"mocho-azul_oscuro",
    titulo:"Mocho Azul Oscuro",
    imagen:"./img/Bermudas/02.jpg",
    categoria:{ 
        nombre:"bermudas",
        id:"bermuda"
    },
    precio: 40000
},
{
    id:"Mocho-azul_claro",
    titulo:"Mocho Azul Claro",
    imagen:"./img/Bermudas/03.jpg",
    categoria:{ 
        nombre:"bermudas",
        id:"bermuda"
    },
    precio: 40000
},
{
    id:"Mocho-azul_rey_oscuro",
    titulo:"Mocho Azul Rey Oscuro",
    imagen:"./img/Bermudas/04.jpg",
    categoria:{ 
        nombre:"bermudas",
        id:"bermuda"
    },
    precio: 40000
},
{
    id:"Mocho-negro",
    titulo:"Mocho Negro",
    imagen:"./img/Bermudas/05.jpg",
    categoria:{ 
        nombre:"bermudas",
        id:"bermuda"
    },
    precio: 40000
},
{
    id:"Mocho-cafe_claro",
    titulo:"Mocho Cafe Claro",
    imagen:"./img/Bermudas/06.jpg",
    categoria:{ 
        nombre:"bermudas",
        id:"bermuda"
    },
    precio: 40000
}
];

// Con cada uno de esto archivos accedemos a los elementos del HTML.
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito");

// Funcion que nos permite seleccionar los productos. 
function cargarProductos(productosElegidos){
    // Nos permite obtener todo el elemento del HTML junto a las etiquetas. 
    contenedorProductos.innerHTML = "";
    // En este apartado, tenemos la tarjeta que se encarga de conservar cada uno de los productos. 
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `
        // Agregamos el elemento HTML al que ya teniamos creado previamente. 
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
    
};

// Hacemos el llamado de la funcion producto, para que todos sean agregados de manera correcta. 
cargarProductos(productos); 

// Aqui se hace la programacion de los botones de las categorias. 
botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});
 
// Funcion para agregar los productos al carrito.
function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

// Obtenemos todos los que se han almacenado en el localstorage del navegador.
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

// Esto es para que el numero del carrito se actualize a medida que vamos agregando productos. 
if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

// Nos permite agregar los productos al carrito, mantenerlos y conservarlos de igualmanera en ese apartado.
function agregarAlCarrito (e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    // Condicion para que se actualize el boton. 
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
// Llamado a la funcion para actualizar el boton de la cantidad de productos en carrito
actualizarNumerito();
    // Se hace el string de los productos en carrito. 
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
} 

// Funcion que actualiza el numero de productos en el carrito.
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}