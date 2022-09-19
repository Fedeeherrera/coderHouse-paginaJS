console.log("Todo esta funcionando correctamente");

//definicion de variables
const rioDeJaneiro = {
  nombre: "Rio De Janeiro",
  precio: 3200,
};
const londres = {
  nombre: "Londres",
  precio: 4300,
};
const boraBora = {
  nombre: "Bora Bora",
  precio: 5000,
};

const valoresUtilizables = {
  impuesto: 0.15,
  descuentoSocio: 0.2,
};

let valorMomentaneo = 0;

//Elije el destino
let destinoElegido = prompt(`Elija el destino deseado:
1) Rio de Janeiro
2) Londres
3) Bora Bora
4) Proximamente...
`);

//Funcion calcular valor con lo ingresado
function calcularValorMomentaneo(precio, pasajeros, dias) {
  valorMomentaneo = precio * pasajeros * dias;
}

//codigo

if (destinoElegido == 1 || destinoElegido == 2 || destinoElegido == 3) {
  let pasajeros = Number(prompt(`Cuantos pasajeros van a viajar?`));
  let cantidadDias = Number(prompt(`Elija cantidad de dias:`));
  let esSocio = Number(
    prompt(`Es Socio de la pagina?
    1) SI
    2) NO`)
  );
  switch (destinoElegido) {
    case "1":
      calcularValorMomentaneo(rioDeJaneiro.precio, pasajeros, cantidadDias);
      break;

    case "2":
      calcularValorMomentaneo(londres.precio, pasajeros, cantidadDias);
      break;

    case "3":
      calcularValorMomentaneo(boraBora.precio, pasajeros, cantidadDias);
      break;
    default:
      alert("El valor ingresado no es valido");
  }
  let valorFinal =
    valorMomentaneo * valoresUtilizables.impuesto + valorMomentaneo;
  if (esSocio == 1) {
    valorFinal = valorFinal - valorFinal * valoresUtilizables.descuentoSocio;
    alert(
      `Para calcular el valor de tu viaje presiona CLICK sobre el boton "Calcular precio"`
    );
  } else {
    alert(
      `El precio de su viaje con impuestos sin descuento es $${valorFinal}`
    );
  }
  if (Number(destinoElegido) === 1) {
    let destino = document.getElementById("destino");
    destino.innerHTML = "Rio de Janeiro";
  } else if (Number(destinoElegido) === 2) {
    let destino = document.getElementById("destino");
    destino.innerHTML = "Londres";
  } else {
    let destino = document.getElementById("destino");
    destino.innerHTML = "Bora Bora";
  }

  if (pasajeros > 0) {
    let pasajeross = document.getElementById("pasajeros");
    pasajeross.innerHTML = pasajeros;
  }
  
  if (esSocio === 1) {
    let descuento = document.getElementById("descuento");
    descuento.innerHTML = "Si, es socio";
  } else {
    let descuento = document.getElementById("descuento");
    descuento.innerHTML = "No, no es socio";
  }
  let boton = document.getElementById("btnCalcular");
  boton.addEventListener("click", () => {
    alert(`El precio de tu viaje es $${valorFinal}`);
  });
} else {
  alert("ATENCION, EL NUMERO INGRESADO NO ES VALIDO!!!");
}


let descuento = document.getElementById("descuento");
let pasajeross = document.getElementById("pasajeros");
let destino = document.getElementById("destino");
let btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click", () => {
  if(descuento != null){
    descuento.remove();
    pasajeross.remove();
    destino.remove();
  }
});




let botonInput = document.getElementById("btnCalcularInput");
let inputPasajeros = document.getElementById("pasajeros");
let inputDias = document.getElementById("dias");

botonInput.addEventListener("click", () => {
  console.log(Number(inputPasajeros.value));
  console.log(Number(inputDias.value));
});
