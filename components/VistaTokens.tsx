import GestorTokens from '@lib/managers/GestorTokens'
import Tokens from '@lib/models/Tokens'
import { Columna, Estados, TipoColumna } from '@lib/types.d'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'
import NuevoToken from './NuevoToken'

export default function VistaTokens() {
  const [getTableData, setTableData] = useState<Tokens[]>([])
  //const [getTableData, setTableData] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [getIncluyeBajas, setIncluyeBajas] = useState(true)
  const [getTextoBusqueda, setTextoBusqueda] = useState('')
  const [getEstadoModal, setEstadoModal] = useState(false)

  const gestorTokens = GestorTokens.instanciar()

  const handleModalNuevo = () => {
    setEstadoModal(!getEstadoModal)
  }

  // no esta funcionando bien el filtro conjunto de text y ck¿heck
  const handleBuscar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextoBusqueda(event.target.value.trim())
    // const data = gestorTokens.buscar(
    //   event.target.value.trim(),
    //   getIncluyeBajas ? Estados.todos : Estados.activo
    // )
    // setTableData(data)
  }

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncluyeBajas(event.target.checked)
    // console.log(getTextoBusqueda)
    // console.log(event.target.checked ? 'todos' : 'activos')
    // const data = gestorTokens.buscar(
    //   getTextoBusqueda,
    //   event.target.checked ? Estados.todos : Estados.activo
    // )
    // setTableData(data)
  }

  const handleClicRecargar = () => {
    // no se que hace aqui
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    setTableData(
      gestorTokens.buscar(
        getTextoBusqueda,
        getIncluyeBajas ? Estados.todos : Estados.activo
      )
    )
  }, [getTextoBusqueda, getIncluyeBajas])

  const columnas: Columna[] = [
    {
      id: TipoColumna.ticker,
      label: TipoColumna.ticker,
      minWidth: 50,
      align: 'left',
    },
    {
      id: TipoColumna.contrato,
      label: TipoColumna.contrato,
      minWidth: 50,
      align: 'left',
    },
    {
      id: TipoColumna.estado,
      label: TipoColumna.estado,
      minWidth: 50,
      align: 'left',
    },
    {
      id: TipoColumna.acciones,
      label: TipoColumna.acciones,
      minWidth: 50,
      align: 'left',
    },
    //continuar
  ]

  return (
    <>
      <NuevoToken />

      <TextField
        id="txt-busqueda"
        label={''}
        variant="outlined"
        onChange={handleBuscar}
      />

      <FormControlLabel
        control={
          <Checkbox
            defaultChecked={true}
            value={getIncluyeBajas}
            onChange={handleCheckBox}
          />
        }
        label="Incluye Bajas"
      />

      <Button variant="contained" onClick={handleClicRecargar}>
        Recargar
      </Button>

      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableBody>
              {getTableData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: Tokens) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={Math.random() * 1000}
                    >
                      {columnas.map((column) => {
                        if (column.id == 'acciones') {
                          return (
                            <TableCell key={1} align="left">
                              {row.estado == Estados.suspendido && (
                                <Button
                                  variant="contained"
                                  onClick={() => console.log('Activar token')}
                                >
                                  Activar
                                </Button>
                              )}
                              {row.estado == Estados.activo && (
                                <Button
                                  variant="contained"
                                  onClick={() => console.log('suspender token')}
                                >
                                  Suspender
                                </Button>
                              )}
                              {row.estado == Estados.suspendido && (
                                <Button
                                  variant="contained"
                                  onClick={() => console.log('modificar token')}
                                >
                                  Modificar
                                </Button>
                              )}
                            </TableCell>
                          )
                        } else {
                          const value = row[column.id]
                          return (
                            <TableCell
                              key={row.ticker + column.id}
                              align={column.align}
                            >
                              {column.id == TipoColumna.estado
                                ? Estados[value]
                                : value}
                            </TableCell>
                          )
                        }
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={getTableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}
