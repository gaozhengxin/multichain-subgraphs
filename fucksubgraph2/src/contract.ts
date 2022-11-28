import {
  Approval as ApprovalEvent,
  LogChangeDCRMOwner as LogChangeDCRMOwnerEvent,
  LogSwapin as LogSwapinEvent,
  LogSwapout as LogSwapoutEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  LogChangeDCRMOwner,
  LogSwapin,
  LogSwapout,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLogChangeDCRMOwner(event: LogChangeDCRMOwnerEvent): void {
  let entity = new LogChangeDCRMOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner
  entity.effectiveTime = event.params.effectiveTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLogSwapin(event: LogSwapinEvent): void {
  let entity = new LogSwapin(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.txhash = event.params.txhash
  entity.account = event.params.account
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLogSwapout(event: LogSwapoutEvent): void {
  let entity = new LogSwapout(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.bindaddr = event.params.bindaddr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
