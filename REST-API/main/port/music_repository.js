const { MusicModel } = require('../infrastructure/database');

const MusicRepository = {
    async create(data) {
        try {
            const model = new MusicModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nome,
            };
            const options = { new: true };
            const filter = { name: data.name };
            const result = await MusicModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await MusicModel.deleteOne({ name: data.name }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await MusicModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByName(data) {
        try {
            const result = await MusicModel.findOne({ name: data.name }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },
};

module.exports = MusicRepository;