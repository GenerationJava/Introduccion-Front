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












