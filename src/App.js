import freeCodeCampLogo from './imagenes/freecodecamp-logo.svg'
import './App.css';
import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo} 
          className='freecodecamp-logo'
          alt='logo de freecodecamp' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <TareaFormulario />
        <Tarea texto='Aprender React' />
      </div>
    </div>
  );
}

export default App;
