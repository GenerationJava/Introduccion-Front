//El console.log() es un método del objeto console, que viene a ser el símil de System.out.println()
console.log("Bienvenido nuevamente");

/** MÉTODOS DE JS
//Método prompt() me permite solicitar información
//Declaramos variables con var, let y const
let nombre = prompt("Ingresa información");
console.log("Hola " + nombre + ", ¿cómo estás?");

//Método alert() muestra un mensaje en pantalla
alert("Buen día " + nombre);

//Método confirm() muestra un mensaje con una pregunta de confirmación, obteniendo el resultado como boolean
let confirmarCompra = confirm("¿Desea confirmar su compra?");
console.log("Estado de confirmación de la compra: " + confirmarCompra);
**/

/**TIPOS DE DATO EN JS */
//Maneras de declarar variables
//var => Idealmente para variables globales
var nombreProducto = "Computador";

//Let => Idealmente para bloques de código, let permite cambiar el valor
let precio = 5;
precio = 15.99;

//Const => Define constantes, es decir, no se podrá cambiar el valor
const iva = 0.19;

//Datos primitivos
//Números -> Js igual va a tratar a los números como flotantes
console.log("El precio del producto es de " + precio + "$");

//String -> Cadenas de texto
console.log("El " + nombreProducto + " es una variable de tipo String");

// Javascript es un lenguaje debilmente tipado, es decir, no impide que una variable almacene distitos tipos de dato
// nombreProducto = 50;
// console.log(nombreProducto);

//Booleans -> Valores de verdadero o falso
let disponible = true;
console.log("El producto está disponible? " + disponible);

//Null -> Variables vacías = Variable nula
let descuento = null;
console.log("El descuento en la compra es " + descuento);

//Undefined -> Variables que todavía no tienen un valor asignado
let cantidad;
console.log(cantidad);

/*** OPERADORES ***/
//Operadores aritméticos: +, -, *, / y %
//Operadores de comparación: <, >, ==(igualdad), !=(diferente de), === (igualdad estricta), !==(diferente de "estricto")
let stock = 50;
console.log("¿La cantidad de productos es mayor a 20? " + (stock > 20));

console.log("¿Existen 50 productos en stock? ", stock == "50");

console.log("¿Existen exactamente 50 productos en stock? ", stock === "50");

//Operadores lógicos: &&("y" lógico) ||("o" lógico) !("not" lógico)
console.log("¿El stock es mayor a 10 y menor a 100? ", stock > 10 && stock < 100);

console.log("¿El stock es mayor a 60 o menor a 30? ", stock > 60 || stock < 30);

console.log("¿Hay stock en existencia? ", !(stock < 0));
/*******/

//CONDICIONALES
// stock = 0;
if (stock > 30) {
    console.log("Hay suficiente stock para la venta");
} else if (stock > 0 && stock < 29) {
    console.log("Hay productos en existencia pero se está agotando el stock");
}
else {
    console.log("No hay suficiente stock");
}

//BUCLES
//Bucle while -> Mucho cuidado de crear un bucle infinito
stock = 5;
while (stock > 0) {
    console.log("Se ha vendido un " + nombreProducto + ", queda un stock de " + stock);
    //Terminamos con todo el stock
    stock--;
}

//Bucle do while -> Ejecuta el bloque por lo menos una vez antes de comparar
do {
    //stock vale 0
    console.log("Inicia la venta de " + nombreProducto);
    console.log("Hay un total de " + stock + " productos");
} while (stock > 0);

//Bucle for -> Una sintaxis más concisa de un bucle, manejando la variable, condición y operación
for (let nuevoStock = 10; stock < nuevoStock; stock++) {
    console.log("Se ha agregado un nuevo " + nombreProducto);
}
console.log("Existe un stock de " + stock);

/*** FUNCIONES ***/
/*Palabra reservada function + nombreFuncion + (argumentos) {
    Bloque de código
    "return" para retornar un valor
}*/
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

//Almacenamos el valor que retorna la función en una variable
let totalCompra = calcularTotal(1000, 5);
console.log("El total de la compra es ", totalCompra);

//Función que recibe otra función como argumento
function generarBoleta(nombre, producto, operacion) {
    return operacion(nombre, producto);
}

//Funciones como argumentos (callback)
console.log(generarBoleta("Martin", nombreProducto, function(nombre, producto) {
    console.log("El usuario " + nombre + " ha comprado " + producto);
}
));

//Función para generar el descuento
function aplicarDescuento(precio, cantidad, funcionDescuento) {
    return funcionDescuento(precio, cantidad);
}

let nuevoPrecio = aplicarDescuento(1000, 10, function(precio, cantidad) {
    const porcentaje = 0.9;
    return (precio * cantidad) * porcentaje;
}) 

console.log("El nuevo precio con el descuento es de ", nuevoPrecio);

//Funciones flecha(Arrow function) =>
let precioFinal = (nuevoPrecio, iva) => nuevoPrecio + (nuevoPrecio * iva);

console.log("El precio final de su compra con el IVA es de ", precioFinal(nuevoPrecio, iva));

/*** ESTRUCTURAS ***/
let productos = ["Celular", "Computador", "Auriculares"];
console.log(productos);
/*Agregar elementos en un arreglo
productos.push("Cargador");
console.log(productos);
productos.push(10);
console.log(productos);
productos.push(true);
console.log(productos);*/
/*Remover elementos al final
productos.pop();
console.log(productos);*/
/*Agregar al principio y remover al principio
productos.shift();
console.log(productos);
productos.unshift("Router");
console.log(productos);

for (let i = 0; i < productos.length; i++) {
    console.log("El nombre del producto en esta posición es ", productos[i]);
}*/

//Recorrer el arreglo con map() para generar un nuevo arreglo a partir del primero y haciendo cambios en los datos
let productosEnMayuscula = productos.map(producto => producto.toUpperCase());
console.log(productosEnMayuscula);

//Recorrer el arreglo con filter() para filtrar según un criterio y almacenar en un nuevo arreglo
let productosFiltrados = productos.filter(producto => producto.includes("e"));
console.log(productosFiltrados);

//Crear variable que guarde un producto seleccionado por nombre
// function buscarProducto(productos, producto) {
//      //Bucle para ir iterando por la lista y comparando los nombres de los productos
//  }
let productoSeleccionado = productos.find(producto => producto === "Auriculares");
console.log(productoSeleccionado);

//Método reduce() sirve para acumular valores en un arreglo
// let totalesCarrito = [1000, 5000, 500];
// let totalCarrito = totalesCarrito.reduce((acumulador, precio) => acumulador + precio, 0);
// console.log("El total de todos lo ítems es ", totalCarrito);

// let numeros = [10, 100, 1000, 10000];
// let sumaNumeros = numeros.reduce((resultado, numero) => resultado + numero, 10);
// console.log(sumaNumeros);

/*** OBJETOS ***/
let cliente = {
    //Atributos 
    nombre: "Juan Pérez",
    edad: 30,
    esClienteFrecuente: true,
    metodoPago: "Tarjeta"
}

console.log("El nombre del cliente es ", cliente.nombre);

let tienda = {
    //Atributo
    nombre: "Tech Store",
    //Métodos
    mostrarNombre: function() {
        return this.nombre;
    },
    calcularTotalConIva: (precio) => precio * 1.19
}

console.log("El precio con IVA sería de ", tienda.calcularTotalConIva(1000));

/*** JSON ***/
//(Javascript Object Notation) = estándar de comunicación
//Convertir un objeto JS en un string JSON, método stringify()
let datosCliente = JSON.stringify(cliente);
console.log(datosCliente);
//Convertir una cadena JSON a código JS, método parse()
let objetoCliente = JSON.parse(datosCliente);
console.log(objetoCliente);

// let pokemon = {
//     //Atributos
//     elemento: "Agua",
//     nombre: "Squirtle",
//     //Métodos
//     atacar: function(puntosVida, puntosAtaque) {
//         return puntosVida - puntosAtaque;
//     }
// }

//Template literals, permiten tomar valores de manera dinámica, funcionan con "bacticks"
cliente.nombre = "Martin";
let perfilCliente = `Su nombre de cliente es ${cliente.nombre} ha comprado con ${cliente.metodoPago}`;
console.log(perfilCliente);

//Spread operador, permite expandir la cantidad de elementos de un arreglo sin modificar el original
let categorias = ["Electrónica", "Moda", "Hogar"];
let categoriasNuevas = [...categorias, "Salud", "Cosmeticos", "Deporte"];
console.log(categoriasNuevas);

//Acá el operador se usa en el contexto de la función 
function mostrarCategorias(...categorias) {
    console.log("Estas son las categorías existentes ", categorias);
}
mostrarCategorias("Entretenimiento", "Jardin", "Cocina");


























