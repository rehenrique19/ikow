module.exports = app => {
    app.get('/login', (req, res) => {
        res.send('GET/login')
    });

    app.post('/login', (req, res) => {
        res.send('POST/login')
    });
}