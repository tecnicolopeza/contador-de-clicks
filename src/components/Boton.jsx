import React from "react";
import Button from "@mui/material/Button";

function Boton({ texto, tipo, accionClick }) {
  return (
    <Button
      sx={{ width: { xs: "80vw",sm: "30vw", md: "20vw" } }}
      variant="contained"
      onClick={accionClick}
      className={tipo}
    >
      {texto}
    </Button>
  );
}

export default Boton;
