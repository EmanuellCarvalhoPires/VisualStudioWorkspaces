const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const Noc = require('./modules/noc')

const app = express();

//connection mongoDB
const dbURI = 'mongodb+srv://nocADM:04570072@portalnoc.8hfa3.mongodb.net/portalnoc?retryWrites=true&w=majority&appName=PortalNOC'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))


app.set('view engine', 'ejs');
app.use(morgan('dev'))

//Adicionando dados ao db mongo
app.get('/add-noc', (req, res) => {
    const nocDados = new Noc({
        title: 'Nova falha',
        snippet: 'Falha 1',
        body: 'Lalalalalalalalalalal'
    });

    nocDados.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})




app.get('/', (req, res) => {

    res.render('index', { title: 'Home' });

});

app.get('/about', (req, res) => {

    res.render('about', { title: 'About' });

});

//404 page

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})