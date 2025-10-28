// --- CONFIGURACIÓN DE LOS POSTS Y SUS CATEGORÍAS ---
const posts = [
    { id: 1, url: "blog1.html", categoria: "receta" },
    { id: 2, url: "blog2.html", categoria: "receta" },
    { id: 3, url: "blog3.html", categoria: "consejo" },
    { id: 4, url: "blog4.html", categoria: "consejo" },
    { id: 5, url: "blog5.html", categoria: "cocinaUtencilio" },
    { id: 5, url: "blog6.html", categoria: "receta" },
    { id: 5, url: "blog7.html", categoria: "cocinaUtencilio" }

];

// --- DETECTA EL POST ACTUAL ---
const path = window.location.pathname.split("/").pop();
const postActual = posts.find(p => p.url === path);

// --- SI EXISTE, CONFIGURA LA NAVEGACIÓN ---
if (postActual) {
    const categoria = postActual.categoria;
    const postsDeCategoria = posts.filter(p => p.categoria === categoria);
    const indice = postsDeCategoria.findIndex(p => p.id === postActual.id);

    const btnAnt = document.getElementById("btnAnterior");
    const btnSig = document.getElementById("btnSiguiente");

  // --- Lógica del botón "Anterior" ---
    if (indice > 0) {
        btnAnt.onclick = () => window.location.href = postsDeCategoria[indice - 1].url;
    } else {
        btnAnt.onclick = () => window.location.href = "../blogs.html"; // vuelve a la principal
    }

  // --- Lógica del botón "Siguiente" ---
    if (indice < postsDeCategoria.length - 1) {
        btnSig.onclick = () => window.location.href = postsDeCategoria[indice + 1].url;
    } else {
        btnSig.onclick = () => window.location.href = "../blogs.html"; // vuelve al final
    }
}

//Acciones de los coemntarios
    document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-comentario');
    const lista = document.getElementById('lista-comentarios');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        if (!nombre || !mensaje) return;

        const nuevoComentario = document.createElement('p');
        nuevoComentario.innerHTML = `<strong>${nombre}:</strong> ${mensaje}`;
        lista.appendChild(nuevoComentario);

        form.reset();
    });
    });

