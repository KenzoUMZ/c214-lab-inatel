class Onibus extends Veiculo{

    assentos;
    constructor(placa, ano, assentos){
        super(placa, ano);
        this.assentos = assentos;
    }

    setAssentos(assentos){
        this.assentos = assentos;
    }

    getAssentos(){
        return this.assentos;
    }

    exibirDados(){
        console.log('Dados do onibus');
        console.log('Placa:', this.placa);
        console.log('Ano:', this.ano);
        console.log('Assentos:', this.assentos);
    }
}

var onibus = new Onibus('123', '2011', 25)
onibus.exibirDados();