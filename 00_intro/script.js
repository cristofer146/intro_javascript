const paginaweb = document.querySelector("h1#paginaweb");

console.log(paginaweb);

//Aqui usamos el ID del button para imprimir por la console
const btncarro = document.querySelector("button#carro");
console.log(btncarro);

//Aqui usamos el ID del div para imprimir por la console
const divdatosPersonales = document.querySelector("div#datosPersonales");
console.log(divdatosPersonales);

//Aqui usamos eventos para dar doble click
btncarro.addEventListener("dblclick" ,function (){
    divdatosPersonales.style.display = "none";
    paginaweb.style.color = "red";
    paginaweb.style.fontStyle = "italic";
    paginaweb.innerHTML = "Haz hecho doble click!"; 

    
});