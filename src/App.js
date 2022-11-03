import './App.css';
import Boton from './components/Boton';
import Logo from './components/Logo';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Contador from './components/Contador';
import { useState } from "react";

function App() {
  
  let [contador, setContador] = useState(0);
  
  function accionClick(accion) {
    if (accion === "sumar") {
      setContador(++contador);
    } 
    else if(accion === "restar"){
      setContador(--contador);
    }
    else {
      setContador(contador=0);
    }
  }

  return (
    <div className='App'>
      <Logo />

      <Stack className='hero' alignItems={"center"} spacing={1}>
        <Contador numContador={contador}/>
        <Box>
          <Boton
            texto={"sumar"}
            tipo={"btnSumar"}
            accionClick={() => accionClick("sumar")} />
        </Box>
        <Box>
          <Boton
            texto={"restar"}
            tipo={"btnRestar"}
            accionClick={() => accionClick("restar")} />
        </Box>
        <Box>
          <Boton
            texto={"reiniciar"}
            tipo={"btnReiniciar"}
            accionClick={() => accionClick("reiniciar")} />
        </Box>

      </Stack>
    </div>
  );
}

export default App;
