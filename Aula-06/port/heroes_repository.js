const { HeroesModel } = require('../infrastructure/database');

const HeroesRepository = {
    async create(data) {
        try {
            const model = new HeroesModel(data);
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
            const filter = { poder: data.poder };
            const result = await HeroesModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await HeroesModel.deleteOne({ poder: data.poder }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await HeroesModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByName(data) {
        try {
            const result = await HeroesModel.findOne({ nome: data.nome }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },
};

module.exports = HeroesRepository;