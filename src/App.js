import './App.css';
import Boton from './components/Boton';
import Hero from './components/Hero';
import Logo from './components/Logo';

function App() {

  function accionClick(accion) {
    if (accion === "sumar") {
      console.log("sumar");
    } else {
      console.log("reiniciar");
    }
  }

  return (
    <div className='App'>
      <Logo />
      <Boton
        texto={"sumar"}
        tipo={"btnSumar"}
        accionClick={() => accionClick("sumar")} />
      <Boton
        texto={"reiniciar"}
        tipo={"btnReiniciar"}
        accionClick={() => accionClick("reiniciar")} />
    </div>
  );
}

export default App;
