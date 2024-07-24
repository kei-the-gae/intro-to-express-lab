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

app.get('/shoes', (req, res) => {
    // access query params
    const minPrice = Number(req.query['min-price']);
    const maxPrice = Number(req.query['max-price']);
    const type = req.query.type;

    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];

    let filteredList = [];

    //using query params
    if (minPrice) {
        shoes.forEach((shoe, i) => {
            if (shoe.price >= minPrice) if (filteredList.includes(shoe) === false) filteredList.push(shoes[i]);
        });
    };
    if (maxPrice) {
        shoes.forEach((shoe, i) => {
            if (shoe.price <= maxPrice) if (filteredList.includes(shoe) === false) filteredList.push(shoes[i]);
        });
    };
    if (type) {
        shoes.forEach((shoe, i) => {
            if (shoe.type === type) if (filteredList.includes(shoe) === false) filteredList.push(shoes[i]);
        });
    };
    if (!minPrice && !maxPrice && !type) {
        filteredList = shoes;
    };
    res.send(filteredList);
});

// listen
app.listen(3000, () => { console.log('Listening on port 3000') });