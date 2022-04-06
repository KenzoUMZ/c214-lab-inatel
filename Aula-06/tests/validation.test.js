const Utils = require('../utils/utils');
const Constants = require('../utils/Constants');
const Validation = require('../utils/validation');

test('Caso valido', () => {
    const result = Validation.create({
        nome: "Batman",
        email: "batman@gmail.com",
        senha: "123",
        poder: "Dinheiro",
        fraqueza: "Falta de dinheiro"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Removendo o nome', () => {
    const result = Validation.create({
        email: "batman@gmail.com",
        senha: "123"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});


