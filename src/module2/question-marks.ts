//ternary operator
const age: number = 22;

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
const userName = isAuthenticatedUser ?? 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';

console.log({ userName }, { userName2 });

type Human = {
  name: string;
  age: number;
  address: {
    city: 'no city';
    road: 'no road';
    home?: string;
  };
};

const human1: Human = {
  name: 'Mazid',
  age: 33,
  address: {
    city: 'no city',
    road: 'no road',
  },
};

const home = human1?.address?.home ?? 'No Home';
console.log(home);
