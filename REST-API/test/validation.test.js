const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.create({
        nome: "Musica",
        album: "Album da musica",
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        nome: "Patience",
        album: "G N' R Lies"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
