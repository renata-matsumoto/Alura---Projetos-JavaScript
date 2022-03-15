console.log("\nTrabalhando com Condicionais");

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais"
);

const idadeComprador = 15;
const estaAcompanhada = true;
let estaComBilhete = false;
const destino = 'Salvador';

console.log("Destinos possíveis:")
console.log(listaDeDestinos);
listaDeDestinos.push("Curitiba"); // Adiciona um elemento no final da lista
console.log(listaDeDestinos);

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3){

   if(listaDeDestinos[contador] == destino){
       destinoExiste = true;
       break;
   }
    contador++;
}

console.log("Destino Existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!!!");
}else{
    console.log("Desculpe, houve um erro!");
}

// for (let cont = 0; contador > 3 ; cont ++){
//     if( listaDeDestinos[cont] == destino){
//         destinoExiste = true;
//         break;
//     }
// }