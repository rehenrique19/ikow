const baseService = require('../Services/BaseService');
const userService = require('../Services/UserService');
const models = require('../Database/models');

module.exports = app => {
    app.get('/usuario', (req, res) => {
        baseService.obtem(req, res, models.Usuarios);
    });

    app.get('/usuario/:id', (req, res) => {
        baseService.obtemPorId(req, res, models.Usuarios);
    });

    app.post('/usuario', (req, res) => {
        userService.adiciona(req, res, models.Usuarios);
    });

    app.post('/usuario/atualiza', (req, res) => {
        baseService.atualiza(req, res, models.Usuarios);
    });
}