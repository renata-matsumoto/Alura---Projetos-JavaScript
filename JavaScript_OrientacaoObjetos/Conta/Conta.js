// Classe Abstrata: Conta - elas podem ser herdadas, mas não podem ser instanciadas.

export class Conta {
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deve instanciar um objeto do tipo Conta Diretamente");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    //Método Abstrato - deve ser sobreescrito nas classes filhas
    sacar(valor){
      throw new Error("O método Sacar da conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -=valorSacado;
            return valorSacado;
        };

        return 0;
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