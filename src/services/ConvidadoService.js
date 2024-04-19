const database = require('../models')

class ConvidadoService {

    static async listarConvidados() {

        try {
            const convidados = await database.Convidados.findAll();

            
            return convidados 
        } catch (err) {
            throw new Error('Erro ao listar convidados')
        }
    }

    static async salvarConvidado(nome, acompanhanteAdulto, acompanhanteCrianca, codconvite) {
        try {
            
            const novoConvidado = await database.Convidados.create({
                nome,
                acompanhanteAdulto,
                acompanhanteCrianca,
                codconvite
            });
    
            
            return novoConvidado;
        } catch (err) {
            
            throw new Error('Erro ao salvar convidado: ' + err.message);
        }
    }
    
}

module.exports = ConvidadoService;