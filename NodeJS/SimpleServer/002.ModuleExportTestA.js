const a = 'module from A'
const b = require('./002.ModuleExportTestB.js')

console.log(b + ' in a.js')

module.exports = a