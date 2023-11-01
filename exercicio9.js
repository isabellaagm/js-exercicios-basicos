let nota = 0;

for(let i=0; i<4; i++){
    nota += parseFloat(prompt(`Digite a nota da ${i+1}ª prova:`));
}

let media = (nota/4);

if(media>=6){
    alert("APROVADO")
}else {
    alert("REPROVADO")
};

