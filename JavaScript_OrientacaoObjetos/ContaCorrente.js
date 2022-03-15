import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;  //# ou _ indica que o atributo é privado só pode ser alterado e acessado dentro da classe
   

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            
            this._cliente = novoValor;
        }
    }

    get cliente(){
    
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }


    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -=valor;
            return valor;
        };
    }

    depositar(valor){
        if(valor <= 0) return; //early return - ele verifica se o valor é maior que zero e se não for ele retorna e pára a operação

        this._saldo += valor;

        console.log(this._saldo);
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
