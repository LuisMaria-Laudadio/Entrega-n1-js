
alert ("Bienvenido a mi primera entrega de Js")

let nombreUsuario = prompt("Ingrese su nombre")

alert (`Hola ${nombreUsuario} Gracias por usar la calculadora`)







let finalizar = false;

while (!finalizar) {
  let num1 = parseInt(prompt("Ingresa el primer número:"));
  let num2 = parseInt(prompt("Ingresa el segundo número:"));
  let operacion = prompt("Ingresa la operación (+, -, *, /):");
  let resultado;

  if (operacion === "+") {
    resultado = num1 + num2;
  } else if (operacion === "-") {
    resultado = num1 - num2;
  } else if (operacion === "*") {
    resultado = num1 * num2;
  } else if (operacion === "/") {
    resultado = num1 / num2;
  } else {
    resultado = "Operación inválida";
  }

  alert("El resultado es: " + resultado);

  let continuar = prompt("¿Deseas realizar otro cálculo? (Si/NO)").toLowerCase();
  if (continuar !== "si") {
    finalizar = true;
    if (continuar === null || continuar.toLowerCase() !== "s") {
        finalizar = true;}
  }
}

alert ("Gracias por usar la calculadora, espero que te haya servido")

 