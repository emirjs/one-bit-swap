import Billeteras from '@lib/models/Billeteras'
import Tokens from '@lib/models/Tokens'
import { EstadosOrdenes, TiposOrdenes } from '@lib/types.d'
import { listaTodasOrdenes } from 'scripts/modelos'
import Ordenes from '../models/Ordenes'
export default class GestorOrdenes {
  private _ordenes: Array<Ordenes>
  private static _gestor: GestorOrdenes

  constructor() {
    this._ordenes = []
  }

  public static instanciar(): GestorOrdenes {
    if (!this._gestor) {
      GestorOrdenes._gestor = new GestorOrdenes()
    }

    return GestorOrdenes._gestor
  }

  nuevo(obj: Ordenes): boolean {
    this._ordenes.concat([obj])
    return true
  }

  modificar(obj: Ordenes): boolean {
    this._ordenes[0] = obj
    return true
  }

  buscar(
    billetera?: Billeteras,
    tipo?: TiposOrdenes,
    tokenCompra?: Tokens,
    tokenVenta?: Tokens,
    montoCompra?: bigint,
    montoVenta?: bigint,
    estado?: EstadosOrdenes,
    fechaInicio?: string,
    fechaFin?: string
  ) {
    // todo: aqui hay que llamar al contrato
    const data = listaTodasOrdenes.filter((o: Ordenes) => {
      return (
        (o.vendedor.direccion == billetera?.direccion || billetera == null) &&
        (o.tipo == tipo || tipo == null) &&
        (o.tokenCompra.ticker == tokenCompra?.ticker || tokenCompra == null) &&
        (o.tokenVenta.ticker == tokenVenta?.ticker || tokenVenta == null) &&
        (o.montoCompra == montoCompra || montoCompra == null) &&
        (o.montoVenta == montoVenta || montoVenta == null) &&
        (o.estado == estado || estado == null)
      )
    })
    return data
  }
}
