let qtd = parseInt(prompt("Quantos números pares devem ser exibidos? "));

for(let i=0; i<qtd*2; i++){
    if(i%2==0){
        console.log(i);
    }
}