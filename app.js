// Variable global para almacenar los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();

    if (amigo !== "") {
        amigos.push(amigo); // Añadir el amigo a la lista
        input.value = ""; // Limpiar el campo de texto

        // Actualizar la lista en el HTML
        actualizarListaAmigos();
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para realizar el sorteo.");
        return;
    }

    const resultados = document.getElementById('resultado');
    resultados.innerHTML = ''; // Limpiar resultados anteriores

    // Crear un array con los amigos y mezclarlo
    const amigosSorteados = [...amigos];
    const sorteos = [];

    while (amigosSorteados.length > 0) {
        const amigo = amigosSorteados.pop();
        let amigoSorteado;
        
        // Asegurarse de que cada amigo no se sortee a sí mismo
        do {
            amigoSorteado = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];
        } while (amigoSorteado === amigo);

        sorteos.push({ amigo, amigoSorteado });

        // Eliminar el amigo sorteado de la lista
        amigosSorteados.splice(amigosSorteados.indexOf(amigoSorteado), 1);
    }

    // Mostrar los resultados
    sorteos.forEach(sorteo => {
        const li = document.createElement('li');
        li.textContent = `${sorteo.amigo} le ha tocado como amigo secreto a ${sorteo.amigoSorteado}`;
        resultados.appendChild(li);
    });
}