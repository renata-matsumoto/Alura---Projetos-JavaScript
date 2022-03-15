console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais"
);

const idadeComprador = 15;
const estaAcompanhada = true;
const estaComBilhete = false;

console.log("Destinos possíveis:")
console.log(listaDeDestinos);
listaDeDestinos.push("Curitiba"); // Adiciona um elemento no final da lista
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {

    console.log("Boa Viagem!!!");
    listaDeDestinos.splice(1, 1); // Remove um elemento da lista
    console.log(listaDeDestinos);
} else {
    console.log("Comprador não está acompanhado então não posso vender");
    console.log(listaDeDestinos);
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && estaComBilhete == true){
    console.log("Boa viagem!!!");
}else{

    console.log("Não é possível embarcar");
}



// if (idadeComprador >= 18) {

//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); // Remove um elemento da lista
// } else if (estaAcompanhada == true) {
//     //A pessoa é menor de idade
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); // Remove um elemento da lista
//     console.log(listaDeDestinos);
// } else {
//     console.log("Comprador não está acompanhado então não posso vender");
//     console.log(listaDeDestinos);
// }

