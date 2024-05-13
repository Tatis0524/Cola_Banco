// Obtenemos referencias a los elementos del DOM
const queueElement = document.getElementById('queue');
const addClientBtn = document.getElementById('addClientBtn');
const serveClientBtn = document.getElementById('serveClientBtn');
const clientNameInput = document.getElementById('clientNameInput');

// Se crea una cola con 5 clientes predeterminados
let queue = ['Juan', 'María', 'Pedro', 'Laura', 'Carlos'];

// Función para agregar un cliente a la cola al final
function addClient() {
  const clientName = clientNameInput.value.trim();

  if (clientName === '') {
    alert('Por favor ingresa el nombre del cliente.');
    return;
  }

  queue.push(clientName);
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
