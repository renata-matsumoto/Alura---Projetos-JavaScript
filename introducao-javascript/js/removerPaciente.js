var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
	// var alvoEvento = event.target;
	// var paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover
	// paiDoAlvo.remove();
	event.target.parentNode.classList.add("fadeOut");
	

	setTimeout(function(){
		event.target.parentNode.remove();
	}, 500);

});


// pacientes.forEach(function(paciente){

// 	paciente.addEventListener("dblclick", function() {
//     this.remove();
//     });
// });

// this é uma palavra de contexto ligada com quem acionou o evento. 
// duplo click = dblclick
// Event Bubbling - o evento acontece não só no dono do evento, ele acontece também no pai do paciente, no pai do pai do paciente e assim vai
// event.target = será quem sofreu o evento.
// parentNode = selecionar o pai de um elemento.
// função setTimeout - ela aguarda um tempo.
// A função addEventListener(), recebe dois parâmetros, o nome do evento a
// ser escutado e uma função com a ação que deve executar.


console.log(pacientes);
