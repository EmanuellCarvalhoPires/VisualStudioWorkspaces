const express = require('express');

const app = express();

app.set('view engine', 'ejs');

//listen for requests

app.listen(3000);

app.get('/', (req, res) => {

    res.render('index');

});

app.get('/about', (req, res) => {

    res.render('about');

});

//404 page

app.use((req, res) => {
    res.status(404).render('404');
})