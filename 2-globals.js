// GLOBALS - NO WINDOW!!!

//__dirname - path to current directory
//__filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

//prints hello world to terminal every second after printing the path.

console.log(__dirname)
setInterval(() => {
    console.log('Hello World!')
}, 1000)

//use control + c to end program in terminal.