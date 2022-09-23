const EventEmitter=require("events")

class University extends EventEmitter{
    
    startPeriod(){
        console.log("Class Started");
        //raise event when bellring
        //raise as event
    setTimeout(() => {
        
        this.emit('bellRing4',{
            period:'first',
            text:"period ended"
        })    
    
    }, 2000);
    
    }
}
module.exports=University