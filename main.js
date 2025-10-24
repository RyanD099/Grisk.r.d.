//servicios
// Seleccionamos todas las tarjetas de servicio
const cards = document.querySelectorAll('.service-card');

// Función que añade la clase para escalar la tarjeta
function handleMouseEnter() {
    this.classList.add('is-hovered');
}

// Función que quita la clase al salir el ratón
function handleMouseLeave() {
    this.classList.remove('is-hovered');
}

// Para accesibilidad: al enfocar con teclado (tab) se aplica el mismo efecto
function handleFocus() {
    this.classList.add('is-hovered');
}

function handleBlur() {
    this.classList.remove('is-hovered');
}

cards.forEach(paco => {
    paco.addEventListener('mouseenter', handleMouseEnter);
    paco.addEventListener('mouseleave', handleMouseLeave);
    paco.addEventListener('focus', handleFocus);   // cuando recibe focus por teclado
    paco.addEventListener('blur', handleBlur);     // cuando pierde focus por teclado
});
