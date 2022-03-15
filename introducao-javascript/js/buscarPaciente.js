var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
	console.log("buscando pacientes");
	
	var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");


xhr.addEventListener("load", function() {

    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    } else {
        erroAjax.classList.remove("invisivel");
    }
});

xhr.send();
	// envia a requisição

})

// O XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP. O trecho XML do nome indica que ele era utilizado anteriormente para realizar o transporte de dados do tipo XML, no entanto, atualmente ele consegue trafegar outros tipos de dados, como textos.
/* Get é o tipo de requisição a ser feita

Formato JSON (JavaScripr Object Notation), um formato de dados parecidos com os objetos do JavaScrip que podemos transportar pela web.

Para transformar uma string em um array, usaremos um parseador de Json. Usando o método parse(). E será retornado um objeto JS.

AJAX - maneira de fazer uma requisição de forma assíncrona com JS.
Uma requisição assíncrona pq não está parando o fluxo do código, ou seja, no momento em que a requisição é feita, a execução continua normalmente. Ainda é possível excluir e adicionar pacientes.
*/