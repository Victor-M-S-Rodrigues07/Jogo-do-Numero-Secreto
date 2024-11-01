let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {

    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}


function exibirMensagemInicial() {

    exibirTextoNaTela ("h1", "Jogo do Número Secreto");
    exibirTextoNaTela ("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();


function verificarChute() {

    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {

        exibirTextoNaTela("h1", "Acertou!!");
        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);

        document.getElementById("reiniciar").removeAttribute("disabled");
    }

    else {

        if (chute > numeroSecreto) {

            exibirTextoNaTela("p", "O número secreto é menor");
        }
        
        else {

            exibirTextoNaTela("p", "O número secreto é maior");
        }

        tentativas++;

        limparCampo()
    }

}

function gerarNumeroAleatorio () {

    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {

        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {

        return gerarNumeroAleatorio();
    }
    
    else {

        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {

    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}
//Case Sensitive = Diferencia maiúsculas e minúsculas
// Boa prática: Nomenclatura importa; evitar repetições
// Trecho de código que executa uma ação
// Funções precisam de ()
// .value
// getElementById()
// HTML não aceita template strings
// setAttribute and removeAttribute
// Array = Lista [Iíndice é a posição do elemento sempre no 0
//Length
//.includes = se está na lista; Tudo que é muito comum pode ter soluções já propostas
// adiciona elementos ao final da lista
//Recursão = se já está na lista