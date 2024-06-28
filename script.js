const numeros = document.querySelectorAll(".numeros span");
const contador = document.querySelector(".contador");
const mensagemFinal = document.querySelector(".final");
const repetir = document.querySelector("#repetir");

function executarAnimacao() {
    numeros.forEach((numero, indice) => {
        const ultimoIndice = numeros.length - 1;

        numero.addEventListener("animationend", (evento) => {
            if (evento.animationName === "entrar" && indice !== ultimoIndice) {
                numero.classList.remove("numero-entrando");
                numero.classList.add("numero-saindo");
            } else if (
                evento.animationName === "sair" &&
                numero.nextElementSibling
            ) {
                numero.nextElementSibling.classList.add("numero-entrando");
            } else {
                contador.classList.add("esconder");
                mensagemFinal.classList.add("exibir");
            }
        });
    });
}

executarAnimacao();

function reiniciarDOM() {
    contador.classList.remove("esconder");
    mensagemFinal.classList.remove("exibir");

    numeros.forEach((numero) => {
        numero.classList.value = "";
    });

    numeros[0].classList.add("numero-entrando");
}

repetir.addEventListener("click", () => {
    reiniciarDOM();
    executarAnimacao();
});
