const model = require("../Models/NotasFiscais");

function listar(id = null) {
    const notasFiscais = model.getAll();
    if (id != null)
        return notasFiscais.find(n => n.id === id);
    else
        return notasFiscais;
}

function inserir(notaFiscal) {
    const notasFiscais = model.getAll();
    const nota = notasFiscais.find(n => n.id === notaFiscal.id)

    if(nota.id == 0 || nota.id == null) {
        const ids = notasFiscais.map(notaFiscal => notaFiscal.id);
        const maiorId = Math.max.apply(null, ids);
        notaFiscal.id = maiorId + 1;
    }
    
    notasFiscais.push(notaFiscal);
    model.saveAll(notasFiscais);
    return notaFiscal;
}

function atualizar(id, novosDados) {
    const notasFiscais = model.getAll();
    const index = notasFiscais.findIndex(n => n.id === id);

    if (index === -1) return null;
    if (novosDados.id && novosDados.id !== id) return null;

    notasFiscais[index] = { ...notasFiscais[index], ...novosDados };
    notasFiscais[index].id !== novosDados.id

    model.saveAll(notasFiscais);
    return notasFiscais[index];
}

function deletar(id) {
    let notasFiscais = model.getAll();
    const tamanhoInicial = notasFiscais.length;
    notasFiscais = notasFiscais.filter(n => n.id !== id);

    if (notasFiscais.length === tamanhoInicial) return false;

    model.saveAll(notasFiscais);
    return true;
}

module.exports = {
    listar,
    inserir,
    atualizar,
    deletar
};