const axios = require('axios');
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async index(request, response){
    const { latitude, longitude, techs} = request.query;

    const tehsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs:{
        $in: techsArray,
      },
      location: {
        $near: {
           $geometry: {
             type: 'Point',
             coordinates: [longitude, latitude ],
           }
        }
      }
    });

    return response.json({message: 'searchs'})
  },
};