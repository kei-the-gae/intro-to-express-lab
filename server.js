// import
const express = require('express');

//create app
const app = express();

//define routes

app.get('/greetings/:username', (req, res) => {
    res.send(`Hiya, ${req.params.username}!`);
});

app.get('/roll/:number', (req, res) => {
    if (isNaN(req.params.number)) {
        res.send('You must specify a number.');
    };
    if (isNaN(req.params.number) !== true) {
        const random = Math.floor(Math.random() * req.params.number) + 1;
        res.send(`You rolled a ${random}.`);
    };
});

// listen
app.listen(3000, () => { console.log('Listening on port 3000') });