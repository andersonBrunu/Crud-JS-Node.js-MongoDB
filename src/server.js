const express = require('express');
const { reset } = require('nodemon');
const path = require('path');

const app = express();
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, "views"));


app.get('/', (req, res) => {
    res.render('index');
});

app.use('/', (req, res) => {
    res.send('pagina não encontrada');
})

const port = process.env.PORT || 8080;
app.listen(port, () => { console.log(`Server runnig on port: ${port}`) })