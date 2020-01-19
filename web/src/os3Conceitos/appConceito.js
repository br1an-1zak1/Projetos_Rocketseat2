import React, { useState } from 'react';
// import Header from './Header';

//Componente: Bloco isolado de HTML, CSS e JS. Ele não interfere no restante da aplicação
//Propriedade: Informação que um componente PAI passa para o componente FILHO
//Estado: Informações contidas pelo componente. {Imutabilidade}


function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1);
  }

  return (
    <>
      <h1> Contador: {counter} </h1>  
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
