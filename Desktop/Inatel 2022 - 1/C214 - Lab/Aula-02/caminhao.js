class Caminhao extends Veiculo {

    eixos;

    constructor(placa, ano, eixos) {
        super(placa, ano);
        this.eixos = eixos;
    }

    setEixos(eixos) {
        this.eixos = eixos;
    }

    getEixos() {
        return this.eixos;
    }

    exibirDados() {
        console.log('Dados do caminhao');
        console.log('Placa:', this.placa);
        console.log('Ano:', this.ano);
        console.log('Eixos:', this.eixos);
    }
}

var caminhao = new Caminhao('123', '2011', 25)
caminhao.exibirDados();
