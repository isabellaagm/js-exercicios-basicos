let saldoMedio = parseInt(prompt("Digite o valor do saldo médio:"));
let percentual;

if(saldoMedio <= 2000){
    percentual = 0;
}else if(saldoMedio>2000 && saldoMedio<=10000){
    percentual = 0.2;
}else if(saldoMedio>10000 && saldoMedio<=20000){
    percentual = 0.3;
}else{
    percentual = 0.4;
};

let credito = saldoMedio + (saldoMedio*percentual);

alert(`Saldo médio: ${saldoMedio} - Percentual de crédito: ${percentual*100}% - Valor de crédito especial: ${credito}`);