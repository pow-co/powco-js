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

