//normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

//Default parameter

function add2(num1: number, num2: number = 10): number {
  return num1 + num2;
}
// function add2(num1: number=10, num2: number): number {
//   return num1 + num2;
// }                            error for first param is default

//arrowFunction
const addArrow = (num1: number, num2: number): number => num1 + num2;
// {
//   `The sum this two number is ${num1 + num2}`;
// };

let a = add(2, 3);
let a2 = add2(3);
let b = addArrow(3, 5);

const arr = [3, 4, 5, 6];

const newArray = arr.map((elem: number) => elem * elem);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: 'mazid',
  balance: 5,
  addBalance(money: number) {
    return `My new balance is ${this.balance + money}`;
  },
};

// spread operator

const myFriends = ['rasel', 'mazid', 'ratul'];
const newFriends = ['monica', 'rachel', 'bella'];
const myBestFriends = {
  fullName: 'Mazidul Islam',
  ages: 23,
};

const { fullName: aliasName } = myBestFriends;

myFriends.push(...newFriends);

// rest operator

const greetFriends = (frnd1: string, frnd2: string, frnd3: string): void => {
  let greet = `\n Hi ${frnd1}\n Hi ${frnd2}\n Hi ${frnd3}\n`;
  //   return greet;
};

const greetFriendsRest = (...friends: string[]): void => {
  console.log(friends);
};

const greetFriendsRestNotArray = (...friends: string[]): void => {
  friends.forEach((friend) => {
    console.log(`Hi ${friend}`);
  });
};

console.log(
  `normal function: ${a}`,
  a2,
  b,
  newArray,
  person.addBalance(4),
  myFriends,
  greetFriends('Mazid', 'Rashel', 'Mahedi'),
  aliasName
);
greetFriendsRest('Mazid', 'Rashel', 'Mahedi', 'shamim');
greetFriendsRestNotArray('Mazid', 'Rashel', 'Mahedi', 'shamim');
