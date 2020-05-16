//Seleccionar los elementos
const imgPerfil = document.querySelector(".imagen_perfil");

const tituloNombre = document.querySelector("h2.nombre");

const parrafoNombreUsuario = document.querySelector(".nombre_usuario");

const spanSeguidores = document.querySelector(".seguidores");

const spanSiguiendo = document.querySelector(".siguiendo");

const ParrafoBio = document.querySelector(".bio");

const btnBuscar = document.querySelector("#buscar");

const barraBusqueda = document.querySelector("#barra_busqueda");



btnBuscar.addEventListener("click", function () {
  obtenerDatosGitHub();
});

/*
imgPerfil.src = "https://avatars3.githubusercontent.com/u/59875474?v=4"

tituloNombre.textContent = user.name;

parrafoNombreUsuario.textContent = user.login;

spanSeguidores.textContent = user.followers;

spanSiguiendo.textContent = user.following;

*/

async function obtenerDatosGitHub() {
  //console.log("vamos a obtener los datos");

  let UsuarioBusqueda = barraBusqueda.value;

  let respuesta = await fetch("https://api.github.com/users/"+UsuarioBusqueda);

  if (respuesta.ok) {

    let inforUsuario = await respuesta.json();

    imgPerfil.src = "https://avatars3.githubusercontent.com/u/59875474?v=4";

    tituloNombre.textContent = inforUsuario.name;

    parrafoNombreUsuario.textContent = inforUsuario.login;

    spanSeguidores.textContent = inforUsuario.followers;

    spanSiguiendo.textContent = inforUsuario.following;

    ParrafoBio.textContent = inforUsuario.bio;
  } else {
    console.log("Ocurrio un problema");
  }
}
