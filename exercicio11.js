let limiteInf = prompt("Digite o limite inferior:");
let limiteSup = prompt("Digite o limite superior:");

let limiteInfFar = (limiteInf*9/5)+32;
let limiteSupFar = (limiteSup*9/5)+32;

alert(`Conversão de Celsius para Fahrenheit: ${limiteInf}ºC - ${limiteSup}ºC -> ${limiteInfFar}ºF - ${limiteSupFar}ºF`);
