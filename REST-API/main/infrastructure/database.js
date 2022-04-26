const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@labc214.ajb6f.mongodb.net/myFirstDatabase?`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MusicSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },

});

const MusicModel = mongoose.model('MusicModel', MusicSchema);

module.exports = {
    MusicModel,
};