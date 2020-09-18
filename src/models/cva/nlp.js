const fetch = require('node-fetch')

module.exports = class {
  constructor (parent) {
    this.parent = parent
  }

  async listServiceAccounts () {
    const url = this.parent.baseUrl
    const options = {
      headers: {
        Accept: 'application/json',
        Authorization: this.parent.authString
      }
    }
    return fetch(url, options)
  }
  
  async createServiceAccount ({name, key, description}) {
    const url = this.parent.baseUrl
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
        Authorization: this.parent.authString,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    return fetch(url, options)
  }
  
  async updateServiceAccount ({name, key, description}) {
    const url = this.parent.baseUrl + '/' + name
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
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: this.parent.authString,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    return fetch(url, options)
  }
  
  async deleteServiceAccount (name) {
    const url = this.parent.baseUrl + '/' + name
    const options = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: this.parent.authString
      }
    }
    return fetch(url, options)
  }
}