const fetch = require('../fetch')

module.exports = class {
  constructor (parent, type) {
    this.url = `${parent.url}/${type}/serviceaccount`
    this.authorization = parent.authorization
    
    this.providerName = type === 'nlp' ? 'DialogFlow' : 'Google'
  }

  async getServiceAccount (name) {
    const url = this.url + '/' + name
    const options = {
      headers: {
        Accept: 'application/json',
        Authorization: this.authorization
      }
    }
    return fetch(url, options)
  }

  async listServiceAccounts () {
    const url = this.url
    const options = {
      headers: {
        Accept: 'application/json',
        Authorization: this.authorization
      }
    }
    return fetch(url, options)
  }
  
  async createServiceAccount ({name, key, description}) {
    const url = this.url
    // make sure authKey is a stringified JSON object
    const authKey = typeof key === 'string' ? key : JSON.stringify(key)
    const body = {
      serviceAccount: {
        name,
        providerName: this.providerName,
        authKey,
        properties: [],
        description
      }
    }
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: this.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    return fetch(url, options)
  }
  
  async updateServiceAccount ({name, key, description}) {
    const url = this.url + '/' + name
    // make sure authKey is a stringified JSON object
    const authKey = typeof key === 'string' ? key : JSON.stringify(key)
    const body = {
      serviceAccount: {
        name,
        providerName: this.providerName,
        authKey,
        properties: [],
        description
      }
    }
    const options = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: this.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    return fetch(url, options)
  }
  
  async deleteServiceAccount (name) {
    const url = this.url + '/' + name
    const options = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: this.authorization
      }
    }
    return fetch(url, options)
  }
}