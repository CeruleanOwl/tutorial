const {readFileSync, writeFileSync} = require('fs');
console.log('start')
// ^^This is the same as this:
// const fs = require('fs');
// fs.readFileSync
// fs.writeFileSync

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second)  //This is for calling the contents of the file, similar to cat in linux.

//creates a file and the flag: 'a' allows you to append to the file if it is already created.
writeFileSync('./content/result-sync.txt',
 `Here is the result:  ${first}, ${second}`,
 {flag: 'a'}
 )
 console.log('done with with this task')
 console.log('starting the next one')