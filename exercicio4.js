let peso = prompt("Digite o peso na terra:");
let codPlaneta = prompt("Digite o código do planeta (1-Mercúrio, 2-Vênus, 3-Marte, 4-Júpiter, 5-Saturno, 6-Urano):");
let gravidade;


if(codPlaneta==1){
    gravidade = 0.37
} else if(codPlaneta==2){
    gravidade = 0.88
}else if(codPlaneta == 3){
    gravidade = 0.38
}else if(codPlaneta == 4){
    gravidade = 2.64
}else if(codPlaneta == 5){
    gravidade = 1.15
}else{
    gravidade = 1.17
}

let pPlaneta = (peso/100)*gravidade;

alert(`Seu peso no planeta escolhido é ${pPlaneta}`);