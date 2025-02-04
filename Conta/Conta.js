export class Conta { 

    constructor(saldoInicial,cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo CONTA diretamente")
        }
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

    sacar(valor){
        throw new Error("O método sacar da conta é abstrato");
    }

    _sacar(valor, taxa){

        const  valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        
        return 0;
    }
    
    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }
    
    tranferir(valor, conta){
        if(this._tipo =="salario"){
            return
        }   
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);        
    }
}