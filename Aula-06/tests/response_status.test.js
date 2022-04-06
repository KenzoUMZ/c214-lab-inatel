const Utils = require('../utils/utils');
const Constants = require('../utils/Constants');

test('Status Code OK - Case undefined', () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

test('Status Code OK - Case undefined', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
});

