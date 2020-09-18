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
  name: 'fiery-inferno-5992',
  // description: 'ccondry 0325',
  key: require('../key.json')
}
// console.log(cache)

// test NLP account REST APIs
describe(`Test VVB REST API - `, () => {
  // list all NLP accounts
  it(`list NLP accounts`, async function () {
    const response = await vvb.listNlpAccounts()
    // parse response body
    const json = await response.json()
    // check response good or bad
    if (response.ok) {
      const names = json.serviceAccounts.map(account => {
        return account.name
      })
      console.log(names)
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
    const response = await vvb.createNlpAccount(cache)
    // check response good or bad
    if (response.ok) {
      // console.log(json)
      return response
    } else {
      // bad response
      let message = 'could not parse error response'
      // try to parse the error message details
      try {
        // const json = await response.json()
        // console.log(json)
        // message = json.apiError[0].errorMessage
        const text = await response.text()
        message = text
      } catch (e) {
        // continue
      }
      throw Error(`${response.status} ${response.statusText} - ${message}`)
    }
  })

  // delete NLP account
  it(`delete an NLP account`, async function () {
    const response = await vvb.deleteNlpAccount(cache.name)
    // parse response body
    // check response good or bad
    if (response.ok) {
      // console.log(json)
      return response
    } else {
      // bad response
      let message = ''
      // try to parse the error message details
      try {
        const json = await response.json()
        console.log(json)
        message = ' - ' + json.apiError[0].errorMessage
      } catch (e) {
        // continue
      }
      throw Error(`${response.status} ${response.statusText}${message}`)
    }
  })

})


// // create new NLP account
// vvb.createNlpAccount({
//   name: "fiery-inferno-5992",
//   description: "ccondry 0325",
//   key: require('../key.json')
// })
// .then(r => r.json())
// .then(json => {
//   const names = json.serviceAccounts.map(account => {
//     return account.name
//   })
//   console.log(names)
// })
// .catch(e => console.log(e))
