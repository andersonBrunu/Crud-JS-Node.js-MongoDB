const mongoose = require('mongoose');
const ClientsModel = require('../model/clientsModel');

async function index(req, res) {
    const clients = await ClientsModel.find();
    res.render('index', {
        clients
    });
}

module.exports = {
    index,
}