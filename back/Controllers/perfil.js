const baseService = require('../Services/BaseService');
const models = require('../Database/models');

module.exports = app => {
    app.get('/perfil', (req, res) => {
        baseService.obtem(req, res, models.Perfils);
    });

    app.get('/perfil/:id', (req, res) => {
        baseService.obtemPorId(req, res, models.Perfils);
    });

    app.post('/perfil', (req, res) => {
        baseService.adiciona(req, res, models.Perfils);
    });

    app.post('/perfil/atualiza', (req, res) => {
        baseService.atualiza(req, res, models.Perfils);
    });
}