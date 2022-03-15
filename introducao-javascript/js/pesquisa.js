var campoFiltro = document.querySelector("#pesquisa-tabela");

campoFiltro.addEventListener("input", function() {
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
    	for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});

/* Expressões Regulares são um tipo especial de texto, que nos auxilia a buscarmos por 
facilitando quando o termo for maior.

var expressao = new RegExp();

O primeiro parâmetro que devemos passar para o construtor é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque). Por exemplo, podemos definir que não queremos que haja distinção entre letras maiúsculas e minúsculas, através da flag i.

É importante que a busca não seja case sensitive, que é a diferenciação entre letras maiúsculas e minúsculas.
Passaremos a letra "i" como segundo parâmetro, para indicarmos a opção case insensitive.

*/