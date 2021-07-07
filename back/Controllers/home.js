module.exports = app => {
    app.get('/', (req, res) => {
        res.send('GET/home')
    });

    app.post('/', (req, res) => {
        res.send('POST/home')
    });
}