let somaDados = 0;

for (let i = 0; i < 10; i++) {
    let dado = parseInt(1 + Math.random()*5);
    somaDados += dado;

    console.log(dado);
}
console.log(somaDados);