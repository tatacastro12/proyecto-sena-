document.addEventListener('DOMContentLoaded', () => {
  // Cambiar color de fondo
  const colorButton = document.getElementById('change-color');
  colorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue'; // Cambia el color de fondo a azul claro
  });

  // Cambiar tamaño de fuente
  const fontSizeButton = document.getElementById('change-font-size');
  fontSizeButton.addEventListener('click', () => {
    document.body.style.fontSize = '20px'; // Cambia el tamaño de la fuente
  });

  // Activar/Desactivar alto contraste
  const contrastButton = document.getElementById('toggle-contrast');
  contrastButton.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });
});
