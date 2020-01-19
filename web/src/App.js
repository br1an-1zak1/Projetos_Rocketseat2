import React, { useEffect, useState } from "react";
import api from './services/api';

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./main.css";

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


function App() {
  //declarando o estado
  const [devs, setDevs] = useState([]);
  
  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data)
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){
    const response = await api.post('/devs', data );

    setDevs([...devs, response.data]);
    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} /> //key é o identificador de cada dev; dev é uma propriedade passada pra o componente para que possa ser feita a desestruturação do objeto dev
          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
