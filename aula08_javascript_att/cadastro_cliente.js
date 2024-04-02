class Pessoa{
    constructor(nome, endereco){
        this.Nome = nome;
        this.Endereco = endereco;

    }

    get Nome(){return this.nome}
    set Nome(nome){this.nome = nome}

    get Endereco(){return this.endereco}
    set Endereco(endereco){this.endereco = endereco}

    imprimir(){

    }

}

class Juridica extends Pessoa{
    constructor(nome, endereco, cnpj, razaoSocial){
        super(nome, endereco);
        this.Cnpj = cnpj;
        this.RazaoSocial = razaoSocial;
    }

    get Cnpj(){return this.cnpj}
    set Cnpj(cnpj){this.cnpj = cnpj}

    get RazaoSocial(){return this.razaoSocial}
    set RazaoSocial(razaoSocial){this.razaoSocial = razaoSocial}

    imprimir(){
        if (
            typeof this.nome == "string" &&
            typeof this.endereco == "string" &&
            typeof this.cnpj == "string" &&
            typeof this.razaoSocial == "string"  
        ){
        return "\nNome: " + this.nome +
        "\nEndereço: " + this.endereco +
        "\nCnpj: " + this.cnpj +
        "\nRazão Social: " + this.razaoSocial
        }else{
            return "\nUm dos campos não é string" //se o valor não for string ele aparece isso
        }
        
    
    }
}

class Fisica extends Pessoa{
    constructor(nome, endereco, cpf, dtNascimento){
        super(nome, endereco);
        this.Cpf = cpf;
        this.DtNascimento = dtNascimento;
    }

    get Cpf(){return this.cpf}
    set Cpf(cpf){this.cpf = cpf}

    get DtNascimentol(){return this.dtNascimento}
    set DtNascimento(dtNascimento){this.dtNascimento = dtNascimento}

    imprimir(){
        if (
            typeof this.nome == "string" &&
            typeof this.endereco == "string" &&
            typeof this.cpf == "string" &&
            typeof this.dtNascimento == "string"  
        ){
        return "\nNome: " + this.nome +
        "\nEndereço: " + this.endereco +
        "\nCpf: " + this.cpf +
        "\nData de Nascimento: " + this.dtNascimento
    }else{
        return "\nUm dos campos não é string" //se o valor não for string ele aparece isso
    }
    }
}

var pessoaJuridica = new Juridica("Rodolfo", "Casa legal, São Paulo, 123", "12345", "Casas LTDA"); //aqui pode testar se ele aceita string ou number
console.log(pessoaJuridica.imprimir())

var pessoaFisica = new Fisica("Makoto Yuki", "Iwatodai, Dormitorio, 333", "123456789", "12/07/1998"); //aqui pode testar se ele aceita string ou number
console.log(pessoaFisica.imprimir())