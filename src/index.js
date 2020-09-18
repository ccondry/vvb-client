const fetch = require('node-fetch')

module.exports = class {
  constructor({url, username, password}) {
    this.baseUrl = url + '/speechconfig/rest/config/nlp/serviceaccount'
    const creds = `${username}:${password}`
    const base64Creds = Buffer.from(creds).toString('base64')
    this.authString = 'Basic ' + base64Creds
  }

  async listNlpAccounts () {
    const url = this.baseUrl
    const options = {
      headers: {
        Accept: 'application/json',
        Authorization: this.authString
      }
    }
    return fetch(url, options)
  }

  async createNlpAccount ({name, key, description}) {
    const url = this.baseUrl
    // make sure authKey is a stringified JSON object
    const authKey = typeof key === 'string' ? key : JSON.stringify(key)
    const body = {
      serviceAccount: {
        name,
        providerName: "DialogFlow",
        authKey,
        properties: [],
        description
      }
    }
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: this.authString,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    return fetch(url, options)
  }

  async deleteNlpAccount (name) {
    const url = this.baseUrl + '/' + name
    const options = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: this.authString
      }
    }
    return fetch(url, options)
  }
}
