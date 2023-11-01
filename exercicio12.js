let salarios = [];
let idades = [];
let sexo = [];

let somaSalarios = 0;
let maiorSalario = 0;
let menorSalario = 0;
let qtdHomens = 0;
let qtdMulheres = 0;
let somaIdades = 0;


for(let i=0; i<300; i++){
    salarios.push(Math.random()*20000);
    idades.push(parseInt(Math.random()*100));
    sexo.push(parseInt(Math.random()));
}

//questões a, e, b
salarios.forEach((salario, index)=> {
   somaSalarios += salario; 

   if(salario>maiorSalario){
    maiorSalario = salario.toFixed(2);
   }

   if(index==0){
    menorSalario = salario.toFixed(2);
   }else if(salario<menorSalario){
    menorSalario = salario.toFixed(2);
   }

});

let mediaSalario = (somaSalarios/300).toFixed(2);

//questões c e d
sexo.forEach(sexo => {
    if(sexo===0){
        qtdHomens++;
    }else{
        qtdMulheres++;
    }
});

//questão f
idades.forEach(idade => {
    somaIdades+=idade;
});
let mediaIdades = (somaIdades/300);

console.log(`Média salarial: R$${mediaSalario}`);
console.log(`Maior Salário: R$${maiorSalario}`);
console.log(`Menor Salário: R$${menorSalario}`);
console.log(`Qtd homens: ${qtdHomens}`);
console.log(`Qtd mulheres: ${qtdMulheres}`);
console.log(`Média de Idade: ${mediaIdades}`);
