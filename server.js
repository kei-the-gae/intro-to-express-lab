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
    } else {
        const random = Math.floor(Math.random() * req.params.number) + 1;
        res.send(`You rolled a ${random}.`);
    };
});

app.get('/collectibles/:index', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];

    if (req.params.index >= 0 && req.params.index < collectibles.length) {
        res.send(`So, you want the ${collectibles[req.params.index].name}? For ${collectibles[req.params.index].price}, it can be yours!`);
    } else {
        res.send('This item is not yet in stock. Check back soon!');
    };
});

// listen
app.listen(3000, () => { console.log('Listening on port 3000') });