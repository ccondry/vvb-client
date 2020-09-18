const nlp = require('./nlp')

module.exports = class {
  constructor (parent) {
    this.url = parent.url + '/speechconfig/rest/config'
    this.authorization = parent.authorization
    // NLP module
    this.nlp = new nlp(this)
  }
}