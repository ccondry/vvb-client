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
describe(`Test VVB REST API - `, () => {
  // list all NLP accounts
  it(`list NLP accounts`, async function () {
    const response = await vvb.cva.nlp.listServiceAccounts()
    // parse response body
    const json = await response.json()
    // check response good or bad
    if (response.ok) {
      // const names = json.serviceAccounts.map(account => {
      //   return account.name
      // })
      // console.log(names)
      return response
    } else {
      // bad response
      let message = 'could not parse response message'
      // try to parse the error message details
      try {
        message = json.apiError[0].errorMessage
      } catch (e) {
        // continue
      }
      throw Error(`${response.status} ${response.statusText} - ${message}`)
    }
  })

  // create NLP account
  it(`create an NLP account`, async function () {
    const response = await vvb.cva.nlp.createServiceAccount(cache)
    // check response good or bad
    if (response.ok) {
      // console.log(json)
      return response
    } else {
      // bad response
      let message = 'could not parse error response'
      // try to parse the error message details
      try {
        const json = await response.json()
        // console.log(json)
        message = json.apiError[0].errorMessage
        // const text = await response.text()
        // message = text
      } catch (e) {
        // continue
      }
      throw Error(`${response.status} ${response.statusText} - ${message}`)
    }
  })

  // get NLP account
  it(`get an NLP account`, async function () {
    const response = await vvb.cva.nlp.getServiceAccount(cache.name)
    // check response good or bad
    if (response.ok) {
      const json = await response.json()
      // console.log(json)
      return response
    } else {
      // bad response
      let message = 'could not parse error response'
      // try to parse the error message details
      try {
        const json = await response.json()
        // console.log(json)
        message = json.apiError[0].errorMessage
        // const text = await response.text()
        // message = text
      } catch (e) {
        // continue
      }
      throw Error(`${response.status} ${response.statusText} - ${message}`)
    }
  })

  // create ASR account
  it(`create an ASR account`, async function () {
    const response = await vvb.cva.asr.createServiceAccount(cache)
    // check response good or bad
    if (response.ok) {
      // console.log(json)
      return response
    } else {
      // bad response
      let message = 'could not parse error response'
      // try to parse the error message details
      try {
        const json = await response.json()
        // console.log(json)
        message = json.apiError[0].errorMessage
        // const text = await response.text()
        // message = text
      } catch (e) {
        // continue
      }
      throw Error(`${response.status} ${response.statusText} - ${message}`)
    }
  })

  // create TTS account
  it(`create an TTS account`, async function () {
    const response = await vvb.cva.tts.createServiceAccount(cache)
    // check response good or bad
    if (response.ok) {
      // console.log(json)
      return response
    } else {
      // bad response
      let message = 'could not parse error response'
      // try to parse the error message details
      try {
        const json = await response.json()
        // console.log(json)
        message = json.apiError[0].errorMessage
        // const text = await response.text()
        // message = text
      } catch (e) {
        // continue
      }
      throw Error(`${response.status} ${response.statusText} - ${message}`)
    }
  })

  // update NLP account
  it(`update an NLP account`, async function () {
    const response = await vvb.cva.nlp.updateServiceAccount(cache)
    // check response good or bad
    if (response.ok) {
      // console.log(json)
      return response
    } else {
      // bad response
      let message = 'could not parse error response'
      // try to parse the error message details
      try {
        const json = await response.json()
        // console.log(json)
        message = json.apiError[0].errorMessage
        // const text = await response.text()
        // message = text
      } catch (e) {
        // continue
      }
      throw Error(`${response.status} ${response.statusText} - ${message}`)
    }
  })

  // delete NLP account
  it(`delete an NLP account`, async function () {
    const response = await vvb.cva.nlp.deleteServiceAccount(cache.name)
    // parse response body
    // check response good or bad
    if (response.ok) {
      // console.log(json)
      return response
    } else {
      // bad response
      let message = 'could not parse response message'
      // try to parse the error message details
      try {
        const json = await response.json()
        console.log('json', json)
        message = json.apiError[0].errorMessage
      } catch (e) {
        try {
          const text = await response.text()
          console.log('text', text)
          message = text
        } catch (e2) {
          // continue
        }
      }
      throw Error(`${response.status} ${response.statusText} - ${message}`)
    }
  })

})
