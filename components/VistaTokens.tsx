import BlockchainAdapter from '@lib/BlockchainAdapter'
import GestorBilleteras from '@lib/managers/GestorBilleteras'
import GestorTokens from '@lib/managers/GestorTokens'
import Billeteras from '@lib/models/Billeteras'
import Tokens from '@lib/models/Tokens'
import {
  Acciones,
  Columna,
  Estados,
  NavMenu,
  RolesBilleteras,
  TipoColumna,
} from '@lib/types.d'
import {
  Button,
  Checkbox,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Tabs,
  TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { b10 } from '../scripts/modelos'

export default function VistaTokens() {
  const [getTabValue, setTabValue] = useState(NavMenu.billeteras)
  const [getBilleteraUsuario, setBilleteraUsuario] = useState(b10)
  const [getTableData, setTableData] = useState<Billeteras[] | Tokens[]>([])
  //const [getTableData, setTableData] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [getColumnas, setColumnas] = useState<Columna[]>([])
  const [getIncluyeBajas, setIncluyeBajas] = useState(Estados.suspendido)
  const adapter = BlockchainAdapter.instanciar()
  const gestorBilletera = new GestorBilleteras()
  const gestorTokens = GestorTokens.instanciar()

  const handleTabChange = (
    event: React.SyntheticEvent,
    nuevoValor: NavMenu
  ) => {
    setTabValue(nuevoValor)
    if (nuevoValor == NavMenu.billeteras) {
      setColumnas([
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
      ])
      const data = GestorBilleteras.instanciar().buscar(
        '',
        RolesBilleteras.usuario,
        Estados.todos
      )
      setTableData(data)
    } else if (nuevoValor == NavMenu.tokens) {
      // setear data de tokens
      setColumnas([
        {
          id: TipoColumna.simbolo,
          label: TipoColumna.simbolo,
          minWidth: 50,
          align: 'left',
        },
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
      ])
      const data = GestorTokens.instanciar().buscar('')
      setTableData(data)
    }
  }

  const handleBloquearPlataforma = () => {
    console.log('plataforma bloqueada')
  }

  function handleClickAccion(accion: Acciones) {
    switch (accion) {
      case Acciones.activar:
        console.log(accion)
        //llamar a funcion de activar
        break
      case Acciones.desactivar:
        console.log(accion)
        // llamar a funcion de desactivar
        break
      case Acciones.admin:
        console.log(accion)
        // llamar a funcion de hacer Admin
        break
      case Acciones.superadmin:
        console.log(accion)
        // llamar a funcion de hacer superadmin
        break
      case Acciones.modificar:
        console.log(accion)
        // llamar a funcion de modificar
        break
      case Acciones.detalles:
        console.log(accion)
        // llamar a detalles
        break
      default:
        console.log('default')
        // manejar esta opcion?
        break
    }
  }

  const handleClicNuevo = () => {
    if (getTabValue == NavMenu.billeteras) {
      // llamar a menu de nueva billetera
    } else if (getTabValue == NavMenu.tokens) {
      // llamar a menu de nuevo token
    }
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

  const cargarCelda = (
    // columna: Columna,
    // value: Estados | Acciones[] | string
    row: Billeteras | Tokens
  ) => {
    //cambiar el codigfo para que que pueda utiliozar el codigo del TableRow asi el cargarCelda devuelva el TableCell
    console.log('entoro')
    getColumnas.map((column: Columna) => {
      const value = row[column.id]
      //   switch (column.id) {
      //     case TipoColumna.simbolo:
      //       return 'Imagen'
      //     case TipoColumna.estado:
      //       return value == Estados.activo ? 'A' : 'I'
      //     case TipoColumna.acciones:
      //       if (row instanceof Billeteras) {
      //         return (
      //           <>
      //             {
      //               // me interesa el estado y el rol de la billetera
      //               row.estado == Estados.activo &&
      //                 getBilleteraUsuario.rol == RolesBilleteras.propietario && (
      //                   <Button>Quitar Rol</Button>
      //                 )
      //             }
      //             {
      //               // me interesa el rol de la billetera, ya para el texto me interesa el estado
      //               getBilleteraUsuario.rol == RolesBilleteras.propietario && (
      //                 <Button>
      //                   {row.estado == Estados.suspendido
      //                     ? 'Activar'
      //                     : 'Suspender'}
      //                 </Button>
      //               )
      //             }
      //           </>
      //         )
      //       } else {
      //         // entonces es token
      //         return (
      //           <>
      //             {<Button>Modificar</Button>}
      //             {
      //               <Button>
      //                 {row.estado == Estados.suspendido
      //                   ? 'Activar'
      //                   : 'Desactivar'}
      //               </Button>
      //             }
      //           </>
      //         )
      //       }
      //     default:
      //       return value
      //   }
      switch (column.id) {
        case TipoColumna.simbolo:
          return (
            <TableCell key={column.id} align={column.align}>
              {'Imagen'}
            </TableCell>
          )
        case TipoColumna.estado:
          return (
            <TableCell key={column.id} align={column.align}>
              {value == Estados.activo ? 'A' : 'I'}
            </TableCell>
          )
        case TipoColumna.acciones:
          if (row instanceof Billeteras) {
            return (
              <TableCell>
                {
                  // me interesa el estado y el rol de la billetera
                  row.estado == Estados.activo &&
                    getBilleteraUsuario.rol == RolesBilleteras.propietario && (
                      <Button>Quitar Rol</Button>
                    )
                }
                {
                  // me interesa el rol de la billetera, ya para el texto me interesa el estado
                  getBilleteraUsuario.rol == RolesBilleteras.propietario && (
                    <Button>
                      {row.estado == Estados.suspendido
                        ? 'Activar'
                        : 'Suspender'}
                    </Button>
                  )
                }
              </TableCell>
            )
          } else {
            // entonces es token
            return (
              <TableCell>
                {<Button>Modificar</Button>}
                {
                  <Button>
                    {row.estado == Estados.suspendido
                      ? 'Activar'
                      : 'Desactivar'}
                  </Button>
                }
              </TableCell>
            )
          }
        default:
          return (
            <TableCell key={column.id} align={column.align}>
              {value}
            </TableCell>
          )
        // return (
        //   <TableCell key={column.id} align={column.align}>
        //     {cargarCelda(column, value)}
        //   </TableCell>
        // )
      }
    })
  }

  function inicializar() {
    const data = GestorBilleteras.instanciar().buscar(
      '',
      RolesBilleteras.usuario,
      Estados.todos
    )
    setColumnas([
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
      //continuar
    ])
    console.log(data)
    setTableData(data)
  }

  useEffect(() => {
    inicializar()
  }, [])

  return (
    <div>
      <Tabs
        value={getTabValue}
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {gestorBilletera.verificarRol(getBilleteraUsuario) > 1 && (
          <Tab value={NavMenu.billeteras} label={NavMenu.billeteras} />
        )}
        {gestorBilletera.verificarRol(getBilleteraUsuario) > 1 && (
          <Tab value={NavMenu.tokens} label={NavMenu.tokens} />
        )}
      </Tabs>

      <Button variant="contained" onClick={handleClicNuevo}>
        Nuevo
      </Button>

      <TextField id="txt-busqueda" label={getTabValue} variant="outlined" />

      <Checkbox
        value={getIncluyeBajas}
        onChange={(e) =>
          setIncluyeBajas(
            e.target.valueAsNumber == Estados.activo
              ? Estados.activo
              : Estados.suspendido
          )
        }
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
                .map((row: Billeteras | Tokens) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={Math.random() * 1000}
                    >
                      {cargarCelda(row)}
                      {/* {getColumnas.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {cargarCelda(column, value)}
                          </TableCell>
                        )
                      })} */}
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
      <Button variant="contained" onClick={handleBloquearPlataforma}>
        Bloquear Plataforma
      </Button>
    </div>
  )
}
