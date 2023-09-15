//- passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("alterar-tema");

// - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".botao")

//- passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    // - passo 6 - verificar se o body tem a classe modo escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    if (modoEscuroEstaAtivo) {
        //- passo 7 - remover a classe do modo-escuro do body
        body.classList.remove("modo-escuro");

        // - passo 8 - trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/prog.jpg");
        

    } else {
        // - passo 4 - adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro");

        // - passo 5 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/binary.jpg");

    }

});