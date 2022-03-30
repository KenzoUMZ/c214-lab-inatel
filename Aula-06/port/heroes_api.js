const Heroes = require('../application/heroes_service');
const Utils = require('../utils/utils');

const route = '/heroes';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Heroes.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Heroes.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete`, async (req, res) => {
        const response = await Heroes.delete(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Heroes.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.patch(`${route}/listUser`, async (req, res) => {
        const response = await Heroes.listByEmail(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};