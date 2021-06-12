const express = require('express');
const path = require('path');

const complements = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
    "You look horrible today",
    "That dress looks ugly on you",
    "You are fat",
    "You are a piece of shit",
    "You are a fool",
    "You don't even know how to spell your name",
    "You suck!",
    "Fuck you!",
    "Get the fuck outta here!"
];


function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex];
}

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

const app = express();

app.get("/", function (_req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/complement', function (_req, res) {
    res.json({
        complement: getRandomComplement(),
    })
    .end();
});

app.get('/insult', function (_req, res) {
    res.json({
        insult: getRandomInsult(),
    })
    .end();
})

app.use('/public', express.static('./public'));

app.listen(3000);
console.log('listening on http://localhost:3000');