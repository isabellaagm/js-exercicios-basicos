let respostas = [];
respostas.push(prompt("Telefonou para a vítima?"));
respostas.push(prompt("Esteve no local do crime?"));
respostas.push(prompt("Mora perto da vítima?"));
respostas.push(prompt("Devia para a vítima?"));
respostas.push(prompt("Já trabalhou com a vítima?"));

let sim = 0;

respostas.forEach(resposta => {
    if(resposta.toLowerCase() == "sim"){
        sim++;
    }
});

if(sim == 2){
    alert("Suspeito");
}else if(sim==3 || sim== 4){
    alert("Cúmplice");
}else if(sim == 5){
    alert("Assassino");
}else{
    alert("Inocente");
}