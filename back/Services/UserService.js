const { Sequelize } = require("sequelize");

module.exports = {

    async adiciona(req, res, model){
        try{
            const body = req.body;
            console.log(model);
            console.log(req.body);
            const data = await model.create(body);
    
            return res.status(200).json(data);
        }
        catch (ex) {
            return res.status(400).json("Ocorreu um erro: " + ex.message);
        }
    }

}