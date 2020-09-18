const nlp = require('./nlp')

module.exports = class {
  constructor (parent) {
    this.nlp = new nlp(parent)
  }
}