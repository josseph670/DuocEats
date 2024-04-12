// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito() {
    const producto = {
        id: 1, // ID del producto
        nombre: "Producto de Ejemplo", // Nombre del producto
        precio: 10.99 // Precio del producto
    };
    
    carrito.push(producto);
    mostrarCarrito();
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <p>${producto.nombre} - $${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        cartContainer.appendChild(item);
    });

    // Mostrar la ventana del carrito
    document.getElementById('cartOverlay').style.display = 'block';
}

// Función para cerrar la ventana del carrito
function cerrarCarrito() {
    document.getElementById('cartOverlay').style.display = 'none';
}

// Función para alternar la visibilidad de la ventana del carrito
function toggleCarrito() {
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay.style.display === 'block') {
        cerrarCarrito();
    } else {
        mostrarCarrito();
    }
}

// Hacer que la ventana del carrito se mueva con el header
window.onscroll = function() {
    const header = document.querySelector('header');
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.style.top = header.offsetHeight + 'px';
};
