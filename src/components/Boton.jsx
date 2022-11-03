import React from "react";
import Button from '@mui/material/Button';

function Boton({texto, tipo, accionClick}) {
  return <Button variant="contained" onClick={accionClick} className={tipo}>
    {texto}
    </Button>;
}

export default Boton;
