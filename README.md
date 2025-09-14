# Amigo Secreto

Aplicación web simple para gestionar una lista de amigos y sortear aleatoriamente un "amigo secreto". Pensada para practicar lógica de programación en JavaScript manipulando el DOM.

## Demo (GitHub Pages)
https://victorhoq.github.io/amigo-secreto/

## Características
- Agregar nombres a una lista con validación.
- Visualizar la lista actualizada sin duplicados en el render.
- Sortear un nombre al azar usando `Math.random()` y `Math.floor()`.
- Agregar con la tecla Enter desde el input.

## Requisitos
- Navegador moderno (no requiere instalaciones ni dependencias).

## Cómo ejecutar
- Opción rápida: abre `index.html` directamente en tu navegador.
- Opción recomendada (servidor local):
  - Python: `python -m http.server 8000` y abre `http://localhost:8000`.
  - Node (si lo prefieres): `npx serve` en la carpeta del proyecto.

## Uso
1. Escribe un nombre en el campo de texto.
2. Presiona el botón "Adicionar" o la tecla Enter para agregarlo.
3. Repite para todos los amigos que quieras.
4. Presiona "Sortear amigo" para mostrar un nombre al azar en la sección de resultado.

## Estructura del proyecto
```
.
├── assets/
├── app.js        # Lógica de la app (lista, validación, sorteo)
├── index.html    # Estructura y botones con eventos onclick
├── style.css     # Estilos de la interfaz
└── README.md
```

## Detalles de implementación
- Lista en memoria: `let amigos = []`.
- Agregar: `agregarAmigo()` valida entrada, hace `push`, limpia input y re-renderiza la lista.
- Render: `renderLista()` limpia con `innerHTML = ""` y recorre el arreglo con `for` creando `<li>`.
- Sorteo: `sortearAmigo()` verifica que haya elementos, calcula índice aleatorio y actualiza el resultado con `innerHTML`.

## Desarrollo
- Rama principal: `main`.
- Estilo de commits por pequeñas funcionalidades (feat/docs/fix).

## Notas
- Si observas caracteres extraños en textos (acentos/ñ), asegúrate de guardar los archivos en codificación UTF‑8.
