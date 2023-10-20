//CommonJS, every file in module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi('Wesley')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.items[0])
sayHi(data.singlePerson)