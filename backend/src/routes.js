const { Router } = require('express');
const DevController = require('./models/controllers/DevController')

const routes = Router();

routes.get('/devs', )
routes.post('/devs', DevController.store);

module.exports = routes;