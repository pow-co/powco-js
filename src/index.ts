
const Run = require('run-sdk')

const blockchain = new Run.plugins.WhatsOnChain({ network: 'main' })

const run = new Run({ blockchain })

export async function broadcast(txhex: string): Promise<string> {

  return run.blockchain.broadcast(txhex)

}

export async function fetch(txid: string): Promise<string> {

  return run.blockchain.fetch(txid)

}

import { EventEmitter } from 'events'

import { Socket } from './socket'

export const stream = new Socket();

