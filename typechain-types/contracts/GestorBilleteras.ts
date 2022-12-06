/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace Datos {
  export type OrdenStruct = {
    idOrden: PromiseOrValue<BytesLike>;
    siguienteOrdenActiva: PromiseOrValue<BytesLike>;
    anteriorOrdenActiva: PromiseOrValue<BytesLike>;
    siguienteOrdenGemela: PromiseOrValue<BytesLike>;
    anteriorOrdenGemela: PromiseOrValue<BytesLike>;
    vendedor: PromiseOrValue<string>;
    comprador: PromiseOrValue<string>;
    montoVenta: PromiseOrValue<BigNumberish>;
    montoCompra: PromiseOrValue<BigNumberish>;
    fechaCreacion: PromiseOrValue<BigNumberish>;
    fechaFinalizacion: PromiseOrValue<BigNumberish>;
    estado: PromiseOrValue<BigNumberish>;
    tipo: PromiseOrValue<BigNumberish>;
    existe: PromiseOrValue<boolean>;
    tokenCompra: PromiseOrValue<string>;
    tokenVenta: PromiseOrValue<string>;
  };

  export type OrdenStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    boolean,
    string,
    string
  ] & {
    idOrden: string;
    siguienteOrdenActiva: string;
    anteriorOrdenActiva: string;
    siguienteOrdenGemela: string;
    anteriorOrdenGemela: string;
    vendedor: string;
    comprador: string;
    montoVenta: BigNumber;
    montoCompra: BigNumber;
    fechaCreacion: BigNumber;
    fechaFinalizacion: BigNumber;
    estado: number;
    tipo: number;
    existe: boolean;
    tokenCompra: string;
    tokenVenta: string;
  };

  export type BilleteraStruct = {
    direccion: PromiseOrValue<string>;
    indiceAdmin: PromiseOrValue<BigNumberish>;
    indiceBloqueado: PromiseOrValue<BigNumberish>;
    rol: PromiseOrValue<BigNumberish>;
    estado: PromiseOrValue<BigNumberish>;
    existe: PromiseOrValue<boolean>;
    ordenes: PromiseOrValue<string>[];
  };

  export type BilleteraStructOutput = [
    string,
    BigNumber,
    BigNumber,
    number,
    number,
    boolean,
    string[]
  ] & {
    direccion: string;
    indiceAdmin: BigNumber;
    indiceBloqueado: BigNumber;
    rol: number;
    estado: number;
    existe: boolean;
    ordenes: string[];
  };
}

export interface GestorBilleterasInterface extends utils.Interface {
  functions: {
    "bloquearBilletera(address)": FunctionFragment;
    "desbloquearBilletera(address)": FunctionFragment;
    "emptyString(string)": FunctionFragment;
    "hacerAdministrador(address)": FunctionFragment;
    "listarAdministradores()": FunctionFragment;
    "listarBilleterasBloqueadas()": FunctionFragment;
    "ordenes()": FunctionFragment;
    "plataforma()": FunctionFragment;
    "quitarAdministrador(address)": FunctionFragment;
    "tokensRegistrados(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bloquearBilletera"
      | "desbloquearBilletera"
      | "emptyString"
      | "hacerAdministrador"
      | "listarAdministradores"
      | "listarBilleterasBloqueadas"
      | "ordenes"
      | "plataforma"
      | "quitarAdministrador"
      | "tokensRegistrados"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bloquearBilletera",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "desbloquearBilletera",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "emptyString",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hacerAdministrador",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "listarAdministradores",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listarBilleterasBloqueadas",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ordenes", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "plataforma",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "quitarAdministrador",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensRegistrados",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "bloquearBilletera",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "desbloquearBilletera",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emptyString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hacerAdministrador",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listarAdministradores",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listarBilleterasBloqueadas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ordenes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "plataforma", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quitarAdministrador",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensRegistrados",
    data: BytesLike
  ): Result;

  events: {
    "NuevaOrden(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NuevaOrden"): EventFragment;
}

export interface NuevaOrdenEventObject {
  respuesta: Datos.OrdenStructOutput;
}
export type NuevaOrdenEvent = TypedEvent<
  [Datos.OrdenStructOutput],
  NuevaOrdenEventObject
>;

export type NuevaOrdenEventFilter = TypedEventFilter<NuevaOrdenEvent>;

export interface GestorBilleteras extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GestorBilleterasInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bloquearBilletera(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    desbloquearBilletera(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    emptyString(
      _string: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    hacerAdministrador(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    listarAdministradores(
      overrides?: CallOverrides
    ): Promise<[Datos.BilleteraStructOutput[]]>;

    listarBilleterasBloqueadas(
      overrides?: CallOverrides
    ): Promise<[Datos.BilleteraStructOutput[]]>;

    ordenes(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        cantidadTotal: BigNumber;
        cantidadActivas: BigNumber;
        ultimaOrdenActiva: string;
      }
    >;

    plataforma(
      overrides?: CallOverrides
    ): Promise<
      [number, string, BigNumber] & {
        estado: number;
        propietario: string;
        montoMinimoUSD: BigNumber;
      }
    >;

    quitarAdministrador(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokensRegistrados(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number, boolean] & {
        ticker: string;
        contrato: string;
        oraculo: string;
        decimales: number;
        estado: number;
        existe: boolean;
      }
    >;
  };

  bloquearBilletera(
    _billetera: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  desbloquearBilletera(
    _billetera: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  emptyString(
    _string: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hacerAdministrador(
    _billetera: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  listarAdministradores(
    overrides?: CallOverrides
  ): Promise<Datos.BilleteraStructOutput[]>;

  listarBilleterasBloqueadas(
    overrides?: CallOverrides
  ): Promise<Datos.BilleteraStructOutput[]>;

  ordenes(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string] & {
      cantidadTotal: BigNumber;
      cantidadActivas: BigNumber;
      ultimaOrdenActiva: string;
    }
  >;

  plataforma(
    overrides?: CallOverrides
  ): Promise<
    [number, string, BigNumber] & {
      estado: number;
      propietario: string;
      montoMinimoUSD: BigNumber;
    }
  >;

  quitarAdministrador(
    _billetera: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokensRegistrados(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, number, number, boolean] & {
      ticker: string;
      contrato: string;
      oraculo: string;
      decimales: number;
      estado: number;
      existe: boolean;
    }
  >;

  callStatic: {
    bloquearBilletera(
      _billetera: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    desbloquearBilletera(
      _billetera: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    emptyString(
      _string: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hacerAdministrador(
      _billetera: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    listarAdministradores(
      overrides?: CallOverrides
    ): Promise<Datos.BilleteraStructOutput[]>;

    listarBilleterasBloqueadas(
      overrides?: CallOverrides
    ): Promise<Datos.BilleteraStructOutput[]>;

    ordenes(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        cantidadTotal: BigNumber;
        cantidadActivas: BigNumber;
        ultimaOrdenActiva: string;
      }
    >;

    plataforma(
      overrides?: CallOverrides
    ): Promise<
      [number, string, BigNumber] & {
        estado: number;
        propietario: string;
        montoMinimoUSD: BigNumber;
      }
    >;

    quitarAdministrador(
      _billetera: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokensRegistrados(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number, boolean] & {
        ticker: string;
        contrato: string;
        oraculo: string;
        decimales: number;
        estado: number;
        existe: boolean;
      }
    >;
  };

  filters: {
    "NuevaOrden(tuple)"(respuesta?: null): NuevaOrdenEventFilter;
    NuevaOrden(respuesta?: null): NuevaOrdenEventFilter;
  };

  estimateGas: {
    bloquearBilletera(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    desbloquearBilletera(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    emptyString(
      _string: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hacerAdministrador(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    listarAdministradores(overrides?: CallOverrides): Promise<BigNumber>;

    listarBilleterasBloqueadas(overrides?: CallOverrides): Promise<BigNumber>;

    ordenes(overrides?: CallOverrides): Promise<BigNumber>;

    plataforma(overrides?: CallOverrides): Promise<BigNumber>;

    quitarAdministrador(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokensRegistrados(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bloquearBilletera(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    desbloquearBilletera(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    emptyString(
      _string: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hacerAdministrador(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    listarAdministradores(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listarBilleterasBloqueadas(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ordenes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    plataforma(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quitarAdministrador(
      _billetera: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokensRegistrados(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
