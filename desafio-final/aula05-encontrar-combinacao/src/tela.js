const ID_CONTEUDO = "conteudo";
const BTN_JOGAR = "jogar";
const BTN_MOSTRAR_TUDO = "mostrarTudo";

class Tela {
    static obterCodigoHtml(item) {
        return `
            <div class="col-md-3">
                <div class="card" style="width: 50%" onclick="window.verificarSelecao('${item.id}', '${item.name}')">
                    <img
                        src="${item.img}"
                        name="${item.name}"
                        class="card-img-top"
                        alt="..."
                    />
                </div>
                <br />
            </div>
        `;
    }

    static configurarBotaoVerificarSelecao(funcaoOnClick) {
        window.verificarSelecao = funcaoOnClick;
    }

    static alterarConteudoHtml(codigoHtml) {
        const conteudo = document.getElementById("conteudo");
        conteudo.innerHTML = codigoHtml;
    }

    static gerarStringPelaImagem(items) {
        return items.map(Tela.obterCodigoHtml).join("");
    }

    static atualizarImagens(items) {
        const codigoHtml = Tela.gerarStringPelaImagem(items);
        Tela.alterarConteudoHtml(codigoHtml);
    }

    static configurarBotaoJogar(funcaoOnClick) {
        const btnJogar = document.getElementById(BTN_JOGAR);
        btnJogar.onclick = funcaoOnClick;
    }
}
