function calcular() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    var Diff = numero1 - numero2;
    console.log("Diferença: " + Diff);
    console.log("dobro: " + (2 * numero1) + " triplo: " + (3 * numero2));
    console.log("multiplicação: " + numero1 * numero2);
    if (numero1 > numero2) {
        console.log("O número 1 é maior que o número 2.");
    } else if (numero1 === numero2) {
        console.log("Os dois números são iguais.");
    } else {
        console.log("O número 2 é maior que o número 1.");
    }
}
