const cva = require('./models/cva')

module.exports = class {
  constructor ({url, username, password}) {
    this.url = url
    // build authorization header string
    const creds = `${username}:${password}`
    const base64Creds = Buffer.from(creds).toString('base64')
    this.authorization = 'Basic ' + base64Creds
    // CVA module
    this.cva = new cva(this)
  }
}
