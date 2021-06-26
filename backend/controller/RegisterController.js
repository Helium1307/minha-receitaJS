const registerRepository = require('../models/registro');

module.exports = class RegisterController {
    static async get(req, res){
        
        try {
            const registro = await registerRepository.find();
            return res.status(200).send({ registro })
        } catch(error) {
            return res.status(500).json({error: error});
        }
    }
    
    static async post(req, res, next){

        try {   
            const register = await registerRepository.create(req.body)

            return res.send({register})

        } catch(error){
            res.status(404).json({error: error});
        }
    }

    static async put(req, res, next){
        res.send({registro: req.body});
    }

    static async delete(req, res, next){
        try {
            const deletar = await registerRepository.findByIdAndRemove(req.params.registroId);

            return res.send("Registro removido, ID: "+deletar);

        } catch (error){
            res.status(400).send({error: 'Error deleting register'});
        }
    }

}