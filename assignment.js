
// Converting kilometer to meter
function kilometerToMeter(kilometerValue){
    if(kilometerValue < 0){
        return 'Value must be a positive number!!!';
    }

    if(typeof(kilometerValue) !== 'number'){
        return 'Value must be a number!!!';
    }

    var meterValue = kilometerValue * 1000;

    return meterValue;
}

// Calculating budget
function budgetCalculator(watchValue, phoneValue, laptopValue){
    if((watchValue < 0) || (phoneValue < 0) || (laptopValue < 0)){
        return 'Value must be a positive number!!!';
    }

    if(typeof(watchValue) !== 'number' || typeof(phoneValue) !== 'number' || typeof(laptopValue) !== 'number'){
        return 'Value must be a number!!!';
    }

    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    var totalBudget = (watchValue * watchPrice) + (phoneValue * phonePrice) + (laptopValue * laptopPrice);

    return totalBudget;
}

// Calculating hotel cost
function hotelCost(numberOfDays){
    if(numberOfDays <= 0){
        return 'Value must be a greater than 0!!!';
    }

    if(typeof(numberOfDays) !== 'number'){
        return 'Value must be a number!!!';
    }

    var totalCost;

    if(numberOfDays <= 10){
        totalCost = numberOfDays * 100;
    }

    else if(numberOfDays <= 20){
        var costFirstTenDays  = 10 * 100;
        var remainingDays     = numberOfDays - 10;
        var costSecondTenDays = remainingDays * 80;
        totalCost             = costFirstTenDays + costSecondTenDays;
    }

    else{
        var costFirstTenDays       = 10 * 100;
        var costSecondTenDays      = 10 * 80;
        var remainingDays          = numberOfDays - 20;
        var costThirdRemainingDays = remainingDays * 50;
        totalCost                  = costFirstTenDays + costSecondTenDays + costThirdRemainingDays;
    }

    return totalCost;
}

// Finding largest friend name from an array
function megaFriend(nameOfFriends){
    if(!Array.isArray(nameOfFriends)){
        return 'Value must be an array of names!';
    }

    if(nameOfFriends.length === 0){
        return 'Array can not be empty!'
    }

    var longestName;
    var longestNameLength = 0;

    for (var i = 0; i < nameOfFriends.length; i++){
        if(typeof(nameOfFriends[i]) !== 'string'){
            return 'Every element must be a type of string!'
        }
        else {
            if (nameOfFriends[i].length > longestNameLength){
                longestNameLength = nameOfFriends[i].length;
                longestName = nameOfFriends[i];
            }
        }
    }

    return longestName;
}

