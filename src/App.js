import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {
  
const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const ReiniciarContador = () =>{
    setNumClics( 0 );
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        {/* <img
          className='freecodecamp-logo'
          src={ freeCodeCampLogo }
          alt='Logo de freecodecamp'
        /> */}
        <p style={{color:'white', fontSize:'45px'}}>Alam Rodriguez</p>
      </div>
        <div className='contenedor-principal'>
          <Contador 
            numClics={numClics}
          />
          <Boton 
            texto='Click'
            esBotonDeClick={true}
            manejarClic={ manejarClic }
          />
          <Boton 
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClic={ ReiniciarContador }
          />
        </div>

    </div>
  );
}

export default App;
