require('colors');

const argv =  require('yargs')
  .option('a', {
    alias: 'amount',
    type: 'number',
    default: 10,
    describe: 'Table multiplier amount'
  })
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true, 
    default: 1,
    describe: 'Table multiplication base'
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Show table in console'
  })
  .check((argv, options) => {
    if (isNaN(argv.b )) {
      throw 'Error: The base has to be a number'.red.bold
    }
    if (isNaN(argv.a)) {
      throw 'Error: The multiplier amount has to be a number'.red.bold
    }
    return true;
  })
.argv;

module.exports = argv;