import { Box, Button, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

export default function NuevoToken() {
  const [getContrato, setContrato] = useState('')
  const [getOraculo, setOraculo] = useState('')
  const [getEstadoModal, setEstadoModal] = useState(false)

  const handleModalNuevo = () => {
    setEstadoModal(!getEstadoModal)
  }
  const handleCrear = () => {
    console.log('Creado')
    setEstadoModal(!getEstadoModal)
  }

  return (
    <>
      <Button variant="contained" onClick={handleModalNuevo}>
        Nuevo
      </Button>
      <Modal
        open={getEstadoModal}
        onClose={handleModalNuevo}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Box>
            <h2>Creación de Nuevo Token</h2>
            <TextField
              required
              id="contrato-required"
              label="Contrato"
              variant="standard"
              value={getContrato}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setContrato(event.target.value.trim())
              }
            />
            <TextField
              required
              id="oraculo-required"
              label="Oraculo"
              variant="standard"
              value={getOraculo}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setOraculo(event.target.value.trim())
              }
            />
          </Box>
          <Button onClick={handleCrear}>Crear</Button>
        </Box>
      </Modal>
    </>
  )
}
