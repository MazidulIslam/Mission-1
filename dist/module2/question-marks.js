"use strict";
var _a, _b;
//ternary operator
const age = 22;
// if (age > 18) {
//   console.log('yes');
// } else {
//   console.log('no');
// }
const isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult);
// Nullish coalescing operator
// Null and Undefined
// const isAuthenticatedUser = null;
// const isAuthenticatedUser = undefined;
const isAuthenticatedUser = '';
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
console.log({ userName }, { userName2 });
const human1 = {
    name: 'Mazid',
    age: 33,
    address: {
        city: 'no city',
        road: 'no road',
    },
};
const home = (_b = (_a = human1 === null || human1 === void 0 ? void 0 : human1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No Home';
console.log(home);
