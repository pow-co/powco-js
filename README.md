# powco

`npm install --save powco`

## Broadcast Transaction

```
import { broadcast } from 'powco'

const txid = await broadcast(txhex)

```

## Fetch Transaction

```
import { fetch } from 'powco'

const txhex = await fetch(txid)

```

## Stream Boostpow Transactions

```
import { Job, BoostPowJobProof as Proof } from 'boostpow'

import { stream } from 'powco'

stream.on('boostpow.job', (job: Job) => {

  console.log('boostpow.job', job)

})

stream.on('boostpow.proof', (proof: Proof) => {

  console.log('boostpow.proof', proof)

})

```

