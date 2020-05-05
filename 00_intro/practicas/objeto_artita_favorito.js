
//Pidiendole datos al usuario a trave de un objeto
let artitaFavorito = {
nombre: prompt("Cual es el nombre de tu artista favorito"),

edad: prompt("Cual es la edad de tu artista favorito"),

lugarNacimiento: prompt("De donde es tu artista favorita"),

canciones: prompt("Dijite tres canciones de su artita favorito si desea seguir purse aceptar"),

}

let dijiteCancione = {
    Primercancion: prompt("Dijete la primera cancion"),

    sagundaCancion: prompt("Dijite la segunda cancion"),

    tercerCancion: prompt("Dijite la tercera cancion"),

     confirmacion: confirm("Desea ver los resultado de esta informacion"),
}

let cantanteFavorito = {
 dijitaCancion: "En el nombre de jesus",
}

console.table(artitaFavorito);

console.table(dijiteCancione);


console.log(`Cual es el nombre de tu artista farito: ${artitaFavorito.nombre}`);

console.log(`Cual es la edad de tu artista favorito: ${artitaFavorito.edad}`);

console.log(`De dondo es tu artista favorito: ${artitaFavorito.lugarNacimiento}`);

console.log(`Dijite una cacion de su artista favorito: ${cantanteFavorito.dijitaCancion}`);