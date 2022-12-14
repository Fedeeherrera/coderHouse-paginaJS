//Declaracion de Varaibles
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
let totalazo;
let total;
let destinoElegido;
let cantidadDias = 0;
let cantidadPasajeros = 0;
let precio = 0;
let destiStorage;
let pasajeStorage;
let cantdiaStorage;

//Declaracion de Constantes
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

const objDestinos = [
  amsterdam,
  boraBora,
  buenosAires,
  cancun,
  hawai,
  montevideo,
];

//Declaracion de funciones
function diasPasajeros() {
  pasajeross.innerText = inputPasajeros.value;
  dias.innerText = inputDias.value;
}

function ejecucion(i, ciudad) {
  precio = objDestinos[i].precio;
  destino.innerText = objDestinos[i].nombre;
  destinoElegido = ciudad.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value;
}

//Optimice la muestra de alertas
function alerta(ciudad, ruta) {
  Swal.fire({
    title: `HAZ SELECCIONADO ${ciudad}`,
    imageUrl: `${ruta}`,
    imageWidth: 450,
    imageHeight: 300,
    imageAlt: "Custom image",
  });
}

//Arrow Functions
btnLimpiar.addEventListener("click", () => {
  pasajeross.innerHTML = "";
  destino.innerHTML = "";
  dias.innerHTML = "";
  pasajerosInput.value = "";
  inputDias.value = "";
  precio = 0;
  localStorage.clear();
  Swal.fire({
    icon: "error",
    title: "El carrito ahora esta vacio",
  });
});

amsterdamBtn.addEventListener("click", () => {
  ejecucion(0, "AMSTERDAM");
  diasPasajeros();

  alerta("AMSTERDAM", "./../images/amsterdamPaisesBajos.jpg");
});

boraBoraBtn.addEventListener("click", () => {
  ejecucion(1, "BORA BORA");
  diasPasajeros();
  alerta("BORA BORA", "./../images/borabora.jpg");
});

buenosAiresBtn.addEventListener("click", () => {
  ejecucion(2, "BUENOS AIRES");
  diasPasajeros();
  alerta("BUENOS AIRES", "./../images/buenosAiresARG.png");
});

cancunBtn.addEventListener("click", () => {
  ejecucion(3, "CANCUN");
  diasPasajeros();
  alerta("CANCUN", "./../images/cancunMexico.jpg");
});

hawaiBtn.addEventListener("click", () => {
  ejecucion(4, "HAWAI");
  diasPasajeros();
  alerta("HAWAI", "./../images/hawaiEEUU.jpg");
});

montevideoBtn.addEventListener("click", () => {
  ejecucion(5, "MONTEVIDEO");
  diasPasajeros();
  alerta("MONTEVIDEO", "./../images/montevideoUruguay.jpg");
});

botonInput.addEventListener("click", () => {
  let totStorage = localStorage.getItem("total");
  let comparadorDestino = localStorage.getItem("destino");
  let comparadorDias = localStorage.getItem("dias")
  if(comparadorDestino === destino.innerHTML && comparadorDias === dias.innerHTML) {
    Swal.fire({
      icon: "info",
      title: `VALOR DEL VIAJE $${totStorage}`,
      text: "DISFRUTA",
    });
  } else {
  precio <= 0
    ? alert("Seleccione un destino")
    : console.warn(`El destino esta seleccionado correctamente`);
  if (inputPasajeros.value <= 0 || inputDias.value <= 0 || precio <= 0) {
    alert("Ingrese bien los datos");
  } else {
     total = precio * inputPasajeros.value * inputDias.value * 1.21;
     totalStorage = localStorage.setItem("total", total)
    diasPasajeros();
    destinoElegido = destino.innerHTML;
    destiStorage = localStorage.setItem("destino", destinoElegido);
    pasajeStorage = localStorage.setItem("pasajeros", cantidadPasajeros);
    cantdiaStorage = localStorage.setItem("dias", cantidadDias);
    Swal.fire({
      icon: "info",
      title: `VALOR DEL VIAJE $${total}`,
      text: "DISFRUTA",
    });
  }
}

});

let listaDinamica = document.getElementById("listaDinamica");

fetch("../js/destinos_1.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      let li = document.createElement("li");
      li.innerHTML = `
    <img src=  '${item.imagen}' />`;
      listaDinamica.append(li);
    });
  });

let listaDinamica__2 = document.getElementById("listaDinamica__2");
fetch("../js/destinos_2.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      let li = document.createElement("li");
      li.innerHTML = `
    <img src=  '${item.imagen}' />`;
      listaDinamica__2.append(li);
    });
  });

let storageFunction = () => {
  destInner = localStorage.getItem("destino");
  destino.innerHTML = destInner;
  pasjInner = localStorage.getItem("pasajeros");
  pasajeross.innerHTML = pasjInner;
  diasInner = localStorage.getItem("dias");
  dias.innerHTML = diasInner;
};

storageFunction();

