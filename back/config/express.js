const express = require('express');
const consign = require('consign');
const body = require('body-parser');
const cors = require('cors');

module.exports = () =>{
    const app = express();
    app.use(body.urlencoded({extended: true}));
    app.use(body.json());
    app.use(cors());

    consign()
            .include('Controllers')
            .into(app);

    return app
}