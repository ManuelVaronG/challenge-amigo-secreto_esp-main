// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables 
let Sorteo_Amigo = 0;
let Lista_Nombres = [];
let Sorteo_Max = 0;
let listaAmigos = '';

//Procesos
function Agregar_Amigo() {

    let Nombre_Amigo = document.getElementById('amigo').value;
    if(Nombre_Amigo == ''){

        alert('Por favor, ingrese un nombre');   //Si se agrega un nombre vacio

    }else{

        Limpiar_Caja();
        Lista_Nombres.push(Nombre_Amigo); //Agregar los nombres a la lista
        console.log(Lista_Nombres);
        Asignar_Texto_lista(Lista_Nombres); //Colocar la lista de nombres en la web

    }
    
}

function Sortear_Amigo(){

    let Amigo_aleatorio = Generar_Sorteo();
    Limpiar_Caja();  //limpiamos texto en la web
    document.getElementById('resultado').innerHTML = 'El amigo secreto sorteado es: ' + Lista_Nombres[Amigo_aleatorio];
    Lista_Nombres = []; //Remover elementos de la lista 

}

function Limpiar_Caja(){

    document.querySelector('#amigo').value = '';
    listaAmigos.innerHTML = '';  //Vaciar la lista
    document.getElementById('resultado').innerHTML = '';

}

function Asignar_Texto_lista(Lista){

    listaAmigos = document.getElementById("listaAmigos"); //Obtener el elemento ul
    Lista.forEach(amigo => {

        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);  //Agregar elemento a la lista

    });

}

function Generar_Sorteo(){

    return parseInt(Math.floor(Math.random()*Lista_Nombres.length)); //Generar una posicion random en la lista

}


