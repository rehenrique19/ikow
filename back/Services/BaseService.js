const { Sequelize } = require("sequelize");

module.exports = {

    async obtem(req, res, model){
        try{
            const data = await model.findAll();
    
            return res.status(200).json(data);
        }
        catch (ex) {
            return res.status(400).json("Ocorreu um erro: " + ex.message);
        }
    },

    async obtemPorId(req, res, model){
        try{
            const data = await model.findByPk(req.params.id);
    
            return res.status(200).json(data);
        }
        catch (ex) {
            return res.status(400).json("Ocorreu um erro: " + ex.message);
        }
    },
    
    async adiciona(req, res, model){
        try{
            const body = req.body;
            const data = await model.create(body);
    
            return res.status(200).json(data);
        }
        catch (ex) {
            return res.status(400).json("Ocorreu um erro: " + ex.message);
        }
    },
    
    async atualiza(req, res, model){
        try{
            const body = req.body;
            body
            const data = await model.update(
                body, {
                    where: {
                        id: body.id
                    }
                }
            );
            
            const ret = await model.findByPk(req.body.id);
    
            return res.status(200).json(ret);
        }
        catch (ex) {
            return res.status(400).json("Ocorreu um erro: " + ex.message);
        }
    }

}