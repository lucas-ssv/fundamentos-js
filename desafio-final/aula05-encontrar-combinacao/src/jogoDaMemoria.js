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
        this.heroisSelecionados = [];
    }

    // para usar o this, não podemos usar o static
    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais);

        this.tela.configurarBotaoJogar(this.jogar.bind(this));
        this.tela.configurarBotaoVerificarSelecao(
            this.verificarSelecao.bind(this)
        );
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

    verificarSelecao(id, name) {
        const item = { id, name };
        const heroisSelecionados = this.heroisSelecionados.length;

        switch (heroisSelecionados) {
            case 0:
                this.heroisSelecionados.push(item);
                break;
            case 1:
                const [opcao1] = this.heroisSelecionados;
                this.heroisSelecionados = [];

                if (opcao1.name === item.name && opcao1.id !== item.id) {
                    alert("combinação correta");
                    return;
                }

                alert("combinação incorreta");
                break;
        }
    }

    jogar() {
        this.embaralhar();
    }
}
