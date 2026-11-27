const botaoModo = document.getElementById("botao-modo");
const iconeModo = document.getElementById("icone-modo");

function aplicarTema(tema) {

    const modoEscuro = tema === "escuro";

    document.body.classList.toggle("modo-escuro", modoEscuro);

    iconeModo.classList.toggle("fa-moon", modoEscuro);
    iconeModo.classList.toggle("fa-sun", !modoEscuro);

    botaoModo.setAttribute(
        "aria-label",
        modoEscuro ? "Ativar modo claro" : "Ativar modo escuro"
    );
}

function alternarModo() {

    const modoAtual = document.body.classList.contains("modo-escuro")
        ? "escuro"
        : "claro";
    const novoModo = modoAtual === "claro" ? "escuro" : "claro";

    aplicarTema(novoModo);

    localStorage.setItem("tema", novoModo);
}
const temaSalvo = localStorage.getItem("tema");
aplicarTema(temaSalvo || "claro");
botaoModo.addEventListener("click", alternarModo);