const validate = require('validate.js');

const Utils = require('../utils/status-code');
const Constants = require('../utils/constants');
const MusicRepository = require('../port/music_repository');
const Constraints = require('../utils/music_validation');
const Validation = require('../utils/validation');

const Music = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await MusicRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = validate.validate(data, Constraints.update);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MusicRepository.update(data);

            if (response === []) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MusicRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByName(data) {
        try {
            const validation = validate.validate(data, Constraints.get);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MusicRepository.getByName(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await MusicRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Music;