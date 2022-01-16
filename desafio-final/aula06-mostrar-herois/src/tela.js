const ID_CONTEUDO = "conteudo";
const BTN_JOGAR = "jogar";
const BTN_MOSTRAR_TUDO = "mostrarTudo";
const ID_MENSAGEM = "mensagem";
const CLASSE_INVISIBLE = "invisible";
const MENSAGENS = {
    success: {
        text: "Combinação correta",
        class: "alert-success",
    },
    error: {
        text: "Combinação incorreta",
        class: "alert-danger",
    },
};

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

    static exibirHerois(heroName, img) {
        const elementosHtml = document.getElementsByName(heroName);
        elementosHtml.forEach((item) => (item.src = img));
    }

    static showMessage(success = true) {
        const element = document.getElementById(ID_MENSAGEM);
        if (success) {
            element.classList.remove(MENSAGENS.error.class);
            element.classList.add(MENSAGENS.success.class);
            element.innerText = MENSAGENS.success.text;
        } else {
            element.classList.remove(MENSAGENS.success.class);
            element.classList.add(MENSAGENS.error.class);
            element.innerText = MENSAGENS.error.text;
        }

        element.classList.remove(CLASSE_INVISIBLE);
    }
}
