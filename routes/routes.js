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
    app.get('/cars/:id', (req, res) => {
        const id = req.params.id;
        pool.query('SELECT * FROM cars WHERE id = ?', id, (error, result) => {
            if (error) throw error;
            res.send(result);
        });
    });
    app.post('/cars/add', (req, res) => {
        pool.query('INSERT INTO cars SET ?', request.body, (error, result) => {
            if (error) throw error;
            res.status(201).send(`Car added with ID: ${result.insertId}`);
        });
    });
    app.put('/cars/:id/edit', (req, res) => {
        const id = req.params.id;
        pool.query('UPDATE cars SET ? WHERE id = ?', [request.body, id], (error, result) => {
            if (error) throw error;
            res.send('Car updated successfully.');
        });
    });
    app.delete('/cars/:id', (req, res) => {
        const id = req.params.id;
        pool.query('DELETE FROM cars WHERE id = ?', id, (error, result) => {
            if (error) throw error;
            res.send('Car removed successfully.');
        });
    });
};

module.exports = router;