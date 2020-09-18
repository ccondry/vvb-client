const fetch = require('node-fetch')

module.exports = async function (url, options) {
  try {
    const response = await fetch(url, options)
    if (response.ok) {
      // try to parse and return the response
      try {
        const json = await response.json()
        return json
      } catch (e) {
        // response was OK, so maybe just an empty/null body
        return
      }
    } else {
      // bad response. try to parse the error message out
      let message = ''
      try {
        const json = await response.json()
        message = json.apiError[0].errorMessage
      } catch (e) {
        try {
          const text = await response.text()
          message = text
        } catch (e2) {
          // continue
        }
      }
      // throw a nice readable error message
      throw Error(`${response.status} ${response.statusText} - ${message}`)
    }
  } catch (e) {
    // rethrow all
    throw e
  }
}
