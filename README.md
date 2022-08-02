# powco

`npm install --save powco`

## Broadcast Transactions

```
import { broadcast } from 'powco'

const txid = await broadcast(tx_hex)

```

## Stream Boostpow Transactions

```
import { stream } from 'powco'

import { BoostPowJob, BoostPowJobProof } from 'boostpow'

stream.on('boostpow.job', async (job: BoostPowJob) {

	// do something with newly created job, like mine it.

})

stream.on('boostpow.proof', async (proof: BoostPowJobProof) {
	
	// new proof of work was just published

})

stream.on('close', () => {

  log.info('powco.stream.closed')

})

stream.close()

```