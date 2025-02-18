// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar amigos desde el campo de entrada
function agregarAmigoDesdeInput() {
    const input = document.getElementById('nombreAmigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    input.value = "";
    console.log(amigos); // Para verificar que el amigo se ha agregado correctamente
    mostrarAmigosEnLista();
}

// Función para mostrar los amigos en una lista HTML
function mostrarAmigosEnLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    // Recorrer el array de amigos y crear elementos <li> para cada uno
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio y obtener el nombre sorteado
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
    console.log(`Amigo sorteado: ${amigoSorteado}`); // Para verificar el amigo sorteado
}

