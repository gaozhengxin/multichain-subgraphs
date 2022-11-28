import {
  LogAnySwapIn as LogAnySwapInEvent,
  LogAnySwapOut as LogAnySwapOutEvent,
  LogAnySwapOut1 as LogAnySwapOut1Event,
  LogAnySwapTradeTokensForNative as LogAnySwapTradeTokensForNativeEvent,
  LogAnySwapTradeTokensForTokens as LogAnySwapTradeTokensForTokensEvent,
  LogChangeMPC as LogChangeMPCEvent,
  LogChangeRouter as LogChangeRouterEvent
} from "../generated/Contract/Contract"
import {
  LogAnySwapIn,
  LogAnySwapOut,
  LogAnySwapOut1,
  LogAnySwapTradeTokensForNative,
  LogAnySwapTradeTokensForTokens,
  LogChangeMPC,
  LogChangeRouter
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
}

export function handleLogAnySwapOut1(event: LogAnySwapOut1Event): void {
  let entity = new LogAnySwapOut1(
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
