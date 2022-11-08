/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace Pruebas {
  export type TipoStruct = {
    valor: PromiseOrValue<BigNumberish>;
    existe: PromiseOrValue<boolean>;
  };

  export type TipoStructOutput = [BigNumber, boolean] & {
    valor: BigNumber;
    existe: boolean;
  };
}

export interface PruebasInterface extends utils.Interface {
  functions: {
    "getArray()": FunctionFragment;
    "listar(bool)": FunctionFragment;
    "tamanio()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getArray" | "listar" | "tamanio"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "getArray", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "listar",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: "tamanio", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getArray", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tamanio", data: BytesLike): Result;

  events: {};
}

export interface Pruebas extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PruebasInterface;

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
    getArray(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    listar(
      _soloActivos: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[Pruebas.TipoStructOutput[]]>;

    tamanio(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getArray(overrides?: CallOverrides): Promise<BigNumber[]>;

  listar(
    _soloActivos: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<Pruebas.TipoStructOutput[]>;

  tamanio(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getArray(overrides?: CallOverrides): Promise<BigNumber[]>;

    listar(
      _soloActivos: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<Pruebas.TipoStructOutput[]>;

    tamanio(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getArray(overrides?: CallOverrides): Promise<BigNumber>;

    listar(
      _soloActivos: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tamanio(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getArray(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listar(
      _soloActivos: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tamanio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
