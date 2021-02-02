#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const currentDate = new Date();

// YARGS
const argv = yargs(hideBin(process.argv))
    .usage('gcd <COMMAND> [OPTION]')
    .usage('')
    .usage('Displays the date')
    .command('current', 'Display the current date. It will only show a certain part of the date, if there is at least one time-related option. Otherwise, the full ISO date will be displayed.')
    .command('add', 'Add amount of time set by options to the current date. At least one time-related option is required.')
    .command('sub', 'Subtract amount of time set by options from the current date. At least one time-related option is required.')
    .alias('y', 'year').describe('y', 'Year')
    .alias('m', 'month').describe('m', 'Month')
    .alias('d', 'date').describe('d', 'Date')
    .describe('debug', 'Debug (input logging)')
    .alias('h', 'help')
    .alias('v', 'version')
    .example('gcd current', 'Displays the current date')
    .example('gcd current -y', 'Displays the current year')
    .example('gcd add -m 4', 'Calculates the date in four months')
    .example('gcd sub -y 1 -m 4', 'Calculates the date that was one year and four months earlier')
    .argv;

// INPUT DESTRUCTION
const { _: commands, year, month, date, debug } = argv;

// FOR INPUT TEST PURPOSES
if (debug) console.log('DEBUG: ', commands, ' Y: ', year, ' M: ', month, ' D: ', date);

// RETURNS CALCULATED DATE
const returnCalculatedDate = function (date, type, operation, number) {
    if (operation=="sub") number *= -1;
    switch(type) {
        case "year":
            date.setFullYear(date.getFullYear()+number)
            break;
        case "month":
            date.setMonth(date.getMonth()+number)
            break;
        case "date":
            date.setDate(date.getDate()+number)
            break;
        default:
            break;
    }
    return date;
};

// RETURNS FORMATTED DATE
const returnFormattedDate = function (date, type) {
    let value = date;
    switch(type) {
        case "year":
            value = date.getFullYear();
            break;
        case "month":
            value = date.getMonth();
            break;
        case "date":
            value = date.getDate() 
            break;
        default:
            value = date.toISOString();
            break;
    }
    return value;
};

// CHECKS IF "CURRENT" COMMAND IS IN INPUT
if (commands[0] === "current") {
    if (year) console.log(returnFormattedDate(currentDate, "year"));
    if (month) console.log(returnFormattedDate(currentDate, "month"));
    if (date) console.log(returnFormattedDate(currentDate, "date"));
    if (!year && !month && !date) console.log(returnFormattedDate(currentDate));
};

// CHECKS IF "ADD"/"SUB" COMMAND IS IN INPUT
if (commands[0] === "add" || commands[0] === "sub") {
    let value = currentDate;
    if (year) value = returnCalculatedDate(value, "year", commands[0], year);
    if (month) value = returnCalculatedDate(value, "month", commands[0], month);
    if (date) value = returnCalculatedDate(value, "date", commands[0], date);
    if (!year && !month && !date) console.log('Cannot use ADD/SUB command without any time-related options. The current date is:');
    console.log(value.toISOString())
};