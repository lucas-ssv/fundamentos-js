class JogoDaMemoria {
    constructor({ tela }) {
        this.tela = tela;

        this.heroisIniciais = [
            { img: "./files/batman.svg", name: "batman" },
            { img: "./files/flash.svg", name: "flash" },
            { img: "./files/wolverine.svg", name: "wolverine" },
            { img: "./files/deadpool.svg", name: "deadpool" },
        ];

        this.iconePadrao = "./files/default.svg";
        this.heroisEscondidos = [];
    }

    // para usar o this, não podemos usar o static
    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais);

        this.tela.configurarBotaoJogar(this.jogar.bind(this));
    }

    embaralhar() {
        const copias = this.heroisIniciais
            .concat(this.heroisIniciais)
            .map((item) => {
                return Object.assign({}, item, { id: Math.random() / 0.5 });
            })
            .sort(() => Math.random() - 0.5);

        this.tela.atualizarImagens(copias);

        setTimeout(() => {
            this.esconderHerois(copias);
        }, 1000);
    }

    esconderHerois(herois) {
        const heroisOcultos = herois.map(({ name, id }) => ({
            id,
            name,
            img: this.iconePadrao,
        }));

        this.tela.atualizarImagens(heroisOcultos);

        this.heroisOcultos = heroisOcultos;
    }

    jogar() {
        this.embaralhar();
    }
}
