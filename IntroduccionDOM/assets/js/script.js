//Maneras de seleccionar elementos
//document.querySelector() permite seleccionar en base a etiquetas y selectores CSS, si hay varios elementos de una misma clase selecciona el primero solamente
let elemento = document.querySelector(".producto");
console.log(elemento);

//document.querySelectorAll() permite seleccionar un conjunto de elementos en base a una clase o etiqueta
let elementos = document.querySelectorAll(".producto");
// console.log(elementos);

//document.getElementById() permite seleccionar en base a su id
let elementoPorId = document.getElementById("descripcion");
console.log(elementoPorId);


//document.getElementByClassName() permite seleccionar en base a class
let elementosPorClase = document.getElementsByClassName("producto");
console.log(elementosPorClase);

//document.getElementByTagName() permite seleccionar en base a la etiqueta
let elementosPorEtiqueta = document.getElementsByTagName("p");
console.log(elementosPorEtiqueta);

//Manipular elementos seleccionados

//Manipular contenido de una etiqueta y texto
let titulo = document.getElementById("titulo-principal");
console.log(titulo.innerHTML);
titulo.innerHTML = "<strong>Mi nueva tienda de tecnología 2.0</strong>";
//Permite cambiar el contenido de la etiqueta HTML
titulo.textContent = "Tienda de tecnología nuevamente";//Permite cambiar el contenido de texto de un HTML

//Manipular atributos de un elemento
//document.createElement() permite crear nuevos elementos HTML
let imagen = document.createElement("img");
//Podemos acceder a los atributos a través de la variable
imagen.src = "https://http2.mlstatic.com/D_NQ_NP_795583-CBT80132079462_112024-O-a2-smartphone-pequeno-y-practico-soyes-xs11-doble-chip-.webp";
imagen.alt = "Imagen de Smartphone a la venta";
imagen.style.height = "200px";
// imagen.style.display = "block";
imagen.width = 200;

console.log(imagen);
//El métdo .append() y appendChild() permiten agregar el elemento HTML con referencia a su elemento padre
document.querySelector(".producto").append(imagen);
;

//Manipular la clase de un elemento
let primerProducto = document.querySelector(".producto");
// className sobrescribe el valor de class
// primerProducto.className = "otraClase";
// console.log(primerProducto);
console.log(primerProducto.classList);
primerProducto.classList.add("otra-clase");
console.log(primerProducto.classList);

//Crear un elemento con elementos hijos
let nuevoProducto = document.createElement("div");
nuevoProducto.classList.add("producto");
nuevoProducto.innerHTML = `
    <h2>Producto 4</h2>
    <p>Descripción del producto 1.</p>
    <button class="boton">Comprar</button>
    `;
console.log(nuevoProducto);
//append() agrega strings y varios nodos o elementos mientras que appendChild() sólo agrega nodos y uno a la vez
document.querySelector(".contenedor").appendChild(nuevoProducto);

//Eliminar un elemento
let ultimoProducto = document.querySelector(".producto:last-child");
console.log(ultimoProducto);
ultimoProducto.remove();

//Manipulación de eventos con JS
//Los eventos van a ser las distintas acciones que gatillen un efecto 

//click
let botonComprar = document.querySelector(".boton");
//el método .addEventListener() indica que va a estar esperando a que una acción se realice para ejecutar un bloque de código
botonComprar.addEventListener("click", function() {
    alert("Producto agregado al carrito");
});

let botonesComprar = document.querySelectorAll(".boton");
//forEach permite iterar sobre listas de Nodos o elementos
botonesComprar.forEach(boton => {
    //Para cada nodo agregamos un eventListener() para cambiar el color de fondo
    boton.addEventListener("mouseover", () => boton.style.backgroundColor = "gray")

    boton.addEventListener("mouseout", () => 
    boton.style.backgroundColor = "blue")
});







