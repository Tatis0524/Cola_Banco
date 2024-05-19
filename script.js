// Fila predeterminada de clientes
let colaClientes = [
  { nombre: 'Juan', turno: 1 },
  { nombre: 'Ana', turno: 2 },
  { nombre: 'Pedro', turno: 3 },
  { nombre: 'María', turno: 4 },
  { nombre: 'Carlos', turno: 5 }
];
let turno = 6; // Siguiente turno disponible

// Función para agregar cliente a la cola
function agregarCliente() {
  let nombre = document.getElementById('nombreCliente').value.trim();
  if (nombre === '') {
    alert('Ingresa el nombre del cliente.');
    return;
  }
  colaClientes.push({ nombre, turno });
  actualizarCola();
  actualizarTablero();
  turno++;
  document.getElementById('nombreCliente').value = '';
}

// Función para atender al primer cliente de la cola
function atenderCliente() {
  if (colaClientes.length === 0) {
    alert('No hay clientes en la cola.');
    return;
  }

  // Seleccionamos al primer cliente
  let cliente = colaClientes.shift();
  actualizarCola();
  actualizarTablero();
  asignarCajero(cliente);
}

// Función para asignar un cajero al cliente
function asignarCajero(cliente) {
  let cajero1 = document.getElementById('cajero1');
  let cajero2 = document.getElementById('cajero2');
  let cajero3 = document.getElementById('cajero3');

  if (cliente.turno % 3 === 1) {
    if (cajero1.innerText.includes('Disponible')) {
      cajero1.innerText = `Cajero 1: Atendiendo a ${cliente.nombre}`;
      setTimeout(() => {
        cajero1.innerText = 'Cajero 1: Disponible';
      }, 3000); // 3 segundos para simular el tiempo de atención
    } else {
      alert(`El cajero 1 está ocupado. ${cliente.nombre} debe esperar.`);
      colaClientes.unshift(cliente); // Devolvemos al cliente a la cola
    }
  } else if (cliente.turno % 3 === 2) {
    if (cajero2.innerText.includes('Disponible')) {
      cajero2.innerText = `Cajero 2: Atendiendo a ${cliente.nombre}`;
      setTimeout(() => {
        cajero2.innerText = 'Cajero 2: Disponible';
      }, 3000); // 3 segundos para simular el tiempo de atención
    } else {
      alert(`El cajero 2 está ocupado. ${cliente.nombre} debe esperar.`);
      colaClientes.unshift(cliente); // Devolvemos al cliente a la cola
    }
  } else {
    if (cajero3.innerText.includes('Disponible')) {
      cajero3.innerText = `Cajero 3: Atendiendo a ${cliente.nombre}`;
      setTimeout(() => {
        cajero3.innerText = 'Cajero 3: Disponible';
      }, 3000); // 3 segundos para simular el tiempo de atención
    } else {
      alert(`El cajero 3 está ocupado. ${cliente.nombre} debe esperar.`);
      colaClientes.unshift(cliente); // Devolvemos al cliente a la cola
    }
  }
}

// Función para actualizar la cola visualmente
function actualizarCola() {
  let cola = document.getElementById('cola');
  cola.innerHTML = '';
  colaClientes.forEach((cliente, index) => {
    let div = document.createElement('div');
    div.className = 'person';
    div.innerHTML = `<span>${cliente.nombre} - Turno C${cliente.turno}</span>`;
    cola.appendChild(div);
  });
  if (colaClientes.length === 0) {
    cola.innerText = 'No hay clientes en la cola.';
  }
}

// Función para actualizar el tablero
function actualizarTablero() {
  let tablero = document.getElementById('tableroTurnos');
  tablero.innerHTML = '';
  colaClientes.forEach((cliente, index) => {
    let li = document.createElement('li');
    if (cliente.turno % 3 === 1) {
      li.innerText = `Turno C${cliente.turno} - Cajero 1`;
    } else if (cliente.turno % 3 === 2) {
      li.innerText = `Turno C${cliente.turno} - Cajero 2`;
    } else {
      li.innerText = `Turno C${cliente.turno} - Cajero 3`;
    }
    tablero.appendChild(li);
  });
  if (colaClientes.length === 0) {
    let li = document.createElement('li');
    li.innerText = 'No hay clientes en espera.';
    tablero.appendChild(li);
  }
}

// Al cargar la página, inicializamos la cola y el tablero
window.onload = () => {
  actualizarCola();
  actualizarTablero();
};