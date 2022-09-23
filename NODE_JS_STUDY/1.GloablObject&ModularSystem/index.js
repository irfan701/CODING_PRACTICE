

setTimeout(()=>{
    console.log("Hello World!")
},8000)

console.log(global)

var a=6
console.log(global.a) //undefined

console.log('seperate')
console.log(__dirname)
console.log(__filename)
