//  Seleção de elementos

const multiplicacaoForm = document.querySelector("#multiplicacaoForm")
const numeroDaTabuada = document.querySelector("#numero")
const multiplicadprDaTabuada = document.querySelector("#multiplicador")

const tabelaDeMultiplicacao = document.querySelector("#multiplicacao-operacoes")

const multiplicacaoTitulo = document.querySelector("#multiplicacao-titulo span")


// Funções
const criarTabela = (numero, quantidadeDeMultiplicacoes) => {

    tabelaDeMultiplicacao.innerHTML = "";
    for ( i = 1; i <= quantidadeDeMultiplicacoes; i++ ) {

        const result = numero * i;

        const template = `<div class="linha">
        <div class="operacao"> ${numero} x ${i} = </div>
        <div class="resultado">${result} </div>
        </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const linha = htmlTemplate.querySelector(".linha");

        tabelaDeMultiplicacao.appendChild(linha);

    }

    multiplicacaoTitulo.innerText = numero;

}

// Eventos

multiplicacaoForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const numeroMultiplicador = +numeroDaTabuada.value;

     const quantidadeDeMultiplicacoes = +multiplicadprDaTabuada.value;

            if(!numeroMultiplicador || !quantidadeDeMultiplicacoes) return;
            criarTabela(numeroMultiplicador, quantidadeDeMultiplicacoes)


})