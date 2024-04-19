
const ConvidadoService = require('../services/ConvidadoService.js');
const ConviteService = require('../services/ConviteService.js');


class ConvidadoController {

    static async listarConvidados(req, res) {
        console.info("Iniciando a lista de Convidados..")
        try {
            const convidados = await ConvidadoService.listarConvidados();
            return res.status(200).json(convidados);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async inserirConvidado(req, res) {
        console.info("Iniciando a inserção de convidado..", req.body);
        try {
            
            const { nome, acompanhanteAdulto, acompanhanteCrianca, codigo } = req.body;
                        
            const novoConvidado = await ConvidadoService.salvarConvidado(nome, acompanhanteAdulto, acompanhanteCrianca, codigo);
            
            if(novoConvidado) {
                const pegarConvite = await ConviteService.buscarConvite(codigo)

                const id = req.body.id
                const body = { 'usado': true }
                if(pegarConvite) {
                    const atualizarStatusConvite = await ConviteService.editarConvite(body, id )
                }
            }
            
            return res.status(201).json(novoConvidado);
        } catch (err) {
            
            console.error('Erro ao inserir convidado:', err);
            return res.status(500).json({ error: 'Erro ao inserir convidado' });
        }
    }
    
}

module.exports = ConvidadoController;