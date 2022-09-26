const mongoose = require('mongoose');

const ClientsModel = require('../model/clientsModel');

function add(req, res) {

    const { name, email, skills } = req.body;

    const register = new ClientsModel({
        name,
        email,
        skills,
    });

    register.save();
    
    res.redirect('/');

}

module.exports = {
    add,
}