//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Lista para armazenar os nomes

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = ""; // Limpa o campo de entrada
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

// Função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista

    amigos.forEach((nome) => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio!");
        return;
    }

    let sorteio = [...amigos]; // Copia a lista
    let resultado = [];

    do {
        sorteio = sorteio.sort(() => Math.random() - 0.5); // refaz o sorteio 
    } while (sorteio.some((nome, i) => nome === amigos[i])); // Garante que ninguém se sorteie

    for (let i = 0; i < amigos.length; i++) {
        let par = `${amigos[i]} → ${sorteio[i]}`;
        resultado.push(par);
    }

    exibirResultado(resultado);
}

// Função para exibir os pares sorteados
function exibirResultado(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpa a lista de resultados

    resultado.forEach((par) => {
        let item = document.createElement("li");
        item.textContent = par;
        listaResultado.appendChild(item);
    });
}
