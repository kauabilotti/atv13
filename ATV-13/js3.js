
function calcular() {
    var nome = document.getElementById('nome').value;
    var salario = parseFloat(document.getElementById('salario').value);
    
    var taxaDesconto;
    var desconto;

    if (salario <= 1000) {
      taxaDesconto = 0.08;
    } else if (salario > 1000 && salario <= 1500) {
      taxaDesconto = 0.085;
    } else {
      taxaDesconto = 0.09;
    }

    desconto = salario * taxaDesconto;
    var salarioLiquido = salario - desconto;

    console.log("Nome do Funcionário: " + nome);
    console.log("Salário bruto: R$ " + salario.toFixed(2));
    console.log("Taxa de desconto: " + (taxaDesconto * 100) + "%");
    console.log("Valor do desconto: R$ " + desconto.toFixed(2));
    console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));
}