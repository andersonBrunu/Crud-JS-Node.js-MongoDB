const express = require('express');
const path = require('path');

const database = require('./database');
const router = require('./routers');

const app = express();

app.use(express.json());

//Abrindo conexão com o banco de dados
database.conect();

//Definindo template engine
app.set('view engine', 'ejs');

//Receber dados atravez da requisição tipo post
app.use(express.urlencoded({ extended: true }));

//Definindo pasta de arquivos publicos
app.use(express.static(path.join(__dirname, "public")));

//Indicando que a pasta views esta dentro de scr
app.set('views', path.join(__dirname, "views"));


//rotas
app.use('/', router);

//erro 404
app.use('/', (req, res) => {
    res.send('pagina não encontrada');
})


const port = process.env.PORT || 8080;
app.listen(port, () => { console.log(`Server runnig on port: ${port}`) })