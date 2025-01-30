const fs = require('fs');

const readStream = fs.createReadStream('./docs/docs.txt', { encoding: 'utf8' });;
const writeStream = fs.createWriteStream('./docs/docs1.txt');


//readStream.on('data', (chunck) => {
//    console.log(`\n---------NEW CHUNCK---------\n`);
//    console.log(chunck);
//    writeStream.write(`\n CHUNCK WRITTEN \N`);
//    writeStream.write(chunck);
//})

readStream.pipe(writeStream)