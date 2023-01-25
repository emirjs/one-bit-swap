import GestorBilleteras from '@lib/managers/GestorBilleteras'
import GestorOrdenes from '@lib/managers/GestorOrdenes'
import GestorTokens from '@lib/managers/GestorTokens'
import Billeteras from '@lib/models/Billeteras'
import Ordenes from '@lib/models/Ordenes'
import Tokens from '@lib/models/Tokens'
import {
  Columna,
  Estados,
  EstadosOrdenes,
  NavMenu,
  TipoColumna,
  TiposOrdenes,
} from '@lib/types.d'
import {
  Autocomplete,
  Box,
  Button,
  ButtonGroup,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { b1 } from 'scripts/modelos'

export default function VistaOrdenes() {
  const [getTokens, setTokens] = useState(Array<Tokens>)
  const [getOrdenes, setOrdenes] = useState(Array<Ordenes>)
  const [getTabValue, setTabValue] = useState(NavMenu.ordenesAbiertas)
  const [getBilleteraUsuario, setBilleteraUsuario] = useState<
    Billeteras | undefined
  >(b1)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [getTokenVenta, setTokenVenta] = useState<Tokens | null>(null)
  const [getTokenCompra, setTokenCompra] = useState<Tokens | null>(null)
  const [getTipoOrden, setTipoOrden] = useState(TiposOrdenes.todas)
  const [getMontoVenta, setMontoVenta] = useState(BigInt(0))
  const [getMontoCompra, setMontoCompra] = useState(BigInt(0))
  const [getFechaInicio, setFechaInicio] = useState(undefined)
  const [getFechaFin, setFechaFin] = useState(undefined)

  const gestorBilletera = GestorBilleteras.instanciar()
  const gestorOrdenes = GestorOrdenes.instanciar()
  const gestorTokens = GestorTokens.instanciar()

  const handleChangeTokenButton = () => {
    // if (
    //   getTokenCompra != null &&
    //   getTokenCompra != undefined &&
    //   getTokenVenta != null &&
    //   getTokenVenta != undefined
    // ) {
    // const auxVenta = getBuscarForm.tokenVenta
    // const auxCompra = getBuscarForm.tokenCompra
    console.log('cambio ' + getTokenCompra + '  por ' + getTokenVenta)
    const aux = getTokenVenta
    setTokenVenta(getTokenCompra)
    setTokenCompra(aux)
    console.log('cambio ' + getTokenCompra + '  por ' + getTokenVenta)
    // setBuscarForm({
    //   ...getBuscarForm,
    //   ...{
    //     tokenCompra: auxVenta,
    //     tokenVenta: auxCompra,
    //   },
    // })
    // }
  }

  const handleChangeTokenVenta = (
    event: React.SyntheticEvent,
    value: Tokens | null
  ) => {
    console.log(value?.ticker)
    setTokenVenta(value)
    // setBuscarForm({
    //   ...getBuscarForm,
    //   ...{
    //     tokenVenta: value == null ? undefined : value,
    //   },
    // })
  }

  const handleChangeTokenCompra = (
    event: React.SyntheticEvent,
    value: Tokens | null
  ) => {
    console.log(value?.ticker)
    setTokenCompra(value)
    // setBuscarForm({
    //   ...getBuscarForm,
    //   ...{
    //     tokenCompra: value == null ? undefined : value,
    //   },
    // })
  }

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setTipoOrden(parseInt(event.target.value))
    setOrdenes(
      gestorOrdenes.buscar(
        getTabValue == NavMenu.ordenesAbiertas
          ? undefined
          : getBilleteraUsuario,
        parseInt(event.target.value) == TiposOrdenes.todas
          ? undefined
          : parseInt(event.target.value),
        getTokenCompra == null ? undefined : getTokenCompra,
        getTokenVenta == null ? undefined : getTokenVenta,
        getMontoCompra == BigInt(0) ? undefined : getMontoCompra,
        getMontoVenta == BigInt(0) ? undefined : getMontoVenta,
        getTabValue == NavMenu.miHistorial ? undefined : EstadosOrdenes.activa,
        undefined,
        undefined
      )
    )
    // setBuscarForm({
    //   ...getBuscarForm,
    //   ...{
    //     tipoOrden:
    //       parseInt(event.target.value) == TiposOrdenes.todas
    //         ? undefined
    //         : parseInt(event.target.value),
    //   },
    // })
  }

  const handleTabChange = (
    event: React.SyntheticEvent,
    nuevoValor: NavMenu
  ) => {
    setTabValue(nuevoValor)
    if (nuevoValor == NavMenu.ordenesAbiertas) {
      // setOrdenes(
      //   gestorOrdenes.buscar(
      //     undefined,
      //     getTipoOrden == TiposOrdenes.todas ? undefined : getTipoOrden,
      //     getTokenCompra == null ? undefined : getTokenCompra,
      //     getTokenVenta == null ? undefined : getTokenVenta,
      //     getMontoCompra == BigInt(0) ? undefined : getMontoCompra,
      //     getMontoVenta == BigInt(0) ? undefined : getMontoVenta,
      //     EstadosOrdenes.activa,
      //     undefined,
      //     undefined
      //   )
      // )

      // setBuscarForm({
      //   ...getBuscarForm,
      //   ...{ billetera: undefined, estado: EstadosOrdenes.activa },
      // })
      setTokens(gestorTokens.buscar('', Estados.todos))
    } else if (nuevoValor == NavMenu.misOrdenes) {
      // setOrdenes(
      //   gestorOrdenes.buscar(
      //     getBilleteraUsuario,
      //     getTipoOrden == TiposOrdenes.todas ? undefined : getTipoOrden,
      //     getTokenCompra == null ? undefined : getTokenCompra,
      //     getTokenVenta == null ? undefined : getTokenVenta,
      //     getMontoCompra == BigInt(0) ? undefined : getMontoCompra,
      //     getMontoVenta == BigInt(0) ? undefined : getMontoVenta,
      //     EstadosOrdenes.activa,
      //     undefined,
      //     undefined
      //   )
      // )
      // setBuscarForm({
      //   ...getBuscarForm,
      //   ...{ billetera: b1, estado: EstadosOrdenes.activa },
      // })
      setTokens(gestorTokens.buscar('', Estados.todos))
    } else if (nuevoValor == NavMenu.miHistorial) {
      // setOrdenes(
      //   gestorOrdenes.buscar(
      //     getBilleteraUsuario,
      //     getTipoOrden == TiposOrdenes.todas ? undefined : getTipoOrden,
      //     getTokenCompra == null ? undefined : getTokenCompra,
      //     getTokenVenta == null ? undefined : getTokenVenta,
      //     getMontoCompra == BigInt(0) ? undefined : getMontoCompra,
      //     getMontoVenta == BigInt(0) ? undefined : getMontoVenta,
      //     undefined,
      //     getFechaInicio,
      //     getFechaFin
      //   )
      // )
      // setBuscarForm({
      //   ...getBuscarForm,
      //   ...{ billetera: b1, estado: undefined },
      // })
      setTokens(gestorTokens.buscar('', Estados.todos))
    }
  }

  function handleCancelarOrden(id: string) {
    gestorOrdenes.CancelarOrden(id)
  }

  function handleEjecutarOrden(
    tipo: TiposOrdenes,
    id: string,
    comprador: Billeteras
  ) {
    gestorOrdenes.EjecutarOrden(tipo, id, comprador)
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
    // setOrdenes(
    //   gestorOrdenes.buscar(
    //     getBuscarForm.billetera,
    //     getBuscarForm.tipoOrden == TiposOrdenes.todas
    //       ? undefined
    //       : getBuscarForm.tipoOrden,
    //     getBuscarForm.tokenCompra,
    //     getBuscarForm.tokenVenta,
    //     getBuscarForm.montoCompra,
    //     getBuscarForm.montoVenta,
    //     getBuscarForm.estado,
    //     undefined,
    //     undefined
    //   )
    // )
    setOrdenes(
      gestorOrdenes.buscar(
        getTabValue == NavMenu.ordenesAbiertas
          ? undefined
          : getBilleteraUsuario,
        getTipoOrden == TiposOrdenes.todas ? undefined : getTipoOrden,
        getTokenCompra == null ? undefined : getTokenCompra,
        getTokenVenta == null ? undefined : getTokenVenta,
        getMontoCompra == BigInt(0) ? undefined : getMontoCompra,
        getMontoVenta == BigInt(0) ? undefined : getMontoVenta,
        getTabValue == NavMenu.ordenesAbiertas
          ? EstadosOrdenes.activa
          : undefined,
        getFechaInicio,
        getFechaFin
      )
    )
    if (getTokens.length == 0) {
      setTokens(gestorTokens.buscar('', Estados.todos))
    }
  }, [
    getBilleteraUsuario,
    getTipoOrden,
    getTokenCompra,
    getTokenVenta,
    getMontoCompra,
    getMontoVenta,
    getFechaFin,
    getFechaInicio,
    getTabValue,
  ])

  const columnas: Columna[] = [
    { id: TipoColumna.id, label: 'IdOrden', minWidth: 40, align: 'left' },
    { id: TipoColumna.tipo, label: 'Tipo', minWidth: 40, align: 'left' },
    {
      id: TipoColumna.cantidadVenta,
      label: 'CantidadVenta',
      minWidth: 60,
      align: 'left',
    },
    {
      id: TipoColumna.tokenVenta,
      label: 'TokenVenta',
      minWidth: 50,
      align: 'left',
    },
    {
      id: TipoColumna.cantidadCompra,
      label: 'CantidadCompra',
      minWidth: 60,
      align: 'left',
    },
    {
      id: TipoColumna.tokenCompra,
      label: 'TokenCompra',
      minWidth: 50,
      align: 'left',
    },
    { id: TipoColumna.boton, label: '', minWidth: 60, align: 'left' },
  ]

  return (
    <>
      <Tabs
        value={getTabValue}
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={NavMenu.ordenesAbiertas} label={NavMenu.ordenesAbiertas} />
        {gestorBilletera.verificarRol(getBilleteraUsuario) >= 1 && (
          <Tab value={NavMenu.misOrdenes} label={NavMenu.misOrdenes} />
        )}
        {gestorBilletera.verificarRol(getBilleteraUsuario) >= 1 && (
          <Tab value={NavMenu.miHistorial} label={NavMenu.miHistorial} />
        )}
      </Tabs>
      <Autocomplete
        id="token-select-venta"
        sx={{ width: 300 }}
        options={getTokens}
        getOptionDisabled={(option: Tokens) =>
          option === getTokenCompra ||
          //option.ticker === getBuscarForm.tokenCompra?.ticker ||
          (option.estado == Estados.suspendido &&
            getTabValue != NavMenu.miHistorial)
        }
        value={getTokenVenta}
        // value={getBuscarForm.tokenVenta}
        onChange={handleChangeTokenVenta}
        autoHighlight
        getOptionLabel={(option: Tokens) => option.ticker}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://aux3.iconspalace.com/uploads/673308030241043147.png`}
              srcSet={`https://aux3.iconspalace.com/uploads/673308030241043147.png 2x`}
              alt=""
            />
            {option.ticker}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Token a Cambiar"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
      <Button variant="contained" onClick={handleChangeTokenButton}>
        Cambiar
      </Button>
      {/*aqui deberia ir un boton de intercambio o una imagen de dos flechitas*/}
      <Autocomplete
        id="token-select-compra"
        sx={{ width: 300 }}
        options={getTokens}
        getOptionDisabled={(option) =>
          option === getTokenVenta ||
          // option === getBuscarForm.tokenVenta ||
          (option.estado == Estados.suspendido &&
            getTabValue != NavMenu.miHistorial)
        }
        value={getTokenCompra}
        // value={getBuscarForm.tokenCompra}
        onChange={handleChangeTokenCompra}
        autoHighlight
        getOptionLabel={(option: any) => option.ticker}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://aux3.iconspalace.com/uploads/673308030241043147.png`}
              srcSet={`https://aux3.iconspalace.com/uploads/673308030241043147.png 2x`}
              alt=""
            />
            {option.ticker}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Token a Recibir"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
      <TextField
        id="txt-monto-venta"
        label="Monto de Venta"
        variant="outlined"
        value={getMontoVenta}
        // value={getBuscarForm.montoVenta}
        onChange={(e) => setMontoVenta(BigInt(e.target.value))}
      />
      <TextField
        id="txt-monto-compra"
        label="Monto de Compra"
        variant="outlined"
        value={getMontoCompra}
        // value={getBuscarForm.montoCompra}
        onChange={(e) => setMontoCompra(BigInt(e.target.value))}
      />
      <Select
        labelId="simple-select-label-tipo-orden"
        id="simple-select-tipo-orden"
        value={getTipoOrden.toString()}
        // value={getBuscarForm.tipoOrden?.toString()}
        label="Tipo Orden"
        onChange={handleChangeSelect}
      >
        <MenuItem value={TiposOrdenes.todas}>Todas</MenuItem>
        <MenuItem value={TiposOrdenes.compraVenta}>Compra-Venta</MenuItem>
        <MenuItem value={TiposOrdenes.intercambio}>Intercambio</MenuItem>
      </Select>
      <Button variant="contained">Buscar</Button>
      {/* Tabla de ordenes */}
      {/* Tipo | Cantidad | Token | Cantidad | Token | Fecha */}
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columnas.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 0, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {getOrdenes
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.idOrden + Date.now() + Date.now()}
                    >
                      <TableCell key={row.idOrden + Date.now()} align="left">
                        {row.idOrden}
                      </TableCell>
                      <TableCell key={row.tipo + Date.now()} align="left">
                        {TiposOrdenes[row.tipo]}
                      </TableCell>
                      <TableCell
                        key={row.idOrden + row.tokenVenta.ticker + Date.now()}
                        align="left"
                      >
                        {row.montoVenta.toString()}
                      </TableCell>
                      <TableCell
                        key={row.tokenVenta.ticker + Date.now()}
                        align="left"
                      >
                        {row.tokenVenta.ticker}
                      </TableCell>
                      <TableCell
                        key={row.idOrden + row.tokenCompra.ticker + Date.now()}
                        align="left"
                      >
                        {row.montoCompra.toString()}
                      </TableCell>
                      <TableCell
                        key={row.tokenCompra.ticker + Date.now()}
                        align="left"
                      >
                        {row.tokenCompra.ticker}
                      </TableCell>
                      <TableCell
                        key={row.idOrden + 'acciones' + Date.now()}
                        align="left"
                      >
                        <ButtonGroup>
                          {row.vendedor.direccion ==
                            getBilleteraUsuario?.direccion &&
                            row.fechaEjecucion == undefined && (
                              <Button
                                onClick={() => handleCancelarOrden(row.idOrden)}
                              >
                                Cancelar
                              </Button>
                            )}
                          {row.fechaEjecucion == undefined &&
                            row.vendedor.direccion !=
                              getBilleteraUsuario?.direccion && (
                              <Button
                                onClick={() =>
                                  handleEjecutarOrden(
                                    row.tipo,
                                    row.idOrden,
                                    getBilleteraUsuario
                                  )
                                }
                              >
                                Ejecutar
                              </Button>
                            )}
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={getOrdenes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}
