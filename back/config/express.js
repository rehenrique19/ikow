const express = require('express');
const consign = require('consign');
const body = require('body-parser');

module.exports = () =>{
    const app = express();
    app.use(body.urlencoded({extended: true}));
    app.use(body.json());

    consign()
            .include('Controllers')
            .into(app);

    return app
}