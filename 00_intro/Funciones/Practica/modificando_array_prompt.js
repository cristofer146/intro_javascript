let nombre = prompt("Dime tu nombre");

let edad = Number.parseInt(prompt("Dime tu edad"));

let coloresFavoritos = [];


console.log(nombre);

console.log(edad);

console.log("Antes");

console.table(coloresFavoritos);

// Forma #1
/* 
coloresFavoritos[0] = prompt("Dime tu primer color favorito");

coloresFavoritos[1] = prompt("Dime tu segundo color favorito");

coloresFavoritos[2] = prompt("Dime tu tercer color favorito");

console.log("Despues");

console.table(coloresFavoritos);

console.log(`Tu primer color favorito es: ${coloresFavoritos[0]}`);
*/


// Forma #2
/*
coloresFavoritos.push( prompt("Dime tu primer color favorito") );

coloresFavoritos.push(prompt("Dime tu segundo color favorito") );

coloresFavoritos.push(prompt("Dime tu tercer color favorito") );

console.table(coloresFavoritos);
*/

// Forma #3

let color1 = prompt("Dime tu primer color");

let color2 = prompt("Dime tu segundo color");

let color3 = prompt("Dime tu tercer color");

color1 = `El primer color es ${color1}`;

coloresFavoritos[0] = color1;

coloresFavoritos[1] = color2;

coloresFavoritos[6] = color3;





coloresFavoritos.push(color1);

coloresFavoritos.push(color2);

coloresFavoritos.push(color3);

console.table(coloresFavoritos);

