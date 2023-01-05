import Tokens from '../models/Tokens'
import { listaTokens } from './../../scripts/modelos'
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

  buscar(ticker: string): Tokens[] {
    return listaTokens.filter((el) => el.ticker == ticker || ticker == '')
  }
}
