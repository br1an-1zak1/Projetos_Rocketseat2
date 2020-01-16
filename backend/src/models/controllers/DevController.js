const axios = require('axios');
const Dev = require('../Dev')

// controller geralmente tem 5 funções: index, store, update, destroy

module.exports = {
  async store(request, response){
    const { github_username, techs, latitude, longitude } = request.body;
    
    let dev = await Dev.findOne({ github_username });

    if (!dev){
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
  
      const { name = login, avatar_url, bio } = apiResponse.data;
    
      const techsArray = techs.split(',').map(tech => tech.trim());
    
      const location = {
        type:'Point',
        coordinates: [latitude, longitude],
      }
    
      dev = await Dev.create({
        github_username, //= "github_username = github_username" short Syntax: nome de propriedade e variável são iguais. 
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      })
    }
  
    return response.json(dev);
  }
};