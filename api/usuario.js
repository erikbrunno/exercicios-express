function salvar(req, res) {

    res.send('Usuario > Salvar')
}

function obter(req, res) {
    
    res.send('Usuário > obter')
}

module.exports = { salvar, obter }