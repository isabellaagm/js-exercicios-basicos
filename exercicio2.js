let media = 0;
let arrayNumeros = [];

for(let i=0; i<10; i++){
    let numero = parseInt(Math.random()*100);
    arrayNumeros.push(numero);

    media+=numero;
}

media = media/10;
let numerosSuperioresAMedia = [];

arrayNumeros.forEach(numero => {
    if(numero>media){
        numerosSuperioresAMedia.push(numero);
    }
});

console.log(arrayNumeros);
console.log(`Média dos números: ${media}`);
console.log(`Números superiores a média: ${numerosSuperioresAMedia}`);

