import React from 'react';
// com o parametro props, pega as propriedades(atributos) passadas onde a funcao Header é chamada
function Header(props){
  return (
  <h1>Header {props.title} </h1>
  )
}

export default Header;
