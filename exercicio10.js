let qtdDiarias = parseInt(prompt("Digite o número de diárias: "));
let taxa = 0;

if(qtdDiarias>15){
    taxa = 35.5;
}else if(qtdDiarias==15){
    taxa = 46;
}else{
    taxa = 58;
};

alert(`Total da taxa de serviço: R$${taxa} - Total de dias: ${qtdDiarias} - Total da conta: R$${360+taxa}`);
