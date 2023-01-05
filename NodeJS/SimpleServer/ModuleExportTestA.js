const a = 'module from A'
const b = require('./ModuleExportTestB.js')

console.log(b + ' in a.js')

module.exports = a