// Importações Configurações do Ambiente
const express = require('./Config/express');
const app = express();
const port = process.env.PORT || 4600;

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log('running: http://localhost:' + port);
});

// connection.connect(erro => {
//     if (erro) {
//         console.log('fail connect DataBase');
//     }
//     else {
//         console.log('connected to: ' + db);
//     }
// });
