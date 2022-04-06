const Utils = require('../utils/utils');
const Constants = require('../utils/Constants');

test('Status Code OK - Case undefined', () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

test('Status Bad request - Case validation error', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
});

test('Status Not found - Case not found error', () => {
    const result = Utils.responseStatus(Constants.ErrorNotFound.name);
    expect(result).toEqual(404);
});

test('Status Not found - Case not found error', () => {
    const result = Utils.responseStatus(Constants.ErrorDuplicate.name);
    expect(result).toEqual(11000);
});


