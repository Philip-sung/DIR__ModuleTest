let cycle = 1;

function EstimateRunningTime(estimateFunction) {
    console.log(`* Test number ${cycle} : `);
    console.time("timeStamp");
    estimateFunction();
    console.timeEnd("timeStamp");
    cycle++;
    console.log();
}

exports.EstimateRunningTime = EstimateRunningTime;