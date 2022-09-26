const mongoose = require('mongoose');

function conect() {
    mongoose.connect("mongodb://localhost:/teste");
    const db = mongoose.connection;

    db.once('open', () => {
        console.log('Server conected to database');
    })

    db.on('error', () => {
        console.error.bind(console, 'Conection error: ');
    })
}

module.exports = {
    conect,
}