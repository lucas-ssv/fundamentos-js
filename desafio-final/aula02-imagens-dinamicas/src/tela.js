const ID_CONTEUDO = "conteudo";

class Tela {
    static obterCodigoHtml(item) {
        return `
            <div class="col-md-3">
                <div class="card" style="width: 50%">
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
}
