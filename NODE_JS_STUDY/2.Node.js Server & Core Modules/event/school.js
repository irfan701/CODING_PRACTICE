const EventEmitter=require("events")
const emitter=new EventEmitter()

function startPeriod(){
    console.log("Class Started");
    //raise event when bellring
    //raise as event
setTimeout(() => {
    
    emitter.emit('bellRing2',{
        period:'first',
        text:"period ended"
    })    

}, 2000);

}

module.exports=startPeriod