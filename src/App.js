import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio';

class App extends React.Component {

  render()  {
    return (
      <div className="App">
      <div className='contenedor-principal'>
        
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          <Testimonio
            nombre='Shawn Wang'
            imagen='shawn'
            pais='Singapur'
            cargo='Ingeniero de Software'
            empresa='Amazon'
            testimonio='Da miedo cambiar de carrera. Solo gane experiencia'/>
          <Testimonio 
            nombre='Emma Bostian'
            pais='Suecia'
            imagen='emma'
            cargo='Ingeniera de Software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaSvript'/>
          <Testimonio
            nombre='Sarah'
            pais='Nigeria'
            imagen='sarah'
            cargo='Ingeniera de Software'
            empresa='ChatDesk'
            testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevo a mis conocimientos de programación de un nivel principiante total a un nivel muy seguro.'/>  
         
      </div>  
    </div>
    );
  }
}


export default App;
