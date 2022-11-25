
// OPERADORES LÓGICOS

// && - and

// || - or

// ! - negación

// var año = 2023;
// var imprimir ;

// if ( año < 2020 || año > 2022) {
//     alert("Este no es tu año");
// } else {
//     alert("Estas en el año correcto");
// }

// CONDICIONAL SWITCH

// switch (año) {
//     case 2023:
//         imprimir = "Tu vienes del futuro";
//     break;
//     case 2021 :
//         imprimir = "Tu vienes del pasado";
//     break;
//     case 2022:
//         imprimir = "Estás en el presente";
//     break;
//     default:
//         imprimir = "Dato no válido";
//     break;
// }

// alert(imprimir);

// Bucle FOR

// let año = 2020;

// for (let i = año; i < 2031; i++) {
//     console.log("Vamos en el año: "+i);
// }

// bucle WHILE

// let año = 2000;

// while (año <= 2022) {
//     console.log("Vines del pasado!"+ año);

//     año++;
// }

// do {
//     alert("Estamos en el año: "+ año);
//     año++;
// } while (año <= 2005);

// ALERTA

// let alerta = alert("Esta es una alerta");

// // CONFIRMACIÓN
// confirm("Aceptas recibir notificaciones de tu Dios?");

// INGRESO DE DATOS

// let edad = prompt("Qué edad tienes?");

// if (edad <= 26){
//     alert("Ya falta poco para tu cumple");
// } else if (edad > 26){
//     alert("FELICIDADES, YA TIENES 27 AÑOS, ESTÁS MÁS CERCA DE TUS METAS");
// } else {
//     alert("Dato desconocido");
// }

// EJERCICIO

// programa que pida dos números y que diga cuál es mayor y cuál es el menor o si son iguales


// let ejemplos = parseInt(prompt("Ingresa el primer número:", 0 ));
// let ejemplo = parseInt(prompt("Ingresa el segundo número",0 ));

// if (ejemplo < ejemplos){
//     alert("El número mayor es: "+ ejemplos+" y el número menor es: " + ejemplo);
// } else if (ejemplo > ejemplos){
//     alert("El número mayor es: "+ejemplo+" y el menor es: "+ejemplos)
// } else if (ejemplo == ejemplos) {
//     alert("Ambos números son iguales");
// } else {
//     alert("Ingresa un dato válido");
// }

// EJERCICIO

// Utilizando un bucle, sumar los números intoducidos y cuando el usuario introduzca un número negativo mostrar la sumatoria y el promedio de los números ingresados

// let suma = 0;
// let contador = 0;

// do {
//     numero =parseInt( prompt("Introduce un número cualquiera: ", 0));

//     if(isNaN(numero)){
//         numero = 0;
//     } else if (numero >= 0){
//         suma = suma + numero;

//         contador++;
//     }

//     console.log(suma, contador);
// } while (numero >= 0);  

// let operacion = alert("La sumatoria de los números que ingresaste es: "+suma);
// let operacion2 = alert("La media de los números que ingresaste es: "+suma/contador);


// Hacer un programa que muestre todos los números que hay entre dos números ingresados por el usuario

// var numero1 = parseInt(prompt("Introduce el primer número: "));
// var numero2 = parseInt(prompt("Introduce el segundo número: "));


// for (let i = numero1; i < numero2; i++) {
// console.log("La cuenta va en: ", i);    
// }

// EJERCICIO

// MOSTRAR TODOS LOS NÚMEROS IMPARES QUE HAY ENTRE DOS NÚMEROS INTRODUCIDOS POR EL USUARIO

// var numero1 = parseInt(prompt("Introduce el primer número:", 0));
// var numero2 = parseInt(prompt("Introduce el segundo número:", 0));

// while (numero1 < numero2) {

//     numero1++;
    
//     // for (let i = numero1; i < numero2; i++) {
        
//         if(numero1%2 != 0){
//             document.write("El número "+numero1+ "es impar"+"<br>")
//         }
//     }

// }

// EJERCICIO

// Todos los números divisores de un número introducido por el usuario

// let numero = parseInt(prompt("Introduce un número: "));

//     for (let i = 1; i <= numero; i++) {
//     if(numero%i == 0){
//         console.log("Los números divisibles son: "+i);
//     }        
//     }

// EJERCICIO
// Que diga si un número es par o impar
// Si no es válido que nos pida de nuevo el número
        
// while (isNaN(numero)) {
//  var numero = parseInt(prompt("Conoce si tu número es par o impar: "));
// }

// if(numero%2 == 0){
//     console.log("El número: "+ numero+ " es par");
// }else if(numero%2 != 0) {
//     console.log("El número: "+ numero+ " es impar");
// }

// EJERCICIO
// Tabla de multiplicar de un número introducido por el usuario

// let numero = parseInt(prompt("Qué tabla de multiplicar quieres ver?"));

// for (let i = 1; i <= 10; numero * i++) {
//     tabla =  i * numero;
//     console.log(tabla);
// }
/////////////////////////////////////////////////////////////////////
// Ejercicio

// Calculadora que pida dos números por pantalla, si si introducen mal que los vuelva a pedir, mostrar el resultado de sumar, restar, dividir y multiplicar las dos cifras en el cuerpo de la página, en una alerta y en la consola.

// let numero1 = parseInt(prompt("Ingresa el primer número: "));
// let numero2 = parseInt(prompt("Ingresa el segundo número: "));

// while (isNaN(numero1) || isNaN(numero2)) {
//     numero1 = parseInt(prompt("Ingresa el primer número: "));
//     numero2 = parseInt(prompt("Ingresa el segundo número: "));
// }

// let resultado = "<h1>"+"La suma es: "+(numero1+numero2)+"<br/>"+
//                 "La resta es: "+(numero1-numero2)+"<br/>"+
//                 "La división es: "+(numero1/numero2)+"<br/>"+
//                 "La multiplicación es: "+(numero1*numero2)+"<h1/>";

// document.write(resultado);
// console.log(resultado);
// alert(resultado);

/////////////////////////////////////////////////////////////////////

// FUNCIONES
// Es una agrupación de código con instrucciones específicas que se puedan llamar desde otro archivo

// function calculadora(numero1, numero2){
//     console.log("Una suma: "+ (numero1+numero2));
//     console.log("Una resta: "+ (numero1+numero2));
//     console.log("Una multiplicación: "+ (numero1+numero2));
//     console.log("Una división: "+ (numero1+numero2));
//     console.log(" --------------------------------------------");


// }

// calculadora(12,50 );
// calculadora(2,5 );


// PARÁMETROS OPCIONALES

// function ejemplo(numero3, numero4, mostrar = false){

//     if(mostrar == false){
//         console.log("Una suma: "+ (numero3+numero4));
//         console.log("Una resta: "+ (numero3-numero4));
//         console.log("Una multiplicación: "+ (numero3+numero4));
//         console.log("Una división: "+ (numero3/numero4));
//         console.log(" --------------------------------------------");    
//     }else {

//         document.write("Una suma: "+ (numero3+numero4)+"<br/>");
//         document.write("Una resta: "+ (numero3-numero4)+"<br/>");
//         document.write("Una multiplicación: "+ (numero3*numero4)+"<br/>");
//         document.write("Una división: "+ (numero3/numero4)+"<br/>");
//         document.write(" --------------------------------------------");
//     }

// }

// ejemplo(2,4,true);

// ///////////////////////////////////////////////////////////////

// Funciones dentro de otra función


// function porConsola(numero1,numero2){
//         console.log("Una suma: "+ (numero1+numero2));
//         console.log("Una resta: "+ (numero1-numero2));
//         console.log("Una multiplicación: "+ (numero1*numero2));
//         console.log("Una división: "+ (numero1/numero2));
//         console.log(" --------------------------------------------"); 
// }

// function porBody(numero1, numero2){
//         document.write("Una suma: "+ (numero1+numero2)+"<br/>");
//         document.write("Una resta: "+ (numero1-numero2)+"<br/>");
//         document.write("Una multiplicación: "+ (numero1*numero2)+"<br/>");
//         document.write("Una división: "+ (numero1/numero2)+"<br/>");
//         document.write(" --------------------------------------------"+"<br/>");
//     }

// function calculadora(numero1, numero2, param = false) {
  
//     if (param == false) {
//         porConsola(numero1, numero2);
//     } else {
//         porBody(numero1, numero2);
        
//     }
//     return true;
// }

// calculadora(3,5,true);
// calculadora(5,50,false);
// calculadora(8,6,true);
///////////////////////////////////////////////////////////////////

// REST (resto) Y SPREAD EN LOS PARÁMETROS


// rest
// function listadodeFrutas(fruta1, fruta2, ...resto_de_frutas){
//     console.log("Fruta 1: ", fruta1);
//     console.log("Fruta 2: ", fruta2);
//     console.log(resto_de_frutas);
// }

// listadodeFrutas("Naranja ","Manzana ","Sandía ","Pera ","Melón ","Coco ");

// // spread

// var frutas = ["Naranja ", "Manzana"];
// listadodeFrutas(...frutas, "sandía","Pera","Melón", "Coco");

///////////////////////////////////////////////////////////////////////

// FUNCIONES ANÓNIMAS
// Es una función que no tiene nombre y se puede meter en una variable, se usa para hacer callbacks

// var pelicula = function(nombre){
//     return "La película es: "+nombre;
// }

// console.log(pelicula("Hombres de negro"));

// // callback es aquella función que es pasada como argumento a otra función para que sea llamada de nuevo    

// function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
//     var sumar = (numero1 + numero2);

//     sumaYmuestra(sumar);
//     sumaPorDos(sumar);  
//      return sumar;
// }

// sumame(5,5 , function(dato){
//     console.log("La suma es: "+ dato);
// },
// function(dato){
//     console.log("La suma por dos es: " + (dato*2));
// }
// )

//////////////////////////////////////////////////////////////////////

// ARROW FUNCTION

// var pelicula = function(nombre){
//     return "La película es: "+nombre;
// }

// console.log(pelicula("Hombres de negro"));

// // callback es aquella función que es pasada como argumento a otra función para que sea llamada de nuevo    

// function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
//     var sumar = (numero1 + numero2);

//     sumaYmuestra(sumar);
//     sumaPorDos(sumar);  
//      return sumar;
// }

// sumame(5,5 , dato =>{
//     console.log("La suma es: "+ dato);
// },
// dato =>{
//     console.log("La suma por dos es: " + (dato*2));
// }
// )
///////////////////////////////////////////////////////////////////////

// ÁMBITO DE LAS VARIABLES TRABAJANDO CON FUNCIONES
// var texto = "HOLA, SOY UNA VARIABLE GLOBAL";

// function holaMundo(texto){
//     let saludo = "Esta es una variable local";  
//     // Esta variable sólo se puede llamar dentro de esta función, no en el ámbito global, ya que está creada dentro de la función existente.
//     console.log(saludo);
    
//     console.log(texto);
//     console.log(numero.toString());
// }


// let numero = 23;
// holaMundo(texto );

/////////////////////////////////////////////////////////////////////////

// MÉTODOS PARA PROCESAR TEXTOS

// Transformación de textos
// var numero = 444;
// let texto1 = "Bienvenido al curso de Javascript";
// let texto2 = "Es un buen curso";

// var dato = numero.toString();
//     dato = texto1.toUpperCase();
//     dato = texto2.toLowerCase();

// // console.log(dato);

// // Calcular longitud

// var nombre = "Miguel";
//     nombre = ["Hola", "Mi nombre"];
// // console.log(nombre.length);

// // CONCATENAR 

// // var textoTotal = texto1+texto2;
// var textoTotal =texto1.concat(" "+ texto2);

// console.log(textoTotal);

// MÉTODOS DE BÚSQUEDA

// var numero = 444;
// var texto1 = "Bienvenido al curso";
// var texto2 = "Es un buen curso";

// var busqueda = texto1.lastIndexOf("curso");
// var busqueda2 = texto1.search("curso");
// var busqueda3 = texto1.match("curso");
// var busqueda4 = texto1.substr(14,5);
// var busqueda5 = texto1.charAt(14);
// var busqueda6 = texto1.startsWith("a");
// var busqueda7 = texto1.includes("a");

// console.log(busqueda);
// console.log(busqueda2);
// console.log(busqueda3);
// console.log(busqueda4);
// console.log(busqueda5);
// console.log(busqueda6);
// console.log(busqueda7);

/////////////////////////////////////////////////////////////////////

// FUNCIONES DE REEMPLAZO

// var numero = 444;
// var texto1 = "   Bienvenido al curso de Javascript";
// var texto2 = "Es un buen curso";

// var busqueda = texto1.replace("Javascript", "TEXTO DE REEMPLAZO");
// var busqueda2 = texto1.slice(2, 30);
// var busqueda3 = texto1.split(" ");
// var busqueda4 = texto1.trim();

// console.log(busqueda);
// console.log(busqueda2);
// console.log(busqueda3);

////////////////////////////////////////////////////////////////////

// PLANTILLAS DE TEXTO

// var nombre = prompt("Ingresa tu nombre");

// var apellidos = prompt("Ingresa tus apellidos");

// // var texto = "Mi nombre es: " + nombre + " Mis apellidos son: " + apellidos;

// var texto =  `
// <h1>Hola que tal<h1/>
// <h3>Mi nombre es: ${nombre} <h3/>
// <h3>Mi apellido es: ${apellidos} <h3/>

// `;

// document.write(texto); 

/////////////////////////////////////////////////////////////////////

// ARRAYS O ARREGLOS BÁSICOS
// Es un conjunto de datos que puede tener una variable

// Ejemplo de array
// var nombres = ["Miguel", "Angel", "Caldo", true, 76," gym", "xbox"];

// Ejemplo de array en forma de objeto
// var lenguajes = new Array("PHP","JS", "Java");

// console.log(nombres[2]);
// console.log(nombres.length);

// var elemento = prompt("Qué elemento del array quieres?", 0);

// if(elemento >= nombres.length){
//     alert("Introduce el número correcto menor que: " +nombres.length)
// }else{
//     alert(nombres[elemento]);
// }

// RECORRER UN ELEMENTO DE UN ARRAY

// document.write("<h1> Lenguajes de programación </h1>");
// document.write("<ul>");
// for (let i = 0; i < lenguajes.length; i++) {
//     document.write("<li>"+lenguajes[i]+"<li>");
// }
// document.write("</ul>");

// FOR EACH

// lenguajes.forEach((elemento, index, arreglo)=>{
//         console.log(arreglo);
//         document.write("<li>"+index+elemento+"<li>");

// })

// document.write("</ul>");


// let cosas = ["laptop", "lentes", "taza", "jbl", "control"];

// cosas.forEach((elemento, i, array)=>{
//     document.write(i+" "+elemento+" <br/>");
//     console.log(array);
// })

////////////////////////////////////////////////////////////////////

// ARRAYS MULTIDIMENSIONALES

// Arrays dentro de otros arrays

// var categoria = ['Acción', 'Terror', 'Comedia'];
// var peliculas = ['La verdad duele', 'Al Paccino', 'La vida es bella'];

// let cine= [categoria, peliculas];
// console.log(cine[0][1]);
// console.log(cine[1][2]);

// OPERACIONES CON LOS ARRAYS

// var elemento = "";

// do{
//     elemento = prompt("Ingresa tu película: ");
//     peliculas.push(elemento);
// }while(elemento != "acabar");


// // eliminar último elemento del array
// peliculas.pop();

// var indice = peliculas.indexOf('Al Paccino');
// console.log(indice);
// if(indice > -1){
//     peliculas.splice(indice, 1);
// }
// console.log(peliculas);

// // CONVERTIR ARRAY A STRING

// var peliculas_string = peliculas.join();
// console.log(peliculas_string);

// // CONVERTIR STRING A UN ARRAY

// var cadena = "texto1, texto2, texto3";

// let cadena_array = cadena.split(", ");
// console.log(cadena_array);
// console.log(typeof(cadena_array));

// ///////////////////////////////////////////////////////////////

// ORDENAR ARREGLOS

// var series = ["Mr. Robot", "The Witcher", "Los anillos del poder", "Suits"];

// console.log(series.sort());
// console.log(series.reverse());


// RECORRER ARREGLOS FOR IN
// var series = ["Mr. Robot", "The Witcher", "Los anillos del poder", "Suits"];

// for(serie in series){
//     document.write("<h3></h3>")
// }

// let movies = ["Mr. Robot", "The Witcher", "Los anillos del poder", "Suits", "Rick y Morty"];

// document.write("<h1>RECORRIENDO UN ARRAY CON 'FOR IN'</h1>");

// document.write("<ul>");
// for(pelis in movies){
//     document.write("<li>"+movies[pelis]+"</li>  ")
//     console.log(movies[pelis]);
// }
// document.write("</ul>");

    // BÚSQUEDAS EN UN ARRAY

    // let buscar = movies.find(movies => movies == "Suits");
    // let buscar2 = movies.findIndex(movies => movies == "Suits");
    // console.log("find: "+buscar);
    // console.log("findidex: "+buscar2);
    
    // // // Encontrar dentro de un array
    
    // let precios = [12, 30, 40,24, 20];
    // // let encontrar = precios.some(precio => precio <= 20);
    // let encontar = precios.some(function(precio){
    //     return precio <= 20;
    // })
    // console.log(encontar);
    // // Resultado esperado: True
    
    // console.log(encontrar);
////////////////////////////////////////////////////////////////////////////////////

// EJERCICIOS DE ARRAY Y FUNCIONES

// Hacer programa que pida 6 números por pantalla y los meta en un array
// Mostrar el array entero en el cuerpo de la página y en la consola
// Sacar el array ordenado y mostrarlo
// Invertir su orden y mostrarlo
// Mostrar cuántos elementos tiene el array
// Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice

// function mostrarArray (elementos, textoCustom = ""){
//     document.write("<h1>"+"Contenido del array: "+textoCustom+"</h1>");
//     document.write("<ul>");
//     elementos.forEach((elemento, index) => {
//         document.write("<li>"+elemento+"</li>")
//     });
//     document.write("</ul>");
// }

// // 1
// let numeros = [];

// for(let i = 0; i <= 5; i++){
//     numeros.push(prompt("Introduce un número",0));
// }

// console.log("1.- "+numeros);

// // Mostrar en el cuerpo de la página
// mostrarArray(numeros, "Primero");

// // SACAR EL ARRAY ORDENADO
// numeros.sort( (a,b) => a-b);
// mostrarArray(numeros, "ordenados");

// // MOSTRAR ARRAY EN SENTIDO CONTRARIO
// numeros.reverse();
// mostrarArray(numeros, "Invertidos");

// // MOSTRAR EL NÚMERO DE ELEMENTOS QUE TIENE EL ARRAY
// document.write("<h1>El Array tiene: "+numeros.length+" elementos</h1>");

// // BÚSQUEDA DEL VALOR  POR EL USUARIO

// let buscar = parseInt(prompt("Qué valor quieres buscar?",0));

// let encontrado = numeros.findIndex(num => num == buscar);

// if ( encontrado != -1){
//     alert("BIEN! El número que ingresaste se encuentra en el array, está en el índice: "+ encontrar);
// }else{
//     alert("NEL PASTEL");
// }

/////////////////////////////////////////////////////////////////////////

// function color (color){
//     caja.style.background = color;
// }

// // DOM

// // Conseguir elementos por su ID
// let caja = document.getElementById("micaja");

// let caja1 = document.querySelector("#micaja");

// caja.innerHTML = "TEXTO EN LA CAJA DESDE JS";
// caja.style.backgroundColor= "skyblue";
// color("green");


// console.log(caja);

// // Conseguir elementos por su etiqueta

// let select = document.getElementsByTagName("div");
// let seccion = document.querySelector("#miseccion");gb14h


// for (valor in select){
//     if (typeof select[valor].textContent == 'string'){
//         var parrafo = document.createElement("p");
//         var texto = document.createTextNode(select[valor].textContent);
//         parrafo.append(texto);
//         seccion.append(parrafo);
//     }
// }

// CONSEGUIR ELEMENTOS POR SU CLASE

// let clase = document.getElementsByClassName('rojo');

// for (nuevo in clase){

// }

//////////////////////////////////////////////////////////////////////////

// BOM Browser Object Model

// function getBom(){
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
//     console.log(screen.width);
//     console.log(screen.height);
//     console.log(window.location);
// }

// getBom();

// function redirect(url){
//     window.location(url);
// }

// function abrirVentana(url){
//     window.open(url,"", "width= 500, height=400");
// }

///////////////////////////////////////////////////////////////////////

// Eventos del mouse

// var boton = document.querySelector('#boton');

// function cambiarColor(){
//     console.log("Click");

//     var bg = boton.style.background;

//     if (bg == "green"){
//         boton.style.background= "red";
//     } else{
//     boton.style.background = "green";   
//     }
//     return true;
// }

// boton.addEventListener('click', function (){
//     cambiarColor();
// });

// let texto = document.querySelector('#divUno');
// texto.document.style