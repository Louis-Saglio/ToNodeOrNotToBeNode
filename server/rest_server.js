const express = require('express');

const app = express();


app.route('/tasks')
    .get((req, res) => {
        res.send('get');
    })
    .post((req, res) => {
        // res.content_type = 'application/json';
        res.send(req.body);
    })
    .delete((req, res) => {
        res.send('delete');
    })
    .put((req, res) => {
        res.send('put');
    });


app.route('/tasks/:id')
    .put((req, res) => {
        res.send('put with id');
    });


app.listen(3000, () => {
    console.log('marche');
});