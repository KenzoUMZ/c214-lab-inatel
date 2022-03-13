const validate = require('validate.js')
const CalculadoraConstraint = require('./validate');

const Calculadora = {
    soma(num1, num2) {
        const validateN1 = validate({ num1 }, CalculadoraConstraint.opConstraint);
        const validateN2 = validate({ num2 }, CalculadoraConstraint.opConstraint);
        console.log('Validate num1', validateN1);
        console.log('Validate num2', validateN2)

        if (validateN1 !== undefined || validateN2 !== undefined) {
            return 'Error';
        }
        var result = num1 + num2;
        return result;
    },

    sub(num1, num2) {
        const validateN1 = validate({ num1 }, CalculadoraConstraint.opConstraint);
        const validateN2 = validate({ num2 }, CalculadoraConstraint.opConstraint);
        console.log('Validate num1', validateN1);
        console.log('Validate num2', validateN2)

        if (validateN1 !== undefined || validateN2 !== undefined) {
            return 'Error';
        }
        var result = num1 - num2;
        return result;
    },

    mult(num1, num2) {
        const validateN1 = validate({ num1 }, CalculadoraConstraint.opConstraint);
        const validateN2 = validate({ num2 }, CalculadoraConstraint.opConstraint);
        console.log('Validate num1', validateN1);
        console.log('Validate num2', validateN2)

        if (validateN1 !== undefined || validateN2 !== undefined) {
            return 'Error';
        }
        var result = num1 * num2;
        return result;
    },

    div(num1, num2) {
        const validateN1 = validate({ num1 }, CalculadoraConstraint.opConstraint);
        const validateN2 = validate({ num2 }, CalculadoraConstraint.opConstraint);
        console.log('Validate num1', validateN1);
        console.log('Validate num2', validateN2)

        if (validateN1 !== undefined || validateN2 !== undefined) {
            return 'Error';
        }
        var result = num1 / num2;
        return result;
    },

    pow(num1, num2) {
        const validateN1 = validate({ num1 }, CalculadoraConstraint.opConstraint);
        const validateN2 = validate({ num2 }, CalculadoraConstraint.opConstraint);
        console.log('Validate num1', validateN1);
        console.log('Validate num2', validateN2)

        if (validateN1 !== undefined || validateN2 !== undefined) {
            return 'Error';
        }
        var result = Math.pow(num1, num2);
        return result;
    }
}

module.exports = Calculadora;