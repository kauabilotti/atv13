
function calcular() {
    var nome = document.getElementById('nome').value;
    var salario = parseFloat(document.getElementById('salario').value);
    
    var taxaINSS = 0.08

    var descontoINSS = salario * taxaINSS;
    var salarioLiquido = salario - descontoINSS;
    console.log("nome do funcionario:"+nome);
    console.log("salario do funcionario:"+salario.toFixed(2)); //toFixed(2) serva para retornar numero com duas casas decimais e por ai vai (3) retorna com tres casas...//
    console.log("valor do INSS:" + descontoINSS.toFixed(2));
    console.log("Salário líquido:" + salarioLiquido.toFixed(2));
}