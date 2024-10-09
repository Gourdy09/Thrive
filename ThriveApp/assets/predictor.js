const pointsToForecast = 28;

export function calculateForecast(currentBloodsugar, hoursSinceMeal) {
    hoursSinceMeal /= 2;
    let maxBloodsugar = currentBloodsugar;
    let futurePoints = [];
    let rise = false;
    console.log("Bloodsugar: " + currentBloodsugar + ". Minutes since food or drink: " + hoursSinceMeal * 60)

    for(let i = 0; i < pointsToForecast; i++){
        if(hoursSinceMeal <= 1.5 && (((hoursSinceMeal * 60) + (i+1)*7.5)) <= 90){
            futurePoints[i] = {time: i*7.5, sugar: calculateRise(currentBloodsugar, ((i+1)*7.5))};
            rise = true;
            maxBloodsugar = futurePoints[i].sugar;
        }
        else if(rise === true){
            futurePoints[i] = {time: i*7.5, sugar: calculateDeclineAfterRise(currentBloodsugar, ((i+1)*7.5))};
        }
        else{
            futurePoints[i] = {time: i*7.5, sugar: calculateDecline(currentBloodsugar, ((i+1)*7.5))};
        }
    }
    console.log(futurePoints);
    return futurePoints;
}

function calculateRise(currentBloodsugar, timeIntoFuture){
    t = Math.round((currentBloodsugar * Math.pow(1.003, timeIntoFuture)));
    return t > 0 ? t: 0;
}
function calculateDeclineAfterRise(maxBloodsugar, timeIntoFuture){
    t = Math.round(((-0.141905*timeIntoFuture) + maxBloodsugar));
    return t > 0 ? t: 0;
}

function calculateDecline(maxBloodsugar, timeIntoFuture){
    t = Math.round(((-0.141905*timeIntoFuture) + maxBloodsugar));
    return t > 0 ? t: 0;
}