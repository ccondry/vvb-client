const cva = require('./models/cva')

module.exports = class {
  constructor ({url, username, password}) {
    this.baseUrl = url + '/speechconfig/rest/config/nlp/serviceaccount'
    const creds = `${username}:${password}`
    const base64Creds = Buffer.from(creds).toString('base64')
    this.authString = 'Basic ' + base64Creds
    this.cva = new cva(this)
  }
}
