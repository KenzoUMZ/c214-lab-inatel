const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:<password>@cluster0.uz1pu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const HeroesSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    senha: String,
    poder: String,
    fraqueza: String,
});

const HeroesModel = mongoose.model('HeroesModel', HeroesSchema);

module.exports = {
    HeroesModel,
};