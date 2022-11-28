import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  LogAnySwapIn,
  LogAnySwapOut,
  LogAnySwapOut1,
  LogAnySwapTradeTokensForNative,
  LogAnySwapTradeTokensForTokens,
  LogChangeMPC,
  LogChangeRouter
} from "../generated/Contract/Contract"

export function createLogAnySwapInEvent(
  txhash: Bytes,
  token: Address,
  to: Address,
  amount: BigInt,
  fromChainID: BigInt,
  toChainID: BigInt
): LogAnySwapIn {
  let logAnySwapInEvent = changetype<LogAnySwapIn>(newMockEvent())

  logAnySwapInEvent.parameters = new Array()

  logAnySwapInEvent.parameters.push(
    new ethereum.EventParam("txhash", ethereum.Value.fromFixedBytes(txhash))
  )
  logAnySwapInEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  logAnySwapInEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logAnySwapInEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  logAnySwapInEvent.parameters.push(
    new ethereum.EventParam(
      "fromChainID",
      ethereum.Value.fromUnsignedBigInt(fromChainID)
    )
  )
  logAnySwapInEvent.parameters.push(
    new ethereum.EventParam(
      "toChainID",
      ethereum.Value.fromUnsignedBigInt(toChainID)
    )
  )

  return logAnySwapInEvent
}

export function createLogAnySwapOutEvent(
  token: Address,
  from: Address,
  to: Address,
  amount: BigInt,
  fromChainID: BigInt,
  toChainID: BigInt
): LogAnySwapOut {
  let logAnySwapOutEvent = changetype<LogAnySwapOut>(newMockEvent())

  logAnySwapOutEvent.parameters = new Array()

  logAnySwapOutEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  logAnySwapOutEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  logAnySwapOutEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logAnySwapOutEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  logAnySwapOutEvent.parameters.push(
    new ethereum.EventParam(
      "fromChainID",
      ethereum.Value.fromUnsignedBigInt(fromChainID)
    )
  )
  logAnySwapOutEvent.parameters.push(
    new ethereum.EventParam(
      "toChainID",
      ethereum.Value.fromUnsignedBigInt(toChainID)
    )
  )

  return logAnySwapOutEvent
}

export function createLogAnySwapOut1Event(
  token: Address,
  from: Address,
  to: string,
  amount: BigInt,
  fromChainID: BigInt,
  toChainID: BigInt
): LogAnySwapOut1 {
  let logAnySwapOut1Event = changetype<LogAnySwapOut1>(newMockEvent())

  logAnySwapOut1Event.parameters = new Array()

  logAnySwapOut1Event.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  logAnySwapOut1Event.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  logAnySwapOut1Event.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromString(to))
  )
  logAnySwapOut1Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  logAnySwapOut1Event.parameters.push(
    new ethereum.EventParam(
      "fromChainID",
      ethereum.Value.fromUnsignedBigInt(fromChainID)
    )
  )
  logAnySwapOut1Event.parameters.push(
    new ethereum.EventParam(
      "toChainID",
      ethereum.Value.fromUnsignedBigInt(toChainID)
    )
  )

  return logAnySwapOut1Event
}

export function createLogAnySwapTradeTokensForNativeEvent(
  path: Array<Address>,
  from: Address,
  to: Address,
  amountIn: BigInt,
  amountOutMin: BigInt,
  fromChainID: BigInt,
  toChainID: BigInt
): LogAnySwapTradeTokensForNative {
  let logAnySwapTradeTokensForNativeEvent = changetype<
    LogAnySwapTradeTokensForNative
  >(newMockEvent())

  logAnySwapTradeTokensForNativeEvent.parameters = new Array()

  logAnySwapTradeTokensForNativeEvent.parameters.push(
    new ethereum.EventParam("path", ethereum.Value.fromAddressArray(path))
  )
  logAnySwapTradeTokensForNativeEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  logAnySwapTradeTokensForNativeEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logAnySwapTradeTokensForNativeEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  logAnySwapTradeTokensForNativeEvent.parameters.push(
    new ethereum.EventParam(
      "amountOutMin",
      ethereum.Value.fromUnsignedBigInt(amountOutMin)
    )
  )
  logAnySwapTradeTokensForNativeEvent.parameters.push(
    new ethereum.EventParam(
      "fromChainID",
      ethereum.Value.fromUnsignedBigInt(fromChainID)
    )
  )
  logAnySwapTradeTokensForNativeEvent.parameters.push(
    new ethereum.EventParam(
      "toChainID",
      ethereum.Value.fromUnsignedBigInt(toChainID)
    )
  )

  return logAnySwapTradeTokensForNativeEvent
}

export function createLogAnySwapTradeTokensForTokensEvent(
  path: Array<Address>,
  from: Address,
  to: Address,
  amountIn: BigInt,
  amountOutMin: BigInt,
  fromChainID: BigInt,
  toChainID: BigInt
): LogAnySwapTradeTokensForTokens {
  let logAnySwapTradeTokensForTokensEvent = changetype<
    LogAnySwapTradeTokensForTokens
  >(newMockEvent())

  logAnySwapTradeTokensForTokensEvent.parameters = new Array()

  logAnySwapTradeTokensForTokensEvent.parameters.push(
    new ethereum.EventParam("path", ethereum.Value.fromAddressArray(path))
  )
  logAnySwapTradeTokensForTokensEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  logAnySwapTradeTokensForTokensEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logAnySwapTradeTokensForTokensEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  logAnySwapTradeTokensForTokensEvent.parameters.push(
    new ethereum.EventParam(
      "amountOutMin",
      ethereum.Value.fromUnsignedBigInt(amountOutMin)
    )
  )
  logAnySwapTradeTokensForTokensEvent.parameters.push(
    new ethereum.EventParam(
      "fromChainID",
      ethereum.Value.fromUnsignedBigInt(fromChainID)
    )
  )
  logAnySwapTradeTokensForTokensEvent.parameters.push(
    new ethereum.EventParam(
      "toChainID",
      ethereum.Value.fromUnsignedBigInt(toChainID)
    )
  )

  return logAnySwapTradeTokensForTokensEvent
}

export function createLogChangeMPCEvent(
  oldMPC: Address,
  newMPC: Address,
  effectiveTime: BigInt,
  chainID: BigInt
): LogChangeMPC {
  let logChangeMpcEvent = changetype<LogChangeMPC>(newMockEvent())

  logChangeMpcEvent.parameters = new Array()

  logChangeMpcEvent.parameters.push(
    new ethereum.EventParam("oldMPC", ethereum.Value.fromAddress(oldMPC))
  )
  logChangeMpcEvent.parameters.push(
    new ethereum.EventParam("newMPC", ethereum.Value.fromAddress(newMPC))
  )
  logChangeMpcEvent.parameters.push(
    new ethereum.EventParam(
      "effectiveTime",
      ethereum.Value.fromUnsignedBigInt(effectiveTime)
    )
  )
  logChangeMpcEvent.parameters.push(
    new ethereum.EventParam(
      "chainID",
      ethereum.Value.fromUnsignedBigInt(chainID)
    )
  )

  return logChangeMpcEvent
}

export function createLogChangeRouterEvent(
  oldRouter: Address,
  newRouter: Address,
  chainID: BigInt
): LogChangeRouter {
  let logChangeRouterEvent = changetype<LogChangeRouter>(newMockEvent())

  logChangeRouterEvent.parameters = new Array()

  logChangeRouterEvent.parameters.push(
    new ethereum.EventParam("oldRouter", ethereum.Value.fromAddress(oldRouter))
  )
  logChangeRouterEvent.parameters.push(
    new ethereum.EventParam("newRouter", ethereum.Value.fromAddress(newRouter))
  )
  logChangeRouterEvent.parameters.push(
    new ethereum.EventParam(
      "chainID",
      ethereum.Value.fromUnsignedBigInt(chainID)
    )
  )

  return logChangeRouterEvent
}
