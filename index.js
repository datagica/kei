const locale2 = require('locale2')
const get = require('lodash.get')

function kei (locales) {
  return function translate (locale) {
    locale = locale || locale2
    const func = function () {
      let key = ''
      for (let i = 0; i < arguments.length; i++) {
        key += arguments[i]
      }
      return get(locales[locale], key, key)
    }
    Object.keys(locales[locale]).forEach(key => {
      func[key] = locales[locale][key]
    })
    return func
  }
}
module.exports = kei
