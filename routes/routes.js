const pool = require('../data/config');

const router = app => {
    app.get('/', (req, res) => {
        res.send("API!");
    });
    app.get('/cars', (req, res) => {
        pool.query('SELECT * FROM cars', (error, result) => {
            if (error) throw error;
            res.send(result);
        });
    });
};

module.exports = router;