import React from 'react'
import Stack from '@mui/material/Stack';

function Contador(props) {
  return (
    <Stack sx={{
        border: 1,
        borderRadius: 1,
        paddingX: 15,
        paddingY: 10,
        marginY: 5,
        fontSize: "4em",
        }}>
        {props.numContador}
    </Stack>
  )
}

export default Contador