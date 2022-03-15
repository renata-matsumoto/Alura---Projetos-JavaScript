var titulo = document.querySelector(".titulo");
titulo.textContent = "Renata Nutrição";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);


for(var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];
	console.log(pacientes[i]);

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;


	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);


	if(!validaPeso) {
		console.log("Peso inválido!");
		pesoValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
		// classList traz uma lista de elementos especiais
	}

	if(!validaAltura){
		console.log("Altura inválida!");
		alturaValida = false;
		tdImc.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");

		
	}

	if(pesoValido && alturaValida) {
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	} else{
		tdImc.textContent = "Altura e/ou peso inválidos!";
	}
}

function validaPeso(peso){
	if(peso >= 0 && peso <=1000){
	return true;
} else {
	return false;
	}
}

function validaAltura(altura){
	if (altura >= 0 && altura < 3.00) {
		return true;
	} else {
		return false;
	}
}

function calculaImc(peso, altura) {

	var imc = 0;

	imc = peso/(altura * altura);

	return imc.toFixed(2);
}







/* 
O ponto . seleciona a classe no mundo HTML

A # seleciona o id

*/

