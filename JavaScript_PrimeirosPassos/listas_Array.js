console.log("Trabalhando com Listas");

// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';
// const minasGerais = 'Minas Gerais';

console.log("Destinos possíveis:")
// console.log(salvador, saoPaulo, rioDeJaneiro, minasGerais);

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais"
);

listaDeDestinos.push("Curitiba"); // Adiciona um elemento no final da lista

console.log(listaDeDestinos);


listaDeDestinos.splice(1,1); // Remove um elemento da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos.length);
console.log(listaDeDestinos[0]);