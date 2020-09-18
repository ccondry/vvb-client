// this library
const client = require('../src')
// load .env config
require('dotenv').config()

// credentials and URL for this library to connect to
const url = process.env.URL
const username = process.env.USERNAME
const password = process.env.PASSWORD

// this library
const vvb = new client({
  url,
  username,
  password
})

// test data
const cache = {
  name: 'mocha-test-1',
  description: 'ccondry mocha test',
  key: 'test'
}
// console.log(cache)

// test NLP account REST APIs
describe(`Test CVA NLP REST APIs - `, () => {
  // list all NLP accounts
  it(`list service accounts`, async function () {
    await vvb.cva.nlp.listServiceAccounts()
  })
  
  // create NLP account
  it(`create service account`, async function () {
    await vvb.cva.nlp.createServiceAccount(cache)
  })
  
  // update NLP account
  it(`update service account`, async function () {
    await vvb.cva.nlp.updateServiceAccount(cache)
  })
  
  // get one NLP account
  it(`get service account`, async function () {
    await vvb.cva.nlp.listServiceAccounts(cache.name)
  })

  // delete NLP account
  it(`delete service account`, async function () {
    await vvb.cva.nlp.deleteServiceAccount(cache.name)
  })
})

// test ASR account REST APIs
describe(`Test CVA ASR REST APIs - `, () => {
  // list all ASR accounts
  it(`list service accounts`, async function () {
    await vvb.cva.asr.listServiceAccounts()
  })

  // create ASR account
  it(`create service account`, async function () {
    await vvb.cva.asr.createServiceAccount(cache)
  })

  // update ASR account
  it(`update service account`, async function () {
    await vvb.cva.asr.updateServiceAccount(cache)
  })

  // get one ASR account
  it(`get service account`, async function () {
    await vvb.cva.asr.listServiceAccounts(cache.name)
  })
  
  // delete ASR account
  it(`delete service account`, async function () {
    await vvb.cva.asr.deleteServiceAccount(cache.name)
  })
})

// test TTS account REST APIs
describe(`Test CVA TTS REST APIs - `, () => {
  // list all TTS accounts
  it(`list service accounts`, async function () {
    await vvb.cva.tts.listServiceAccounts()
  })

  // create TTS account
  it(`create service account`, async function () {
    await vvb.cva.tts.createServiceAccount(cache)
  })

  // update TTS account
  it(`update service account`, async function () {
    await vvb.cva.tts.updateServiceAccount(cache)
  })

  // get one TTS account
  it(`get service account`, async function () {
    await vvb.cva.tts.listServiceAccounts(cache.name)
  })
  
  // delete TTS account
  it(`delete service account`, async function () {
    await vvb.cva.tts.deleteServiceAccount(cache.name)
  })
})
