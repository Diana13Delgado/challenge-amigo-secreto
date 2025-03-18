// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear un array para capturar el nombre de los amigos
let nombreAmigos =[];
let amigosSorteados =[];
//Capturar el valor del campo de entrada
asignarTextoElemento (h1,"¡Juguemos al amigo secreto!")
function agregarAmigo(){
    let inputAmigos = document.getElementById("amigo").value;
    
//Validar la entrada
    if (inputAmigos==="") {
        alert ("Por favor, inserte un nombre");
        return;
//actualizar el array de amigos
    } else if (nombreAmigos.includes(inputAmigos.toUpperCase())){
        alert ("El amigo ya existe");
        return;
    }
    else {
        nombreAmigos.push(inputAmigos.toUpperCase());
        limpiarCaja()
        mostrarAmigos ();
        console.log (nombreAmigos);
    }
}
//Limpiar el campo de entrada
function limpiarCaja (){
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value ="";
    //console.log (nombreAmigos)
}
function mostrarAmigos(){
//obtener el elemneto de la lista
    let elementoLista = document.getElementById("listaAmigos");
//limpiar la lista existente
    elementoLista.innerHTML ="";
//iterara sobre el arreglo
    for (let i=0; i < nombreAmigos.length; i++){
        let li = document.createElement("li");
//agregar elemento a la lista
        li.textContent = nombreAmigos[i];
        elementoLista.appendChild(li);

    }
}
//Validar que haya amigos disponibles
function sortearAmigo (){
    if (nombreAmigos.length === 0){
        alert ("No hay amigos para sortear, por favor agregue los nombres");
        return;
    } else if (nombreAmigos.length === amigosSorteados.length){
        alert ("Ya no hay nombres para sortear");        
    }
    else {
//Generar un índice aleatorio
      let indiceAmigo = Math.floor(Math.random() * nombreAmigos.length); 
      console.log(indiceAmigo);
      if (amigosSorteados.includes(indiceAmigo)){
        return sortearAmigo (); 
      }else {
        amigosSorteados.push(indiceAmigo);
      }
//Obtener el nombre sorteado
      let nombreSorteado =  nombreAmigos[indiceAmigo];
//Mostrar el resultado
      let sorteo = document.getElementById ("amigoSorteado");
      sorteo.innerHTML = `El amigo sorteado es ${nombreSorteado}`;
    }
}











