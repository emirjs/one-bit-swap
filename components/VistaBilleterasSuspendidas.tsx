import GestorBilleteras from '@lib/managers/GestorBilleteras'
import Billeteras from '@lib/models/Billeteras'
import { Columna, Estados, RolesBilleteras, TipoColumna } from '@lib/types.d'
import {
  Button,
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
import Nuevo from './NuevoAdministrador'

export default function VistaBilleterasSuspendidas() {
  const [getTableData, setTableData] = useState<Billeteras[]>([])
  //const [getTableData, setTableData] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [getTextoBusqueda, setTextoBusqueda] = useState('')

  const gestorBilletera = GestorBilleteras.instanciar()

  const handleClicRecargar = () => {
    // no se que hace aqui
  }

  const handleBuscar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextoBusqueda(event.target.value.trim())
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
      gestorBilletera.buscar(getTextoBusqueda, RolesBilleteras.administrador)
    )
  }, [getTextoBusqueda])

  const columnas: Columna[] = [
    {
      id: TipoColumna.direccion,
      label: TipoColumna.direccion,
      minWidth: 50,
      align: 'left',
    },
    {
      id: TipoColumna.rol,
      label: TipoColumna.rol,
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
  ]

  return (
    <>
      <Nuevo />

      <TextField
        id="txt-busqueda"
        label={''}
        variant="outlined"
        onChange={handleBuscar}
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
                .map((row: Billeteras) => {
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
                              {row.rol == RolesBilleteras.administrador && (
                                <Button
                                  variant="contained"
                                  onClick={() => console.log('Quitar Rol')}
                                >
                                  Quitar Rol Adminsitrador
                                </Button>
                              )}
                              {row.estado == Estados.suspendido && (
                                <Button
                                  variant="contained"
                                  onClick={() =>
                                    console.log('Activar Billetera')
                                  }
                                >
                                  Activar
                                </Button>
                              )}
                            </TableCell>
                          )
                        } else {
                          const value = row[column.id]
                          return (
                            <TableCell
                              key={row.direccion + column.id}
                              align={column.align}
                            >
                              {column.id == TipoColumna.estado
                                ? Estados[value]
                                : column.id == TipoColumna.rol
                                ? RolesBilleteras[value]
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
