// criando uma função anônima
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPaciente(form);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
       exibeMensagensDeErro(erros);
        return;
    }

    if(!validaPaciente(paciente)) {
        console.log("Paciente inválido!!");
        return;
    }



// vamos utilizar os nomes dos inputs para ter acesso ao seu valor
// Extrai informações do paciente do form
// createElement - ele cria um elemento HTML utilizando o JS.
// para criarmos uma paciente que é um TR na tabela
// vamos criar as td da tabela
// vamos alterar o conteúdo, utilizando o textContent
// A função appendChild - adiciona como filho o elemento passado a ela como parâmetro.
// Vamos colocar cada td dentro da tr
// Adicionando o paciente na tabela

    adicionaPacienteNaTabela(paciente);

    form.reset();

    // ele limpa os dados do form quando forem adicionados.

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

    // quando acicionarmos um paciente com sucesso, as mensagens de erro são limpas da tela.

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    console.log(pacienteTr);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    // para esvaziar a ul, removeremos todo o conteúdo HTML com umna string vazia.

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function obtemPaciente(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O campo Nome não pode estar vazio");
    }

    if(paciente.peso.length == 0) {
        erros.push("O campo Peso não pode estar vazio");
    }

    if(paciente.altura.length == 0) {
        erros.push("O campo Altura não pode estar vazio");
    }

    if(paciente.gordura.length == 0) {
        erros.push("O campo Gordura não pode estar vazio");
    }

    if(!validaPeso(paciente.peso)) {
       erros.push("Peso é inválido");
    }
     

    if(!validaAltura(paciente.altura)) {
     erros.push("Altura é inválida");
    }

    

    return erros;


}
