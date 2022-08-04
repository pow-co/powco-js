
import  { EventEmitter } from 'events'

import { io } from "socket.io-client";

import { BoostPowJob, BoostPowJobProof } from 'boostpow'

const SOCKET_IO_URL = "wss://pow.co"
//const SOCKET_IO_URL = "ws://localhost:8005"

import { fetch } from './'

export class Socket {

  socket: any;

  emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmitter()
  }

  on(event, callback) {

    if (!this.socket) {
    
      this.socket = io(SOCKET_IO_URL);

    }

    if (event === 'boostpow.job') {

      this.socket.on('boostpow.job.created', async (payload) => {

        try {

          const hex = await fetch(payload.txid)

          const job: BoostPowJob | undefined = BoostPowJob.fromRawTransaction(hex)

          if (job) {

            callback(job)

          }

        } catch(error) {

          //console.error('boostpow.job.created', error)

        }

      })

    } else if (event === 'boostpow.proof') {

      this.socket.on('boostpow.proof.created', async (payload) => {

        try {

          const hex = await fetch(payload.spend_txid)

          const proof: BoostPowJobProof | undefined = BoostPowJobProof.fromRawTransaction(hex)

          if (proof) {

            callback(proof)

          }

        } catch(error) {

          //console.error('boostpow.proof.created', error)

        }

      })

    } else {

      this.socket.on(event, callback);

    }

    return this
  }

  off(event, callback) {

    this.socket.off(event, callback);

    return this
  }

  close() {
    this.socket.close()

    return this
  }
}

