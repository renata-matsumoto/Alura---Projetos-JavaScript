/* - Se tivermos código que se repete porém não forma um contexto coeso, provavelmente teremos que criar duas classes, cada uma delimitando um contexto único que faça sentido.
 - Usamos métodos para dar nomes aos comportamentos que nossa classe possui e isso facilita a comunicação dentro da equipe
 - Um método pode ter nenhum, um ou mais parâmetros. Essa é a maneira de passarmos informações para podermos reutilizar métodos em diferentes cenários
 -  Esse é o objetivo de métodos, definir o que um objeto saber fazer. O comportamento é implementado dentro do método.
 - Criamos métodos para proteger atributos e informações sensíveis de nossas classes. Porém se não fizermos nada essas informações ainda estão expostas e podem ser alteradas manualmente.
 
 O package.json é um arquivo muito utilizado em aplicações JS modernas que guarda vários dados de nossa aplicação. O arquivo gerado para este curso tem apenas algumas informações.
 E é justamente para organizar essa série de pacotes e bibliotecas que o package.json foi criado. Com ele é fácil de saber qual a versão do pacote, o nome dele, quem fez aquele código etc.
 
 Tipos Primitivos são sempre passados como um valor, enquanto tipos não primitivos sempre são passados por referência. (Um tipo primitivo é simplesmente um valor em sua forma mais simples de representação. Eles também são imutáveis, uma vez declarados seu valor, nunca muda.

    Em Javascript, os tipos primitivos são:

    *   String (texto);
    *   Number (número);
    *   Boolean;
    *   Null;
    *   undefined;
    *   Symbol.
    
    )
 */

import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/gerente.js";
import {Diretor} from "./Funcionarios/diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Renata", 10000, 12589758955);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("João", 5000, 25874895855);
gerente.cadastrarSenha("456789");
const cliente = new Cliente("Lais", 25847859858, "456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "457")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado1 = SistemaAutenticacao.login(gerente, "456789");

console.log(diretorEstaLogado,gerenteEstaLogado1,clienteEstaLogado);


// import {ContaCorrente} from "./Conta/ContaCorrente.js";
// import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";

// const cliente1 = new Cliente("Renata", 25836915858);

// const contaCorrenteRenata = new ContaCorrente(1001, cliente1);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// // const conta = new Conta(0, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1);

// contaSalario.depositar(1000);
// contaSalario.sacar(10);

// console.log(contaPoupanca);
// console.log(contaCorrenteRenata);
// // console.log(conta);
// console.log(contaSalario);

