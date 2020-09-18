const serviceAccount = require('./service-account')

module.exports = class {
  constructor (parent) {
    this.url = parent.url + '/speechconfig/rest/config'
    this.authorization = parent.authorization
    // NLP module
    this.nlp = new serviceAccount(this, 'nlp')
    this.asr = new serviceAccount(this, 'asr')
    this.tts = new serviceAccount(this, 'tts')
  }
}