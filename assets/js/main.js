
// Crear un algoritmo con un condicional.

let años = 18;
if (años >= 18) {
    console.log("Si sos mayor de edad. Podes ingresar");
} else {
    console.log("Si sos menor de edad. No podes ingresar");
}


// Crear un algoritmo utilizando un ciclo.

for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  

// Armar un simulador interactivo, la estructura final de tu proyecto integrador. 

function simuladorSuma() {

    const num1 = prompt("Ingrese el primer número:");
    const num2 = prompt("Ingrese el segundo número:");
  
    if (!/^\d*\.?\d+$/.test(num1) || !/^\d*\.?\d+$/.test(num2)) {
      console.log("Por favor, ingresa números reales positivos válidos");
      return;
    }
  
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
  
    const suma = numero1 + numero2;
    
    console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
  }
  simuladorSuma();