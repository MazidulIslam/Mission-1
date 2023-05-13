"use strict";
// const crush1: {
//   name: string;
//   age: number;
//   profession: string;
//   address: string;
// } = {
//   name: 'Someone',
//   age: 33,
//   profession: 'Engineer',
//   address: 'Dhaka',
// };
// const crush2: {
//   name: string;
//   age?: number;
//   profession: string;
//   address: string;
// } = {
//   name: 'Someone2',
//   age: 28,
//   profession: 'Doctor',
//   address: 'Chittagong',
// };
const crush1 = {
    name: 'Someone',
    age: 33,
    profession: 'Engineer',
    address: 'Dhaka',
};
const crush2 = {
    name: 'Someone2',
    //   age: 28,
    profession: 'Doctor',
    address: 'Chittagong',
};
const isMarried = false;
const calculate = (num1, num2, operation //(x: number, y: number) => number;
) => {
    return operation(num1, num2);
};
let ans = calculate(10, 20, (a, b) => a + b);
console.log(crush1, crush2, ans);
