//definicion de variables
let descuento = document.getElementById("descuento");
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
let precio = 0;

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

btnLimpiar.addEventListener("click", () => {
  pasajeross.innerHTML = "";
  destino.innerHTML = "";
  dias.innerHTML = "";
  precio = 0;
});

amsterdamBtn.addEventListener("click", () => {
  precio = 3500;
  destino.innerText = "Amsterdam";
  pasajeross.innerText = inputPasajeros.value;
  dias.innerText = inputDias.value;
  alert("Ha seleccionado Amsterdam.");
});
boraBoraBtn.addEventListener("click", () => {
  precio = 3000;
  destino.innerText = "Bora Bora";
  pasajeross.innerText = inputPasajeros.value;
  dias.innerText = inputDias.value;
  alert("Ha seleccionado Bora Bora.");
});
buenosAiresBtn.addEventListener("click", () => {
  precio = 2500;
  destino.innerText = "Buenos Aires";
  pasajeross.innerText = inputPasajeros.value;
  dias.innerText = inputDias.value;
  alert("Ha seleccionado Buenos Aires.");
});
cancunBtn.addEventListener("click", () => {
  precio = 3700;
  destino.innerText = "Cancun";
  pasajeross.innerText = inputPasajeros.value;
  dias.innerText = inputDias.value;
  alert("Ha seleccionado Cancun.");
});
hawaiBtn.addEventListener("click", () => {
  precio = 4200;
  destino.innerText = "Hawai";
  pasajeross.innerText = inputPasajeros.value;
  dias.innerText = inputDias.value;
  alert("Ha seleccionado Hawai.");
});
montevideoBtn.addEventListener("click", () => {
  precio = 4700;
  destino.innerText = "Montevideo";
  pasajeross.innerText = inputPasajeros.value;
  dias.innerText = inputDias.value;
  alert("Ha seleccionado Montevideo.");
});

botonInput.addEventListener("click", () => {
  if (inputPasajeros.value == 0 || inputDias.value == 0 || precio == 0) {
    alert("Ingrese bien los datos");
  } else {
    let total = precio * inputPasajeros.value * inputDias.value * 1.21;
    alert(`El total es $${total}`);
  }
});
