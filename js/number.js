let himnoInput = '';
const display = document.getElementById('display');

function addNumber(number) {
  himnoInput += number;
  updateDisplay();
}

function deleteNumber() {
  himnoInput = himnoInput.slice(0, -1);
  updateDisplay();
}

function searchHimno() {
  if (himnoInput === '') {
    alert('Ingresa un número');
    return;
  }

  const himnoNumber = parseInt(himnoInput, 10);

  if (isNaN(himnoNumber) || himnoNumber < 1 || himnoNumber > 400) {
    alert('Ingresa un número válido entre 1 y 400');
    return;
  }

  window.location.href = `hymns.html?hymn=${himnoNumber}`;
}

function updateDisplay() {
  display.innerText = himnoInput;
}

function limpiarBusqueda() {
  himnoInput = '';
  display.innerText = '';
}

window.addEventListener('load', limpiarBusqueda);
window.addEventListener('beforeunload', limpiarBusqueda);
