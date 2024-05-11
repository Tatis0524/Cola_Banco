// Obtenemos referencias a los elementos del DOM
const queueElement = document.getElementById('queue');
const addClientBtn = document.getElementById('addClientBtn');
const serveClientBtn = document.getElementById('serveClientBtn');
const clientNameInput = document.getElementById('clientNameInput');
const positionInput = document.getElementById('positionInput');

// Se crea una cola con 5 clientes predeterminados
let queue = ['Juan', 'María', 'Pedro', 'Laura', 'Carlos'];

// Función para agregar un cliente a la cola en una posición específica
function addClient() {
  const clientName = clientNameInput.value.trim();
  const position = parseInt(positionInput.value);

  if (clientName === '') {
    alert('Por favor ingresa el nombre del cliente.');
    return;
  }

  if (isNaN(position) || position < 1 || position > queue.length + 1) {
    alert('Por favor ingresa una posición válida.');
    return;
  }

  queue.splice(position - 1, 0, clientName);
  renderQueue();
}

// Función para atender al siguiente cliente en la cola
function serveClient() {
  if (queue.length > 0) {
    const servedClient = queue.shift();
    alert(`Atendiendo a ${servedClient}`);
    renderQueue();
  } else {
    alert('No hay clientes en la cola');
  }
}

// Función para renderizar la cola en la interfaz
function renderQueue() {
  queueElement.innerHTML = '';
  queue.forEach(client => {
    const clientElement = document.createElement('div');
    clientElement.textContent = client;
    queueElement.appendChild(clientElement);
  });
}

// Renderizamos la cola al cargar la página
renderQueue();

// Asignamos eventos a los botones
addClientBtn.addEventListener('click', addClient);
serveClientBtn.addEventListener('click', serveClient);
