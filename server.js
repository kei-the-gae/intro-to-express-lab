// import
const express = require('express');

//create app
const app = express();

//define routes

app.get('/greetings/:username', (req, res) => {
    res.send(`Hiya, ${req.params.username}!`);
});

// listen
app.listen(3000, () => { console.log('Listening on port 3000') });