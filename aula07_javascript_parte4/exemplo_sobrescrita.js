class Funcionario{
    constructor(pNome, pSalario){
        this.Nome = pNome;
        this.Salario = pSalario;
    }

    get Nome(){return this.Nome}
    set Nome(pNome){this.nome = pNome}

    get Salario(){return this.salario}
    set Salario(pSalario){this.salario = pSalario}

    calcularSalario(){

    }
}

class Vendedor extends Funcionario{
    constructor(pNome, pSalario, pComissao){
        super(pNome, pSalario);
        this.Comissao = pComissao;
    }

    get Comissao(){return this.comissao}
    set Comissao(pComissao){this.comissao = pComissao}

    calcularSalario(){
        return this.salario + this.comissao;
    }

}

class OperadorCaixa extends Funcionario{
    constructor(pNome, pSalario, pBonus){
        super(pNome, pSalario);
        this.Bonus = pBonus;
    }

    get Bonus(){return this.bonus}
    set Bonus(pBonus){this.bonus = pBonus}

    calcularSalario(){
        return this.salario + this.bonus;
    }

}

var vendedor = new Vendedor("Malagueta", 1000, 200);
console.log(vendedor.nome + ": " + vendedor.calcularSalario());

var opCaixa = new OperadorCaixa("Bocchi", 2000, 100);
console.log(opCaixa.nome + ": " + opCaixa.calcularSalario());