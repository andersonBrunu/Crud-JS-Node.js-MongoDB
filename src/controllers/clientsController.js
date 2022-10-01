const mongoose = require('mongoose');

const ClientsModel = require('../model/clientsModel');

function add(req, res) {

    const { name, email, skills } = req.body;

    if (name !== "" || name !== null) {

        const register = new ClientsModel({
            name,
            email,
            skills,
        });

        register.save();

        res.redirect('/');
    }


}

async function editIndex(req, res) {
    const { id } = req.query;

    const cliente = await ClientsModel.findById(id);

    res.render('editClient', {
        cliente,
    });
}

async function edit(req, res) {

    const { name, email, skills } = req.body;


    const { id } = req.params;

    const cliente = await ClientsModel.findById(id);

    cliente.name = name;
    cliente.email = email;
    cliente.skills = skills;

    cliente.save();

    res.render('editClient', {
        cliente,
    });

}

async function remove(req, res) {

    const { id } = req.params;

    const remover = await ClientsModel.deleteOne({ _id: id });

    if (remover.deletedCount === 1) {
        res.redirect('/')
    }
}

module.exports = {
    add,
    editIndex,
    edit,
    remove,
}