export class Funcionario{
    constructor(){
        this._nome;
        this._salario;
        this._nome;

        this._bonificacao = 1;
        this._senha;
    }

   autenticar(senha){
    return senha == this._senha;
   }
    cadastrarSenha(senha){
        this._senha = senha;
    }
}