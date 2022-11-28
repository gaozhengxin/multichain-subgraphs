import {
  LogAnySwapIn as LogAnySwapInEvent,
  LogAnySwapOut as LogAnySwapOutEvent,
  LogChangeMPC as LogChangeMPCEvent,
  LogChangeRouter as LogChangeRouterEvent
} from "../generated/Contract/Contract"
import {
  LogAnySwapIn,
  LogAnySwapOut,
  LogChangeMPC,
  LogChangeRouter,
  TotalSwapIn,
  TotalSwapOut
} from "../generated/schema"

export function handleLogAnySwapIn(event: LogAnySwapInEvent): void {
  let entity = new LogAnySwapIn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.txhash = event.params.txhash
  entity.token = event.params.token
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.fromChainID = event.params.fromChainID
  entity.toChainID = event.params.toChainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let totalSwapIn = TotalSwapIn.load(event.params.token)
  if (totalSwapIn === null) {
    totalSwapIn = new TotalSwapIn(event.params.token)
  }
  totalSwapIn.amount = totalSwapIn.amount.plus(entity.amount)
  totalSwapIn.blockNumber = event.block.number
  totalSwapIn.blockTimestamp = event.block.timestamp

  totalSwapIn.save()
}

export function handleLogAnySwapOut(event: LogAnySwapOutEvent): void {
  let entity = new LogAnySwapOut(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.fromChainID = event.params.fromChainID
  entity.toChainID = event.params.toChainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let totalSwapOut = TotalSwapOut.load(event.params.token)
  if (totalSwapOut === null) {
    totalSwapOut = new TotalSwapOut(event.params.token)
  }
  totalSwapOut.amount = totalSwapOut.amount.plus(entity.amount)
  totalSwapOut.blockNumber = event.block.number
  totalSwapOut.blockTimestamp = event.block.timestamp

  totalSwapOut.save()
}

/*export function handleLogAnySwapTradeTokensForNative(
  event: LogAnySwapTradeTokensForNativeEvent
): void {
  let entity = new LogAnySwapTradeTokensForNative(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.path = event.params.path
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amountIn = event.params.amountIn
  entity.amountOutMin = event.params.amountOutMin
  entity.fromChainID = event.params.fromChainID
  entity.toChainID = event.params.toChainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}*/

/*export function handleLogAnySwapTradeTokensForTokens(
  event: LogAnySwapTradeTokensForTokensEvent
): void {
  let entity = new LogAnySwapTradeTokensForTokens(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.path = event.params.path
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amountIn = event.params.amountIn
  entity.amountOutMin = event.params.amountOutMin
  entity.fromChainID = event.params.fromChainID
  entity.toChainID = event.params.toChainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}*/

export function handleLogChangeMPC(event: LogChangeMPCEvent): void {
  let entity = new LogChangeMPC(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldMPC = event.params.oldMPC
  entity.newMPC = event.params.newMPC
  entity.effectiveTime = event.params.effectiveTime
  entity.chainID = event.params.chainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLogChangeRouter(event: LogChangeRouterEvent): void {
  let entity = new LogChangeRouter(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldRouter = event.params.oldRouter
  entity.newRouter = event.params.newRouter
  entity.chainID = event.params.chainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
