const express = require('express');

var app = express();

app.get('/', (reqq, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {name: 'Nora', age: 32},
        {name: 'Ashley', age: 33},
        {name: 'Arthur', age: 3},
        {name: 'Lachlan', age: 1}
    ])
})

app.listen(3000);

module.exports.app = app;