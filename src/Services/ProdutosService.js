const model = require("../Models/Produtos");

function listar(id = null) {
    const produtos = model.getAll();
    if (id != null)
        return produtos.find(p => p.id === id);
    else
        return produtos;
}

function inserir(produto) {
    const produtos = model.getAll();
    const prod = produtos.find(p => p.id === produto.id)

    if(prod.id == 0 || prod.id == null) {
        const ids = produtos.map(produto => produto.id);
        const maiorId = Math.max.apply(null, ids);
        produto.id = maiorId + 1;
    }
    
    produtos.push(produto);
    model.saveAll(produtos);
    return produto;
}

function atualizar(id, novosDados) {
    const produtos = model.getAll();
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) return null;
    if (novosDados.id && novosDados.id !== id) return null;

    produtos[index] = { ...produtos[index], ...novosDados };
    produtos[index].id !== novosDados.id

    model.saveAll(produtos);
    return produtos[index];
}

function deletar(id) {
    let produtos = model.getAll();
    const tamanhoInicial = produtos.length;
    produtos = produtos.filter(p => p.id !== id);

    if (produtos.length === tamanhoInicial) return false;

    model.saveAll(produtos);
    return true;
}

module.exports = {
    listar,
    inserir,
    atualizar,
    deletar
};