"use strict";
const searchName = (value) => {
    if (value === null) {
        console.log('There is nothing to search');
    }
    else {
        console.log('Searching');
    }
};
searchName('Mazid');
searchName(null);
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ');
        const newValue = parseInt(value);
        const convertedSpeed = (newValue * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else {
        console.log('There is wrong type');
    }
};
getMyCarSpeed(10);
getMyCarSpeed('20 kmh');
const errorFunction = (message) => {
    throw new Error(message);
};
console.log(errorFunction('Error Type'));
