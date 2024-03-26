class Operacoes{
    constructor(){

    }

    Somar(valorA, valorB){
        console.log("Result: " + (valorA + valorB));
    }

    Somar(valorA, valorB, valorC){
        console.log("Result: " + (valorA + valorB + valorC));
    }
}

var objeto = new Operacoes();
objeto.Somar(10, 20, 30);