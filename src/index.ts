
const Run = require('run-sdk')

const blockchain = new Run.plugins.WhatsOnChain({ network: 'main' })

const run = new Run({ blockchain })

export async function broadcast(txhex: string): Promise<string> {

  return run.blockchain.broadcast(txhex)

}

