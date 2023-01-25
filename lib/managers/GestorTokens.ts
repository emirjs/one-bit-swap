import Tokens from '../models/Tokens'
import { listaTokens } from './../../scripts/modelos'
import { Estados } from './../types.d'
export default class GestorTokens {
  private _tokens: Array<Tokens>
  private static _gestor: GestorTokens

  constructor() {
    this._tokens = []
  }

  public static instanciar(): GestorTokens {
    if (!this._gestor) {
      GestorTokens._gestor = new GestorTokens()
    }

    return GestorTokens._gestor
  }

  nuevo(obj: Tokens): boolean {
    this._tokens.concat([obj])
    return true
  }

  modificar(obj: Tokens): boolean {
    this._tokens[0] = obj
    return true
  }

  buscar(ticker: string, incluyeBajas: Estados): Tokens[] {
    return listaTokens
      .filter(
        (el: Tokens) =>
          (el.ticker.toLowerCase().includes(ticker) || ticker == '') &&
          (el.estado == incluyeBajas || incluyeBajas == Estados.todos)
      )
      .sort((a: Tokens, b: Tokens) => {
        return a.estado < b.estado ? -1 : a.estado == b.estado ? 0 : 1
      })
  }

  // activarToken(ticker: string): boolean {
  //   // modificar para traer de la blockchain
  //   for (const token of listaTokens) {
  //     if (token.ticker == ticker) {
  //       token.estado = Estados.activo
  //       return true
  //     }
  //   }
  //   return false
  // }

  // suspenderToken(ticker: string): boolean {
  //   // modificar para traer de la blockchain
  //   for (const token of listaTokens) {
  //     if (token.ticker == ticker) {
  //       token.estado = Estados.suspendido
  //       return true
  //     }
  //   }
  //   return false
  // }
}
