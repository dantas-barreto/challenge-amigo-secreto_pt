//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    amigo = document.querySelector('input').value;
    if (amigo == "") {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
    }
        limparCampo();
        atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').textContent = sorteado;
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}