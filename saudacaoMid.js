function saudacao(nome) {
    return function(res, res, next) {

        console.log(`Seja bem vindo ${nome}`)
        next()
    }
}

module.exports = saudacao