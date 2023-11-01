let peso = parseFloat(prompt("Digite o seu peso em quilos:"));
let altura = parseFloat(prompt("Digite a sua altura em metros:"));

let imc = peso/(altura*altura);

if(imc<=18.5){
    alert("Abaixo do peso");
}else if(imc<=25){
    alert("Peso Normal");
}else if(imc<=30){
    alert("Sobrepeso")
}else if(imc<=35){
    alert("Obeso Leve");
}else if(imc<=40){
    alert("Obeso Moderado");
}else{
    alert("Obeso Mórbido");
}