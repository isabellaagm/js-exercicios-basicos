let numeros = [];

let qtdPares = 0;
let qtdImpares = 0;
let menor500 = 0;
let maior500 = 0;
let qtdIntervalo=0;

for (let i = 0; i < 200; i++) {
    numeros.push(parseInt(Math.random()*1000))
}

numeros.forEach(numero => {
    if(numero%2==0){
        qtdPares++;
    }else{
        qtdImpares++;
    }

    if(numero>500){
        maior500++;
    }else{
        menor500++;
    }

    if(numero>300 && numero<700){
        qtdIntervalo++;
    }
});

console.log(`Números pares: ${qtdPares} - Números Ímpares: ${qtdImpares}`);
console.log(`Números maiores que 500: ${maior500} - Números menores que 500: ${menor500}`);
console.log(`Números entre 300 e 700: ${qtdIntervalo}`);
