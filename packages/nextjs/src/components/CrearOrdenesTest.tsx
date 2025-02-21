import { BlockchainContext } from '@/context/BlockchainContext'
import { Token } from '@/types'
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import { Box } from '@mui/system'
import { useContext, useState } from 'react'

export default function CrearOrdenesTest() {
  const { state, actions } = useContext(BlockchainContext)
  const [tipoOrden, setTipoOrden] = useState<number>(0)
  const [tokenVenta, setTokenVenta] = useState<string>('')
  const [tokenCompra, setTokenCompra] = useState<string>('')
  const [montoVenta, setMontoVenta] = useState<string>('')
  const [montoCompra, setMontoCompra] = useState<string>('')

  const { tokens } = state
  const { nuevaOrden } = actions

  return (
    <>
      <Box sx={{ marginBottom: 4 }}>
        <FormControl fullWidth>
          <FormLabel id="seleccionar-tipo-orden">
            Seleccionar tipo de orden
          </FormLabel>
          <RadioGroup
            aria-labelledby="seleccionar-tipo-orden"
            name="tipo-orden"
            value={tipoOrden}
            onChange={(event) => setTipoOrden(Number(event.target.value))}
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Compra-Venta"
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Intercambio"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <FormControl fullWidth>
          <InputLabel id="token-venta-input">Token Venta</InputLabel>
          <Select
            labelId="token-venta-input"
            id="token-compra"
            value={tokenVenta}
            label="token-venta"
            onChange={(event: SelectChangeEvent) =>
              setTokenVenta(event.target.value)
            }
          >
            {tokens.datos.map((token: Token) => (
              <MenuItem key={token.ticker} value={token.ticker}>
                {token.ticker}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <TextField
          fullWidth
          label="Monto venta"
          variant="filled"
          focused
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(event) => setMontoVenta(event.target.value)}
        />
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <FormControl fullWidth>
          <InputLabel id="token-compra-input">Token Compra</InputLabel>
          <Select
            labelId="token-compra-input"
            id="token-compra"
            value={tokenCompra}
            label="token-compra"
            onChange={(event: SelectChangeEvent) =>
              setTokenCompra(event.target.value)
            }
          >
            {tokens.datos.map((token: Token) => (
              <MenuItem key={token.ticker} value={token.ticker}>
                {token.ticker}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {tipoOrden == 0 && (
        <Box sx={{ marginBottom: 4 }}>
          <TextField
            fullWidth
            label="Monto compra"
            variant="filled"
            focused
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            onChange={(event) => setMontoCompra(event.target.value)}
          />
        </Box>
      )}

      <Button
        variant="contained"
        sx={{ width: '100%' }}
        onClick={() =>
          nuevaOrden(
            tokenVenta,
            tokenCompra,
            montoVenta,
            montoCompra,
            tipoOrden
          )
        }
      >
        Crear orden
      </Button>
    </>
  )
}
