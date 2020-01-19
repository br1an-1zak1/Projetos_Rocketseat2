import React, { useState, useEffect } from "react";

import "./style.css";

function DevForm( {onSubmit} ) {
  //declarando o estado
  const [latitude, setLatitude] = useState(''); 
  const [longitude, setLongitude] = useState(''); 

  const [github_username, setGithub_username] = useState(''); 
  const [techs, setTechs] = useState(''); 

  //função do react utilizada para pegar a geolocalização
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        //setando o estado
        setLatitude(latitude); 
        setLongitude(longitude);
      },
      (err) =>{
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(e){
    e.preventDefault(); // não Deixa ocorrer erro de XSS
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,  
    });
    setGithub_username('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username"> Usuário do Github </label>
        <input
          name="github_username"
          id="github_username"
          required
          onChange={e => setGithub_username(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs"> Tecnologias </label>
        <input
          name="techs"
          id="techs"
          required
          onChange={e => setTechs(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude"> Latitude </label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude"> Longitude </label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </div>
      </div>

      <button type="submit"> Salvar </button>
    </form>
  );
};

export default DevForm;