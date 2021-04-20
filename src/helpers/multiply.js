const fs = require('fs');
const colors = require('colors');

const fileCreate = async( base, list = false, amount ) => {
  try {
    let script = '';
    let terminal = '';

    for(let i = 1; i <= amount; i++){
      script += `${base} x ${i} = ${base * i}\n`;
      terminal += `${base} ${'x'.magenta} ${i} ${'='.magenta} ${base * i}\n`;
    }
    
    if (list) {
      console.log('========================'.rainbow);
      console.log(colors.white.bold(base), 'times table'.bold,);
      console.log('========================'.rainbow);
      console.log(terminal);
    }

    fs.writeFileSync(`script/table-${base}.txt`, script);
      
    return `table-${base}.txt`;
    
  } catch (error) {
    throw (error)
  }
}

module.exports = {
  fileCreate
}