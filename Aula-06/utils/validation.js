const validate = require('validate.js');
const Constants = require('./Constants');
const Constraints = require('./users_validation');

const Validation = {
    create(data) {
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
    }
};

module.exports = Validation;