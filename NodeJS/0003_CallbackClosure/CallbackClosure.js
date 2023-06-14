function logCar(logMsg, callback){
    process.nextTick(function() {
        callback(logMsg);
    })
}

var cars = ["Hyundai", "Kia", "Lotte"];
for(var idx in cars){
    var message = `${cars[idx]}`;
    logCar(message,function(){console.log(`Normal Callback : ` + message)});
}