"use strict"

// En este archivo encontrarás algunos ejercicios en los cuales
// relacionados con la declaración de variables en Javascript

// 1. Encuentra la razón por qué el siguiente código lanza un error:

(function() {
    let a = 45;
    console.log(a)
   
})()

// 2. Encuentra el resultado que la siguiente función imprime
// y entiende por qué corre sin problema teniendo en cuenta
// que el ejercicio anterior lanzaba un error.

(function() {
    var a = 3;
    console.log(a)
    
})()

// 3. Encuentra por qué el siguiente código devuelve un error

 (function() {
   let a, b;
   const c =1;
   a = 3;
   b = 2;
    console.log(a + b + c)
 })()

// 4. Encuentra la razón del error que retorna el siguiente código

(function() {
    let a = 10;
    const b = 3;
    var suma = a + b;  
    console.log(suma);
})()

// 5. Encuentra la razón del error que lanza el siguiente código

 (function() {
    var a = true;
    if (a) {
    var b = 'hola';
   }
    console.log(b);
 })()

// 6. Encuentra el valor que imprime el siguiente código en consola:

function saluda() {
nombre = "David";
}
saluda();
console.log(nombre);

// BONUS -- Di 3 formas que se te ocurran para asignar una variable como undefined


// ***** Para correr este archivo en la consola de node ejecuta el siguiente comando:
// ***** node ./ejercicios/variables/scope.js