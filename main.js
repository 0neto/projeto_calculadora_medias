const form = document.getElementById('form-atividade'); //Criado a constante geral que seleciona o Formulario no HTML
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando"/>' //Criado a constante que seleciona a imagem do Emoji Celebrando na pasta Imagens
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Decepcionado"/>' //Criado a constante que seleciona a imagem do Emoji Decepcionado na pasta Imagens
const atividades = []; //Cria uma constande com um Array vazio
const notas = []; //Cria uma constande com um Array vazio
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota Minima:"));

let linhas = ''; //Cria uma variavel com valor vazio para acressenta uma nova linha e para manter o seu conteudo ela tem que ser global

form.addEventListener('submit', function(e) { //Cria o evento do Submit
    e.preventDefault();//Cancela o evento de Atualização automatica da pagina

    adicionaLinha(); //Chama a função adicionaLinha
    atualizaTabela(); //Chama a função atualizaTabela
    atualizaMediaFinal(); //Chama a função atualizaMediaFinal
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade'); //Criado a constante que seleciona o Campo Nome da atividade no HTML Permitindo que o usuario atribua um valor que sera armazenado 
    const inputNotaAtividade = document.getElementById('nota-atividade'); //Criado a constante que seleciona o Campo Nota da atividade no HTML Permitindo que o usuario atribua um valor que sera armazenado

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value); //Adiciona o conteudo no Array Atividades
        notas.push(parseFloat(inputNotaAtividade.value)); //Adiciona o conteudo no Array Notas

        let linha = `<tr>`; //Criando o corpo da Tabela e Abre a tag TR e Recebe o cadigo HTML como uma String
        linha += `<td>${inputNomeAtividade.value}</td>`; //Contatena a Variavel Linha com o valor armazenado na constante NomeAtividade
        linha += `<td>${inputNotaAtividade.value}</td>`; //Contatena a Variavel Linha com o valor armazenado na constante NotaAtividade. No ternario o if é representado por ? e o else por :
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`; //Concatena a variavel linha com o operador ternario e adiciona as imagens de Emojis a depender da nota
        linha += `</tr>`; //Fecha a tag TR

        linhas += linha; //Concatena a variavel Linhas com a Variavel Linha para aacressentar uma linha nova e manter a anterior
    }

    inputNomeAtividade.value = ''; //Limpa o Campo Após adicionar o conteudo
    inputNotaAtividade.value = ''; //Limpa o Campo Após adicionar o conteudo
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody'); //Criado a constande para colocar esse conteudo dentro do corpo da tabela
    corpoTabela.innerHTML =  linhas; //Insere um conteudo dentro de uma tag
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return media = somaDasNotas / notas.length;
}