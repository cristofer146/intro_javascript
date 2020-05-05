
//Pidiendole informacion personar al usuario
let datos = {
    nombreCompleto: prompt("Cual es tu nombre completo"),

    fechaNacimiento: prompt("Fecha de nacimiento") ,

    lugarNacimiento: prompt("Lugar de nacimiento"),

    edad: Number.parseInt( prompt("Cual es tu edad") ),

    comidaFavoritas: prompt("Escribe tres comidas favitas"),

    licenciaConducir: String (false),

    estasUnivercidad: String (false), 

}

let datosPersonales = {
primerComida: prompt("Dijite su primer comida favorita"),

sugundaComida: prompt("Dijete su segunda comida favorita"),

tercerComida: prompt("Dijita su tercer comida favorita"),
}

let paisesvisitar = {

paisesParavisitar: prompt("Dijita 5 paises que te gustaria visitar aceptar si quiere continuar"),

primerPais: prompt("Dijite el primer pais"),

sengundoPais: prompt("Dijite el segundo pais"),

tercerPais: prompt("Dijite el tercer pais"),

cuartoPais: prompt("Dijie el cuarto pais"),

quintoPais: prompt("Dijete el quinto pais")
}



 
console.table(datos);

console.table(datosPersonales);


console.table(paisesvisitar);

let primerPaisparavisitar = {
    paisFavorito: "Paris",
}


//Impriendo dastos por la consola 
console.log(`Mi nombre completo es ${datos.nombreCompleto}`);

console.log(`Naci el ${datos.fechaNacimiento}`);

console.log(`Primer pais que me gustaria visitar${primerPaisparavisitar.paisFavorito}`);








