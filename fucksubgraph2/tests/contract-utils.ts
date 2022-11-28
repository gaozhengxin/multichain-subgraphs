import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  LogChangeDCRMOwner,
  LogSwapin,
  LogSwapout,
  Transfer
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createLogChangeDCRMOwnerEvent(
  oldOwner: Address,
  newOwner: Address,
  effectiveTime: BigInt
): LogChangeDCRMOwner {
  let logChangeDcrmOwnerEvent = changetype<LogChangeDCRMOwner>(newMockEvent())

  logChangeDcrmOwnerEvent.parameters = new Array()

  logChangeDcrmOwnerEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  logChangeDcrmOwnerEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )
  logChangeDcrmOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "effectiveTime",
      ethereum.Value.fromUnsignedBigInt(effectiveTime)
    )
  )

  return logChangeDcrmOwnerEvent
}

export function createLogSwapinEvent(
  txhash: Bytes,
  account: Address,
  amount: BigInt
): LogSwapin {
  let logSwapinEvent = changetype<LogSwapin>(newMockEvent())

  logSwapinEvent.parameters = new Array()

  logSwapinEvent.parameters.push(
    new ethereum.EventParam("txhash", ethereum.Value.fromFixedBytes(txhash))
  )
  logSwapinEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  logSwapinEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return logSwapinEvent
}

export function createLogSwapoutEvent(
  account: Address,
  bindaddr: Address,
  amount: BigInt
): LogSwapout {
  let logSwapoutEvent = changetype<LogSwapout>(newMockEvent())

  logSwapoutEvent.parameters = new Array()

  logSwapoutEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  logSwapoutEvent.parameters.push(
    new ethereum.EventParam("bindaddr", ethereum.Value.fromAddress(bindaddr))
  )
  logSwapoutEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return logSwapoutEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
