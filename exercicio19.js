let lista = [0,1];

for (let i = 2; i < 15; i++) {
    lista[i] = lista[i-1] + lista[i-2];
}
console.log(lista);