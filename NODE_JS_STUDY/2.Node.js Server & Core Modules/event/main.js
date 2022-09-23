const EventEmitter=require("events")
const emitter=new EventEmitter()

const startPeriod=require('./school')
const University=require('./University')


//register a listener for bellRing event
emitter.on('bellRing',()=>{
    console.log("We Need To Run!");
})

//raise as event
emitter.emit('bellRing') //Gonta bejeyse but sontey hobey..r etar jonno emitter.on kortey hobey
                            //jehoto server e kono button nai,tai event fire korey rakbo nijer moto korey
                            //hoye geley ki hobey setar jonno register korey nibo



 //register a listener for bellRing event
emitter.on('bellRing1',(period)=>{
    console.log(`We Need To Run! ${period}`);
})

//raise as event
emitter.emit('bellRing1','second period ended')    




 //register a listener for bellRing event
 emitter.on('bellRing2',({period,text})=>{
    console.log(`We Need To Run! ${period} ${text}`);
})

//raise as event
// setTimeout(() => {
    
//     emitter.emit('bellRing2',{
//         period:'first',
//         text:"period ended"
//     })    

// }, 2000);

startPeriod() //No worling
 //cause 2i jaigay alada alaa EventEmiter er instance/onj create kora asey

console.log("Emitter Extends")

var university=new University()

 //register a listener for bellRing event
 university.on('bellRing4',({period,text})=>{
    console.log(`We Need To Run! ${period} ${text}`);
})

university.startPeriod()
//
//NOTE : je object diye event ke emit korbo ...se same object diye event ke listen korbo