let numerosSorteados = [];
let numerosMaioresQueDez = [];

for(let i=0; i<5; i++){
    let numero = parseInt(Math.random()*100);
    numerosSorteados.push(numero);

    if(numero>10){
        numerosMaioresQueDez.push(numero);
    }
}

console.log(numerosSorteados);
console.log("Quantidade de números maiores que 10: ");
console.log(numerosMaioresQueDez.length);
