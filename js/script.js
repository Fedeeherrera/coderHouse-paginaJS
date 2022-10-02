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
let destinoElegido = "";
let cantidadDias = 0;
let cantidadPasajeros = 0;
let precio = 0;


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

const objDestinos = [amsterdam, boraBora, buenosAires, cancun, hawai, montevideo];

//Declaracion de funciones
function diasPasajeros(){
  pasajeross.innerText = inputPasajeros.value;
  dias.innerText = inputDias.value;
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
    icon: 'error',
    title: 'El carrito ahora esta vacio'
  })
});

amsterdamBtn.addEventListener("click", () => {
  precio = objDestinos[0].precio;
  destino.innerText = objDestinos[0].nombre;
  diasPasajeros();
  destinoElegido = amsterdam.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value;
  Swal.fire({
    title: 'HAZ SELECCIONADO AMSTERDAM',
    imageUrl: './../images/amsterdamPaisesBajos.jpg',
    imageWidth: 450,
    imageHeight: 300,
    imageAlt: 'Custom image',
  })
});

boraBoraBtn.addEventListener("click", () => {
  precio = objDestinos[1].precio;
  destino.innerText = objDestinos[1].nombre;
  diasPasajeros();
  destinoElegido = boraBora.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value; 
  Swal.fire({
    title: 'HAZ SELECCIONADO BORA BORA',
    imageUrl: './../images/borabora.jpg',
    imageWidth: 450,
    imageHeight: 300,
    imageAlt: 'Custom image',
  })
});

buenosAiresBtn.addEventListener("click", () => {
  precio = objDestinos[2].precio;
  destino.innerText = objDestinos[2].nombre;
  diasPasajeros();
  destinoElegido = buenosAires.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value;
  Swal.fire({
    title: 'HAZ SELECCIONADO BORA BORA',
    imageUrl: './../images/buenosAiresARG.png',
    imageWidth: 450,
    imageHeight: 300,
    imageAlt: 'Custom image',
  })
});

cancunBtn.addEventListener("click", () => {
  precio = objDestinos[3].precio;
  destino.innerText = objDestinos[3].nombre;
  diasPasajeros();
  destinoElegido = cancun.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value;
  Swal.fire({
    title: 'HAZ SELECCIONADO BORA BORA',
    imageUrl: './../images/cancunMexico.jpg',
    imageWidth: 450,
    imageHeight: 300,
    imageAlt: 'Custom image',
  })
});

hawaiBtn.addEventListener("click", () => {
  precio = objDestinos[4].precio;
  destino.innerText = objDestinos[4].nombre;
  diasPasajeros();
  destinoElegido = hawai.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value;
  Swal.fire({
    title: 'HAZ SELECCIONADO BORA BORA',
    imageUrl: './../images/hawaiEEUU.jpg',
    imageWidth: 450,
    imageHeight: 300,
    imageAlt: 'Custom image',
  })
});

montevideoBtn.addEventListener("click", () => {
  precio = objDestinos[5].precio;
  destino.innerText = objDestinos[5].nombre;
  diasPasajeros();
  destinoElegido = montevideo.nombre;
  cantidadDias = inputDias.value;
  cantidadPasajeros = inputPasajeros.value;
  Swal.fire({
    title: 'HAZ SELECCIONADO BORA BORA',
    imageUrl: './../images/montevideoUruguay.jpg',
    imageWidth: 450,
    imageHeight: 300,
    imageAlt: 'Custom image',
  })
});

botonInput.addEventListener("click", () => {
  ( precio <= 0) ? alert("Seleccione un destino"): console.warn(`El destino esta seleccionado correctamente`);
  if(inputPasajeros.value <= 0 || inputDias.value <= 0 || precio <= 0){ 
    alert("Ingrese bien los datos");
} else{
    let total = precio * inputPasajeros.value * inputDias.value * 1.21;
    diasPasajeros();
    localStorage.setItem("destino", destinoElegido);
    localStorage.setItem("pasajeros", cantidadPasajeros);
    localStorage.setItem("dias", cantidadDias);
    Swal.fire({
      icon: 'info',
      title: `VALOR DEL VIAJE $${total}`,
      text: 'DISFRUTA',
    })
  }
});

let listaPrueba = document.getElementById("listaPrueba")

fetch("./destinos.json")
.then(response => response.json)
.then(data => {
  data.forEach(item => {
    let li = data.createElement("li");
    li.innerHTML = `
    <h1>Nombre: ${item.nombre}</h1>
    <h2>Precio: ${item.precio}</h2>
    <h3>Imagen: ${item.imagen}</h3>`;
    listaPrueba.append(li);
  });
})