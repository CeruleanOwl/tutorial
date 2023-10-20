const {readFile, writeFile} = require('fs');

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result)=>{
    //check for error code goes here
    const first = result; //return first result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        //check for error code goes here
    const second = result; //return second result
    writeFile(
        './content/result-async.txt',
        `Here is the result: ${first} ${second}`
        //, {flag: 'a'} //can have this to allow append functionality.
    , (err, result)=>{
        //check for error code goes here
        console.log('done with this task')
    })

    })
})
console.log('starting next task')