import { RolesBilleteras } from '@lib/types.d'
import Billeteras from '@models/Billeteras'
import { listaBilleteras } from 'scripts/modelos'

export default class GestorBilleteras {
  private _billeteras: Array<Billeteras>
  private static _gestor: GestorBilleteras

  constructor() {
    this._billeteras = []
  }

  public static instanciar(): GestorBilleteras {
    if (!this._gestor) {
      GestorBilleteras._gestor = new GestorBilleteras()
    }

    return GestorBilleteras._gestor
  }

  nuevo(direccion: string): Billeteras {
    const obj = new Billeteras(direccion)
    this._billeteras.concat([obj])
    return obj
  }

  modificar(obj: Billeteras): boolean {
    this._billeteras[0] = obj
    return true
  }

  buscar(billetera: string, rol: RolesBilleteras): Billeteras[] {
    return listaBilleteras
      .filter(
        (b: Billeteras) =>
          (b.direccion == billetera || billetera == '') &&
          (rol == RolesBilleteras.usuario
            ? b.rol == rol
            : b.rol > RolesBilleteras.usuario)
      )
      .sort((a: Billeteras, b: Billeteras) => {
        return a.rol > b.rol
          ? -1
          : a.rol < b.rol
          ? 1
          : a.estado > b.estado
          ? 1
          : a.estado < b.estado
          ? -1
          : 0
      })
  }

  /**
   * Verifica si una billetera tiene rol Propietario o Administrador
   * Devuelve el rol que posee la billetera en cuestion, en caso de no tener
   * un rol o poseer un rol incorrecto, devuelve 1 (rol de Usuario)
   */
  verificarRol(billetera: Billeteras | undefined): RolesBilleteras {
    return billetera == undefined
      ? 0
      : billetera?.rol == RolesBilleteras.administrador ||
        billetera?.rol == RolesBilleteras.propietario
      ? billetera?.rol
      : RolesBilleteras.usuario
  }
}
