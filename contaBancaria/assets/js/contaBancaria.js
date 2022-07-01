
//Classe de conta bancária
class contaBancaria {
        constructor(agencia,numero,tipo){
            this.agencia = agencia;
            this.numero = numero;
            this.tipo = tipo;
            this._saldo = 0;
        }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    //Método para sacar um valor
    sacar(valor){
        if (this._saldo >= valor ){
            this._saldo-=valor;
            return this._saldo;
        } else {
            return `${valor} insuficiente para saque.`
        }
    }
    //Método para depositar um valor
    depositar(valor){
        this._saldo+=valor;
    return `Operação realizada com sucesso, seu novo saldo é ${this._saldo}`;
    }
}

//Classe de conta corrente 

class contaCorrente extends contaBancaria{
    constructor(agencia,numero,cartaoDeCredito){
        super(agencia,numero);
        this.tipo =  'corrente';
        this._cartaoDeCredito = cartaoDeCredito;
    }

    get cartaoDeCredito(){
        return this._cartaoDeCredito;
    }

    set cartaoDeCredito(valor){
        this._cartaoDeCredito = valor;
    }

}

class contaPoupanca extends contaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo =  'poupança';
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo =  'universitária';
    }

    sacar(valor){
        if (valor <= this._saldo && valor <= 500){
            this._saldo-=valor;
            console.log("Operação realizada com sucesso\n");
            return this._saldo;
        } else {
            console.log("Você não pode sacar este valor");
        } 
    }
}


