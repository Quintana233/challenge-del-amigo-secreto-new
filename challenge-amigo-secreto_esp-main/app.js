// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let listaSorteados = [];

// Función genérica para asignar texto a un elemento
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Limpiar caja de input
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Agregar amigo a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (!nombreAmigo) {
        asignarTextoElemento('#resultado', 'Debes escribir un nombre válido');
        return;
    }

    if (listaAmigos.includes(nombreAmigo)) {
        asignarTextoElemento('#resultado', `El nombre "${nombreAmigo}" ya fue agregado`);
        limpiarCaja();
        return;
    }

    listaAmigos.push(nombreAmigo);
    actualizarLista();
    asignarTextoElemento('#resultado', `Se agregó a "${nombreAmigo}" a la lista`);
    limpiarCaja();
}

// Mostrar la lista en pantalla
function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    for (let amigo of listaAmigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    }
}

// Sortear amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        asignarTextoElemento('#resultado', 'Agrega al menos un nombre antes de sortear');
        return;
    }

    // Evitar que se repitan hasta sortear todos
    if (listaSorteados.length === listaAmigos.length) {
        asignarTextoElemento('#resultado', 'Ya se sortearon todos los amigos');
        return;
    }

    let indice = Math.floor(Math.random() * listaAmigos.length);
    let elegido = listaAmigos[indice];

    if (listaSorteados.includes(elegido)) {
        return sortearAmigo(); // Recursivo hasta encontrar uno que no salió
    } else {
        listaSorteados.push(elegido);
        asignarTextoElemento('#resultado', ` Tu amigo secreto es: ${elegido}`);
    }
}
