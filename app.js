// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// L�gica del juego: Amigo Secreto

// Estado: lista de amigos ingresados
let amigos = [];

// Referencias a elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigosEl = document.getElementById("listaAmigos");
const resultadoEl = document.getElementById("resultado");

// Renderiza la lista visible de amigos
function renderLista() {
  if (!listaAmigosEl) return;
  listaAmigosEl.innerHTML = "";
  amigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigosEl.appendChild(li);
  });
}

// Limpia el resultado mostrado
function limpiarResultado() {
  if (!resultadoEl) return;
  resultadoEl.innerHTML = "";
}

// Agrega un nombre a la lista con validaci�n
function agregarAmigo() {
  const nombre = (inputAmigo?.value || "").trim();

  if (!nombre) {
    alert("Por favor, inserte un nombre.");
    inputAmigo?.focus();
    return;
  }

  amigos.push(nombre);
  if (inputAmigo) {
    inputAmigo.value = "";
    inputAmigo.focus();
  }
  limpiarResultado();
  renderLista();
}

// Sortea un amigo al azar y lo muestra en pantalla
function sortearAmigo() {
  limpiarResultado();

  if (amigos.length === 0) {
    alert("Primero agrega al menos un nombre.");
    inputAmigo?.focus();
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const seleccionado = amigos[indice];

  if (resultadoEl) {
    const li = document.createElement("li");
    li.textContent = `Amigo secreto: ${seleccionado}`;
    resultadoEl.appendChild(li);
  }
}

// Permite agregar con Enter desde el input
inputAmigo?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    agregarAmigo();
  }
});

// Expone las funciones para los botones con onclick en el HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
