// const yargs = require('yargs/yargs');

const currentDate = new Date();

const returnCorrectedDate = function (date, type, operation, number) {
    const changeNumber = {
        "add": ((function(){ number = number })),
        "sub": ((function(){ number *= -1 }))
    }
    const changeTime = {
        "year": ((function(){ date.setFullYear(date.getFullYear()+number) })),
        "month": ((function(){ date.setMonth(date.getMonth()+number) })),
        "date": ((function(){ date.setDate(date.getDate()+number) })),
    };
    changeNumber[operation]();
    changeTime[type]();
    return date;
}

const returnFormattedDate = function (date, type) {
    return {
        "ISO": ((function(){ return date.toISOString() })),
        "year": ((function(){ return date.getFullYear() })),
        "month": ((function(){ return date.getMonth() })),
        "date": ((function(){ return date.getDate() })),
    }[type]().toString()
};

console.log(returnFormattedDate(currentDate, "ISO"));
console.log(returnCorrectedDate(currentDate, "year", "sub", 2))