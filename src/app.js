const { fileCreate } = require('./helpers/multiply');
const argv = require('./config/yargs');

require('colors');

console.clear()

fileCreate(argv.b, argv.l, argv.a)
  .then( fileName => console.log(fileName.magenta.bold, 'created'.magenta.bold))
  .catch( err => console.log(err))
