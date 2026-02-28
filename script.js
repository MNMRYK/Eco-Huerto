const aparecerAlScroll = () => {
    // Seleccionamos las clases REALES de tu HTML
    const secciones = document.querySelectorAll('.hero-fruteria, .seccion-alterna, .seccion, .footer-fruteria');
    
    secciones.forEach(seccion => {
        const posicionSeccion = seccion.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight / 1.3;

        if (posicionSeccion < alturaPantalla) {
            seccion.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', aparecerAlScroll);
// Ejecutamos una vez al cargar por si ya hay algo en pantalla
aparecerAlScroll();