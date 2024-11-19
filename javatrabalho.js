const readline = require('readline');

// Interface para ler a entrada do usuário no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o valor final da compra
function calcularCompra(produto, numParcelas) {
    if (numParcelas === 0) {
        const valorComDesconto = produto.preco * 0.90;
        console.log(`Compra à vista! Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`);
    } else if (numParcelas >= 1 && numParcelas <= 10) {
        const valorParcela = produto.preco / numParcelas;
        console.log(`Compra parcelada em ${numParcelas}x sem juros. Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`);
    } else if (numParcelas >= 11 && numParcelas <= 12) {
        const valorComJuros = produto.preco * 1.02;
        const valorParcelaComJuros = valorComJuros / numParcelas;
        console.log(`Compra parcelada em ${numParcelas}x com 2% de juros. Valor de cada parcela: R$ ${valorParcelaComJuros.toFixed(2)}`);
    } else {
        console.log("Número de parcelas não permitido. O máximo são 12 parcelas.");
    }
}

// Solicita o valor do produto e o número de parcelas
rl.question("Digite o valor do produto: ", (precoProduto) => {
    rl.question("Digite o número de parcelas: ", (numParcelas) => {
        precoProduto = parseFloat(precoProduto);
        numParcelas = parseInt(numParcelas);

        if (isNaN(precoProduto) || precoProduto <= 0) {
            console.log("Valor do produto inválido!");
        } else if (isNaN(numParcelas) || numParcelas < 0) {
            console.log("Número de parcelas inválido!");
        } else {
            const produto = { nome: "Produto", preco: precoProduto };
            calcularCompra(produto, numParcelas);
        }

        rl.close();  // Fecha a interface do readline
    });
});
