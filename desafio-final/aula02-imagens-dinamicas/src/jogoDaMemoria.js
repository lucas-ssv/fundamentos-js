class JogoDaMemoria {
    constructor({ tela }) {
        this.tela = tela;

        this.heroisIniciais = [
            { img: "./files/batman.svg", name: "batman" },
            { img: "./files/flash.svg", name: "flash" },
            { img: "./files/wolverine.svg", name: "wolverine" },
            { img: "./files/deadpool.svg", name: "deadpool" },
        ];
    }

    // para usar o this, não podemos usar o static
    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais);
    }
}
