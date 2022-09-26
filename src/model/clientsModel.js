const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    email: String,
    skills: Array,
});

const Model = mongoose.model('clients', schema);

module.exports = Model;