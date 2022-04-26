const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    album: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    album: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    album: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    album: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};