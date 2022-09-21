//definicion de variables
let pasajeross = document.getElementById("pasajeros");
let destino = document.getElementById("destino");
let dias = document.getElementById("spanDias");
let btnLimpiar = document.getElementById("btnLimpiar");
let botonInput = document.getElementById("botonInput");
let inputPasajeros = document.getElementById("pasajerosInput");
let inputDias = document.getElementById("dias");
let amsterdamBtn = document.getElementById("amsterdamBtn");
let boraBoraBtn = document.getElementById("boraBoraBtn");
let buenosAiresBtn = document.getElementById("buenosAiresBtn");
let cancunBtn = document.getElementById("cancunBtn");
let hawaiBtn = document.getElementById("hawaiBtn");
let montevideoBtn = document.getElementById("montevideoBtn");
let destinoElegido = "";
let cantidadDias = 0;
let cantidadPasajeros = 0;
let precio = 0;

//definicion de constantes
const amsterdam = {
  nombre: "Amsterdam",
  precio: 3500,
};
const boraBora = {
  nombre: "Bora Bora",
  precio: 3000,
};
const buenosAires = {
  nombre: "Buenos Aires",
  precio: 2500,
};
const cancun = {
  nombre: "Cancun",
  precio: 3700,
};
const hawai = {
  nombre: "Hawai",
  precio: 4200,
};
const montevideo = {
  nombre: "Montevideo",
  precio: 4700,
};

const valoresUtilizables = {
  impuesto: 1.15,
  descuentoSocio: 0.2,
};

function diasPasajeros(){
  pasajeross.innerText = inputPasajeros.value;
  dias.innerText = inputDias.value;
}

btnLimpiar.addEventListener("click", () => {
  pasajeross.innerHTML = "";
  destino.innerHTML = "";
  dias.innerHTML = "";
  pasajerosInput.value = "";
  inputDias.value = "";
  precio = 0;
  localStorage.clear();
});

amsterdamBtn.addEventListener("click", () => {
  precio = amsterdam.precio;
  destino.innerText = amsterdam.nombre;
  diasPasajeros();
  destinoElegido = amsterdam.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value;
  alert("Ha seleccionado Amsterdam.");
});

boraBoraBtn.addEventListener("click", () => {
  precio = boraBora.precio;
  destino.innerText = boraBora.nombre;
  diasPasajeros();
  destinoElegido = boraBora.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value; 
  alert("Ha seleccionado Bora Bora.");
});

buenosAiresBtn.addEventListener("click", () => {
  precio = buenosAires.precio;
  destino.innerText = buenosAires.nombre;
  diasPasajeros();
  destinoElegido = buenosAires.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value;
  alert("Ha seleccionado Buenos Aires.");
});

cancunBtn.addEventListener("click", () => {
  precio = cancun.precio;
  destino.innerText = cancun.nombre;
  diasPasajeros();
  destinoElegido = cancun.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value;
  alert("Ha seleccionado Cancun.");
});

hawaiBtn.addEventListener("click", () => {
  precio = hawai.precio;
  destino.innerText = hawai.nombre;
  diasPasajeros();
  destinoElegido = hawai.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value;
  alert("Ha seleccionado Hawai.");
});

montevideoBtn.addEventListener("click", () => {
  precio = montevideo.precio;
  destino.innerText = montevideo.nombre;
  diasPasajeros();
  destinoElegido = montevideo.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value;
  alert("Ha seleccionado Montevideo.");
});

botonInput.addEventListener("click", () => {
  if (inputPasajeros.value == 0 || inputDias.value == 0) {
    alert("Ingrese bien los datos");
  } else if( precio <= 0) {
    alert("Seleccione un destino")
  } else {
    let total = precio * inputPasajeros.value * inputDias.value * 1.21;
    diasPasajeros();
    localStorage.setItem("destino", destinoElegido)
    localStorage.setItem("pasajeros", cantidadPasajeros )
    localStorage.setItem("dias", cantidadDias)
    alert(`El total es $${total}`);
  }
});
