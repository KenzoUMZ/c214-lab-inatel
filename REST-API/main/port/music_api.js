const Music = require('../application/music_service');
const Utils = require('../utils/status-code');

const route = '/music';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Music.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Music.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete`, async (req, res) => {
        const response = await Music.delete(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Music.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.patch(`${route}/listUser`, async (req, res) => {
        const response = await Music.listByEmail(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};