const path=require('path')
const os=require('os')
const fs=require('fs')

/*
const myPath='D:/CODING_PRACTISE/NODE_JS_STUDY/2.Node.js Server & Core Modules'

console.log(path.dirname(myPath))
console.log(path.extname(myPath))
console.log("SPLIT")
console.log(path.parse(myPath))


console.log(os.platform())
console.log(os.homedir())
console.log(os.cpus())
*/
console.log("synchronous blocking way")
//fs.writeFileSync('myFile.txt',"Hello Irfan")
//fs.writeFileSync('myFile.txt',"Hello HOW ARE YOU")

// fs.appendFileSync('myFile.txt',"Hello Programmers")

const data=fs.readFileSync('myFile.txt')
console.log(data.toString())

//node js asynchronous non-blocking way te kaj korey by default
/// 3rd party kaj ti korvey...tai  "ASYNC ->HELLO WORLD" eti agey show korbey then baki aynchronous function ti
console.log("Asynchronous non-blocking way")
fs.readFile('myFile.txt',(err,data)=>{
    console.log(data.toString())
})

console.log("ASYNC ->HELLO WORLD")

///