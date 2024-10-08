function pegaDados() {
    const produto = {
        nome: document.getElementById('nome').value,
    valor: document.getElementById('valor').value,
    descricao: document.getElementById('descricao').value,
    disponivel: document.querySelector('input[name="disponivel"]:checked').value
    };
    
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));

}

function mudaPagina() {
    window.location.href = 'produtos.html'
    event.preventDefault();
}

 function addProduto(){
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const tbody = document.getElementById('tabelaProd');

    produtos.forEach(produto => {
        const novaLinha = tbody.insertRow();

        const celulaNome = novaLinha.insertCell();
        celulaNome.textContent = produto.nome;

        const celulaValor = novaLinha.insertCell();
        celulaValor.textContent = produto.valor;

        const celulaDescricao = novaLinha.insertCell();
        celulaDescricao.textContent = produto.descricao;

        const celulaAvaliable = novaLinha.insertCell();
        celulaAvaliable.textContent = produto.disponivel;
    });
}




