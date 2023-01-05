const b = 'variable from B'
const a = require('./ModuleExportTestA.js')

console.log(a + ' in b.js')

module.exports = b;