 //Mostrar Dias de la semanas
 let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

 console.table(dias);

 console.log(dias[0])
 
 // Dasto familiares
 let familia = [`padre: hery`, "Madre: marianela", "Hermano: brainly", "Hermano: Brayan"];

 console.table(familia);

// Datos personales 
 let persona = {
nombre: "cristofer",
apellido: "sanchez",
fechaNacimiento: "24 de octubre del 1999 ",
lugarNacimiento: "santiago de los caballeros",
eda: "20",
poseeslicencia: false,
Estaenlauniversidad: false,
tienesmotor: true,
comidaFavorita: ["Pescado", "Moro de guandule", "Arro blanco"],
paisquemegustan: ["New york", "Paris", "Argentina",],
billeterabasia: null,
 };

 console.table(persona);

 //Artita favorito
 let DastoPersonales = {
 nombre: "Roberto",
 apellido: "Orellana",
 lugarNacimiento: "Talcahuano chile",
 fechaNacimiento: "27 de febrero de 1965",
 };
 console.table(DastoPersonales);

 let btnmostrar = document.querySelector("#mostrar");
 
btnmostrar.addEventListener("click", function(){
    let inputnombre = document.querySelector("input.nombre");

  

   console.table(inputnombre.value);



});
 
